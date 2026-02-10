import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const videoRef = useRef(null);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo);
      return () => video.removeEventListener("loadeddata", playVideo);
    }
  }, []);

  return (
    <section id="hero" className="hero">
<video
  ref={videoRef}
  className="hero-video"
  src="https://res.cloudinary.com/dawod02ta/video/upload/v1770406542/vecteezy_colorful-fast-lines-background_2972580_tcsi1o.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
/>




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
