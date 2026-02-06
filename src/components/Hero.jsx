import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const words = [
    "Digital Infrastructure",
    "Smart Networks",
    "Future Systems",
    "RFID Solutions",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />

      <div className="hero-overlay">
        <div>
          <h1 className="hero-title">
            <span className="hero-word">Reliable,</span>{" "}
            <span className="hero-word">Scalable</span>{" "}
            <span className="hero-word">&amp;</span>{" "}
            <span className="hero-word">Future-Ready</span>
            <br />
            <span className="changing-text">{words[index]}</span>
          </h1>

          <p>
            P2P Infrastructure delivers end-to-end IT, Telecom, OFC, Data Center and Digital Technology solutions across India.
          </p>

          <Link to="/solutions" className="primary-btn">Explore Our Solutions</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
