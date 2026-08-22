import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import bowlImg from "../assets/images/image-as.webp";
import chilliImg from "../assets/images/flying-chilli.webp";
import flakeImg from "../assets/images/flakes.webp";

import "../styles/Whoweare.css";

gsap.registerPlugin(ScrollTrigger);

const FLAKE_COUNT = 26;

function WhoAreWe() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const bowlRef = useRef(null);
  const chilliRef = useRef(null);
  const chilliFloatRef = useRef(null);
  const flakeRefs = useRef([]);
  flakeRefs.current = [];

  const registerFlakeRef = (el) => {
    if (el && !flakeRefs.current.includes(el)) {
      flakeRefs.current.push(el);
    }
  };

  // Deterministic pseudo-random values so the trail layout never
  // reshuffles between re-renders (keeps scrub perfectly reversible).
  const flakeConfigs = useMemo(() => {
    let seed = 42;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    return Array.from({ length: FLAKE_COUNT }).map((_, i) => {
      const t = 0.14 + (i / FLAKE_COUNT) * 0.78 + rand() * 0.03;
      return {
        t, // fraction along the flight path where this flake releases
        size: 16 + rand() * 18, // 16-34px round chip
        bgX: rand() * 100, // sample a different patch of flakes.webp per flake
        bgY: rand() * 100,
        bgZoom: 260 + rand() * 140, // background-size % — zoomed in so each
        // flake shows one small fragment of the cluster image, not the whole thing
        outX: 22 + rand() * 75, // drift outward
        outY: 18 + rand() * 68, // drift downward
        rotation: (rand() - 0.5) * 300,
        scale: 0.8 + rand() * 0.8,
        duration: 0.7 + rand() * 0.6,
      };
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([chilliRef.current, ...flakeRefs.current], {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 769px)",
          isMobile: "(max-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions;
          const scaleFactor = isMobile ? 0.55 : 1;

          // origin = the specific chilli sitting in the bowl that "lifts off"
          // (upper-center-right of the pile, matching the reference photo).
          // Path stays a consistent ~45° diagonal the whole way — never vertical.
          const path = {
            originX: 16 * scaleFactor,
            originY: -96 * scaleFactor,
            liftX: 150 * scaleFactor,
            liftY: -150 * scaleFactor,
            flyX: 460 * scaleFactor,
            flyY: -460 * scaleFactor,
          };

          const totalTime = 2.6;

          // Gentle continuous hover once the chilli has finished flying —
          // lives on the inner element so it never fights the scroll-driven
          // position/rotation/scale tween on the outer wrapper.
          const idleFloat = gsap.to(chilliFloatRef.current, {
            y: 14,
            rotation: 4,
            duration: 2.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            paused: true,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (self.progress >= 0.999) {
                  idleFloat.play();
                } else if (idleFloat.isActive() || idleFloat.progress() > 0) {
                  idleFloat.pause(0);
                  gsap.set(chilliFloatRef.current, { y: 0, rotation: 0 });
                }
              },
            },
            defaults: { ease: "none" },
          });

          // Stage 1 — the chilli slowly lifts out from its spot in the bowl
          tl.fromTo(
            chilliRef.current,
            {
              opacity: 0,
              x: path.originX,
              y: path.originY,
              rotation: 0,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: path.liftX,
              y: path.liftY,
              rotation: -10,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            0
          );

          // Stage 2 — it accelerates diagonally toward the upper right,
          // holding the same gentle slant rather than reversing direction
          tl.to(
            chilliRef.current,
            {
              x: path.flyX,
              y: path.flyY,
              rotation: -28,
              scale: 1.18,
              duration: 1.6,
              ease: "power2.inOut",
            },
            1
          );

          // The bowl stays put, only a whisper of scale
          tl.to(bowlRef.current, { scale: 1.02, duration: totalTime }, 0);

          // Flakes gently sprinkle off the chilli as it travels
          flakeConfigs.forEach((cfg, i) => {
            const el = flakeRefs.current[i];
            if (!el) return;

            const localTime = cfg.t * totalTime;
            let baseX, baseY;

            if (localTime <= 1) {
              const p = localTime / 1;
              baseX = gsap.utils.interpolate(path.originX, path.liftX, p);
              baseY = gsap.utils.interpolate(path.originY, path.liftY, p);
            } else {
              const p = (localTime - 1) / 1.6;
              baseX = gsap.utils.interpolate(path.liftX, path.flyX, p);
              baseY = gsap.utils.interpolate(path.liftY, path.flyY, p);
            }

            tl.fromTo(
              el,
              { opacity: 0, x: baseX, y: baseY, rotation: 0, scale: 0.3 },
              {
                opacity: 1,
                x: baseX + cfg.outX * scaleFactor,
                y: baseY + cfg.outY * scaleFactor,
                rotation: cfg.rotation,
                scale: cfg.scale,
                duration: cfg.duration,
                ease: "power2.out",
              },
              localTime
            );
          });

          return () => tl.scrollTrigger && tl.scrollTrigger.kill();
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [flakeConfigs]);

  return (
    <section className="who-we-are" ref={sectionRef}>
      <div className="container">
        <div className="who-container">
          <div className="who-content">
            <span
              className="section-tag"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="800"
            >
              OUR HERITAGE
            </span>

            <h2
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="150"
              data-aos-duration="800"
            >
              Who Are We?
            </h2>

            <p
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              MNE is a trusted name in premium red chili sourcing,
              processing, and export. We deliver high-quality chillies
              with strict quality control, traceability, and long-standing
              farmer partnerships.
            </p>

            <div className="who-gallery">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="450"
                data-aos-duration="700"
              >
                <img src={img1} alt="Farm" />
                <span>Farm</span>
              </div>

              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="600"
                data-aos-duration="700"
              >
                <img src={img2} alt="Process" />
                <span>Process</span>
              </div>

              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="750"
                data-aos-duration="700"
              >
                <img src={img3} alt="Product" />
                <span>Product</span>
              </div>
            </div>
          </div>

          <div className="who-image" ref={imageWrapRef}>
            <div className="corner top"></div>

            <img
              src={bowlImg}
              alt="Chillies"
              className="bowl-img"
              ref={bowlRef}
            />

            <div className="flying-chilli" ref={chilliRef}>
              <img
                src={chilliImg}
                alt=""
                aria-hidden="true"
                className="flying-chilli-img"
                ref={chilliFloatRef}
              />
            </div>

            {flakeConfigs.map((cfg, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="chilli-flake"
                ref={registerFlakeRef}
                style={{
                  width: cfg.size,
                  height: cfg.size,
                  backgroundImage: `url(${flakeImg})`,
                  backgroundSize: `${cfg.bgZoom}%`,
                  backgroundPosition: `${cfg.bgX}% ${cfg.bgY}%`,
                }}
              />
            ))}

            <div className="corner bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;