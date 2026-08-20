import { useEffect, useRef, useState } from "react";
import "../styles/StatsH.css";

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <h2 ref={ref}>
      {count}
      {suffix}
    </h2>
  );
}

function Stats() {
  const stats = [
    {
      end: 500,
      suffix: "+",
      title: "Partner Farmers",
      desc: "Across Guntur & Byadagi regions",
    },
    {
      end: 25,
      suffix: "+",
      title: "Export Countries",
      desc: "From Japan to Brazil",
    },
    {
      end: 28,
      suffix: " yrs",
      title: "Industry Experience",
      desc: "Since 1998, trusted globally",
    },
    {
      end: 99,
      suffix: "%",
      title: "Quality Pass Rate",
      desc: "Strict batch-level QC",
    },
  ];

  return (
    <section className="stats"> 
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <Counter end={item.end} suffix={item.suffix} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;