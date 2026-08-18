import { useRef } from "react";

/**
 * Update the `chillies` array below:
 * - src: path to your video file (e.g. import from "../assets/videos/..." or a public URL)
 * - poster: a still image shown before hover/play (recommended — avoids a black flash)
 * - name / description: label under each video
 */
const chillies = [
  {
    name: "Dried Chilli",
    description: "Whole sun-dried chillies, deep colour and full aroma.",
    src: "/assests/videos/dried-chilli.mp4",
    poster: "/assests/images/dried-chilli-poster.jpg",
  },
  {
    name: "Chilli Powder",
    description: "Finely ground for consistent colour, heat, and flavour.",
    src: "/assests/videos/chilli-powder.mp4",
    poster: "/assests/images/chilli-powder-poster.jpg",
  },
  {
    name: "Chilli Flakes",
    description: "Coarse-cut flakes for a burst of heat and texture.",
    src: "/assests/videos/chilli-flakes.mp4",
    poster: "/assests/images/chilli-flakes-poster.jpg",
  },
];

function ChilliVideosH() {
  const videoRefs = useRef([]);

  const handleEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="chilli-videos">
      <div className="chilli-videos-container">
        <div className="chilli-videos-header">
          <div className="chilli-videos-left">
            <span className="chilli-videos-label">Our Chillies</span>
            <h2 className="chilli-videos-title">
              One chilli, <span>three forms</span>
            </h2>
          </div>
          <div className="chilli-videos-right">
            <p>Hover over a variety to see it in motion.</p>
          </div>
        </div>

        <div className="chilli-videos-grid">
          {chillies.map((chilli, index) => (
            <div
              className="chilli-video-card"
              key={chilli.name}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              <div className="chilli-video-frame">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={chilli.src}
                  poster={chilli.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="chilli-video-caption">
                <h3>{chilli.name}</h3>
                <p>{chilli.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChilliVideosH;