import React, { useState, useEffect, useRef } from "react";
import "./AboutUsPage.css";
import bannerImage from "../assets/vecteezy_silhouettes-of-people-standing-in-a-line_70064434.jpg";
import AnimatedHeading from "../components/AnimatedHeading";
import missionImage from "../assets/vecteezy_digital-target-arrow-striking-the-core-of-a-futuristic_70022293.jpg";
import visionImage from "../assets/vecteezy_digital-communication-and-virtual-technology-global-network_10111082.jpg";
import coreValuesImage from "../assets/vecteezy_close-up-of-a-glass-orb-resting-on-a-circuit-board-with_73285965.jpeg";

const styles = {
  section: {
    minHeight: "60vh",
    padding: "0 0 80px",
    backgroundColor: "#ffffff",
  },
  bannerWrap: {
    width: "100%",
    overflow: "hidden",
  },
  banner: {
    width: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
    height: "320px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "48px 48px 0",
    textAlign: "center",
  },
  introTextWrap: {
    textAlign: "justify",
    maxWidth: "100%",
  },
  h2: {
    fontSize: "38px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px",
    marginTop: "40px",
  },
  h2First: {
    marginTop: 0,
  },
  whoWeAreHeading: {
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px",
    marginTop: 0,
    textAlign: "center",
  },
  whoWeAreWrap: {
    textAlign: "center",
  },
  paragraph: {
    fontSize: "17px",
    color: "#374151",
    lineHeight: 1.8,
    marginBottom: "20px",
  },
  introParagraph: {
    fontSize: "17px",
    color: "#374151",
    lineHeight: 1.8,
    marginBottom: "20px",
    textAlign: "justify",
  },
  highlight: {
    background: "linear-gradient(90deg, #4DEEEA, #60A5FA)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: "600",
  },
  valueTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#0d9488",
    marginBottom: "10px",
  },
  valueText: {
    fontSize: "16px",
    color: "#374151",
    lineHeight: 1.75,
  },
  // Our Core Values – bada round image middle, 4 values: 2 left, 2 right, no animation
  coreValuesSection: {
    padding: "48px 24px 80px",
  },
  coreValuesContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  coreValuesH2: {
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "40px",
    marginTop: "0",
    textAlign: "center",
  },
  coreValuesWrap: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
  },
  coreValuesLeftCol: {
    flex: "1 1 260px",
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  coreValuesCenterCol: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerImageWrap: {
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
    border: "4px solid rgba(77,238,234,0.35)",
  },
  centerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },
  coreValuesRightCol: {
    flex: "1 1 260px",
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  valueCardStatic: {
    background: "#f8fafc",
    border: "1px solid rgba(77,238,234,0.35)",
    borderRadius: "14px",
    padding: "20px 22px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  },
  // Mission / Vision – Latest News style: page do part, choti images
  missionVisionContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "48px 40px 56px",
  },
  missionRow: {
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: "48px",
  },
  visionRow: {
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  missionImageCol: {
    flex: "0 0 320px",
    width: "320px",
    height: "320px",
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#f1f5f9",
    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
  },
  visionImageCol: {
    flex: "0 0 320px",
    width: "320px",
    height: "320px",
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#f1f5f9",
    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
  },
  smallBlockImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
  },
  missionTextCol: {
    flex: "1",
    minWidth: "280px",
    paddingTop: "8px",
  },
  visionTextCol: {
    flex: "1",
    minWidth: "280px",
    paddingTop: "8px",
  },
  blockHeading: {
    fontSize: "clamp(24px, 3vw, 32px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "16px",
    lineHeight: 1.3,
  },
  blockParagraph: {
    fontSize: "17px",
    color: "#374151",
    lineHeight: 1.75,
    margin: 0,
  },
};

export default function AboutUsPage() {
  const [whoWeAreVisible, setWhoWeAreVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const [coreValuesVisible, setCoreValuesVisible] = useState(false);
  const whoWeAreRef = useRef(null);
  const missionVisionContainerRef = useRef(null);
  const coreValuesRef = useRef(null);

  useEffect(() => {
    const el = whoWeAreRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setWhoWeAreVisible(true);
          else setWhoWeAreVisible(false);
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mission aur Vision dono images ek saath ek time par screen par aayein
  useEffect(() => {
    const el = missionVisionContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMissionVisible(true);
            setVisionVisible(true);
          } else {
            setMissionVisible(false);
            setVisionVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Core Values: left se 2 values, right se 2 values samne aayein
  useEffect(() => {
    const el = coreValuesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCoreValuesVisible(true);
          else setCoreValuesVisible(false);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.bannerWrap} className="banner-reveal">
        <img src={bannerImage} alt="" style={styles.banner} />
      </div>
      <div style={styles.container}>
        <div style={styles.whoWeAreWrap} ref={whoWeAreRef}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: whoWeAreVisible ? 1 : 0,
              transform: whoWeAreVisible ? "translateY(0)" : "translateY(-140px)",
              transition: "opacity 1s ease-out, transform 1.2s ease-out",
            }}
          >
            <AnimatedHeading as="h2" style={styles.whoWeAreHeading}>
              Who We Are
            </AnimatedHeading>
          </div>
        </div>
        <div style={styles.introTextWrap} className="about-intro-text">
          <p style={styles.introParagraph}>
            <span style={styles.highlight}>P2P Infrastructure</span> is a trusted provider of comprehensive technology and engineering solutions, delivering services across IT Infrastructure, Telecommunication, Mechanical Systems, Smart Surveillance, Data Center Solutions, Fiber Networking, and Digital Technologies. We are committed to building reliable, scalable, and future-ready systems that support the evolving operational needs of modern organizations.
          </p>
          <p style={styles.introParagraph}>
            Headquartered in Varanasi, India, P2P Infrastructure works closely with enterprises, government departments, railways, educational institutions, and private organizations. Our solutions are carefully designed and customized to align with specific project requirements, operational challenges, and long-term objectives.
          </p>
          <p style={styles.introParagraph}>
            Backed by strong engineering expertise, certified professionals, and modern tools, we follow a customer-first approach in every engagement. Our focus on quality, reliability, and timely delivery enables us to consistently achieve excellence across projects of varying scale and complexity.
          </p>
        </div>
      </div>

      {/* Mission & Vision – dono images ek saath screen par aate hain */}
      <div ref={missionVisionContainerRef} style={styles.missionVisionContainer} className="about-mission-container about-vision-container">
        {/* Mission: left = image (slide from left), right = text */}
        <div style={styles.missionRow}>
          <div
            className="about-mission-image"
            style={{
              ...styles.missionImageCol,
              opacity: missionVisible ? 1 : 0,
              transform: missionVisible ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 0.7s ease-out, transform 0.8s ease-out",
            }}
          >
            <img src={missionImage} alt="" style={styles.smallBlockImage} />
          </div>
          <div style={styles.missionTextCol}>
            <h2 style={styles.blockHeading}>
              Design And Deliver Reliable, Scalable, And Intelligent <span style={styles.highlight}>Technology</span> Solutions.
            </h2>
            <p style={styles.blockParagraph}>
              Our mission is to enable organizations to operate efficiently, securely, and with confidence through technology solutions that meet their evolving needs.
            </p>
          </div>
        </div>

        {/* Vision: left = text, right = image (slide from right) */}
        <div style={styles.visionRow}>
          <div style={styles.visionTextCol}>
            <h2 style={styles.blockHeading}>
              India's Most Trusted Partner For <span style={styles.highlight}>Connectivity</span> And Digital Systems.
            </h2>
            <p style={styles.blockParagraph}>
              Our vision is to be recognized as one of India's most trusted and innovative partners for technology, security, and digital system solutions.
            </p>
          </div>
          <div
            className="about-vision-image"
            style={{
              ...styles.visionImageCol,
              opacity: visionVisible ? 1 : 0,
              transform: visionVisible ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 0.7s ease-out, transform 0.8s ease-out",
            }}
          >
            <img src={visionImage} alt="" style={styles.smallBlockImage} />
          </div>
        </div>
      </div>

      <div ref={coreValuesRef} style={styles.coreValuesSection}>
        <div style={styles.coreValuesContainer}>
          <div style={{ textAlign: "center" }}>
            <AnimatedHeading as="h2" style={styles.coreValuesH2}>Our Core Values</AnimatedHeading>
          </div>

          <div style={styles.coreValuesWrap}>
            {/* Left: 2 values – left se samne aate hain */}
            <div
              style={{
                ...styles.coreValuesLeftCol,
                opacity: coreValuesVisible ? 1 : 0,
                transform: coreValuesVisible ? "translateX(0)" : "translateX(-70px)",
                transition: "opacity 0.7s ease-out, transform 0.8s ease-out",
              }}
            >
              <div style={styles.valueCardStatic}>
                <h3 style={styles.valueTitle}>Customer Commitment</h3>
                <p style={styles.valueText}>
                  We place our customers at the center of everything we do, delivering solutions that meet expectations and foster long-term trust and collaboration.
                </p>
              </div>
              <div style={styles.valueCardStatic}>
                <h3 style={styles.valueTitle}>Engineering Excellence</h3>
                <p style={styles.valueText}>
                  We adhere to world-class engineering practices, leverage advanced technologies, and maintain strict quality standards to ensure dependable performance.
                </p>
              </div>
            </div>

            {/* Center: bada round image */}
            <div style={styles.coreValuesCenterCol}>
              <div style={styles.centerImageWrap} className="about-center-image">
                <img src={coreValuesImage} alt="" style={styles.centerImage} />
              </div>
            </div>

            {/* Right: 2 values – right se samne aate hain */}
            <div
              style={{
                ...styles.coreValuesRightCol,
                opacity: coreValuesVisible ? 1 : 0,
                transform: coreValuesVisible ? "translateX(0)" : "translateX(70px)",
                transition: "opacity 0.7s ease-out, transform 0.8s ease-out",
              }}
            >
              <div style={styles.valueCardStatic}>
                <h3 style={styles.valueTitle}>Innovation & Growth</h3>
                <p style={styles.valueText}>
                  We embrace change and continuously evolve, using emerging technologies and industry developments to create future-ready solutions.
                </p>
              </div>
              <div style={styles.valueCardStatic}>
                <h3 style={styles.valueTitle}>Integrity & Trust</h3>
                <p style={styles.valueText}>
                  We build lasting relationships through transparency, ethical practices, and consistent delivery on our commitments to clients and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
