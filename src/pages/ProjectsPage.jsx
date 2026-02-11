import React, { useState, useEffect, useRef } from "react";
import bannerImage from "../assets/vecteezy_computer-futuristic-high-tech-circuit-board-with_28850544.jpg";
import AnimatedHeading from "../components/AnimatedHeading";

const clients = [
  "Northern Railway",
  "Diesel Locomotive Works (DLW)",
  "NER Signal & Telecom Department",
  "Bal Niketan School",
  "Telephone Exchange",
  "Electrical & Mechanical Departments",
  "Corporate Institutions",
];

const projectTypes = [
  "CCTV installation across railway premises",
  "OFC Laying for high-speed networks",
  "WiFi campus setup",
  "LAN/WAN rewiring & deployment",
  "Biometric attendance installation",
  "Smart surveillance & ANPR cameras",
];

const styles = {
  section: {
    minHeight: "100vh",
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
    height: "340px",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "56px 40px 0",
    textAlign: "center",
  },
  heading: {
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "56px",
    marginTop: 0,
    textAlign: "center",
  },
  blockHeading: {
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "28px",
    marginTop: "48px",
  },
  blockHeadingFirst: {
    marginTop: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    border: "2px solid #e2e8f0",
    borderRadius: "14px",
    padding: "24px 22px",
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    transition: "all 0.35s ease",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  },
  cardIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, rgba(77,238,234,0.2) 0%, rgba(96,165,250,0.2) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "#0d9488",
    fontSize: "18px",
  },
  cardText: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#0f172a",
    margin: 0,
    lineHeight: 1.5,
  },
};

export default function ProjectsPage() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [clientsVisible, setClientsVisible] = useState(false);
  const [typesVisible, setTypesVisible] = useState(false);
  const clientsRef = useRef(null);
  const typesRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeadingVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === clientsRef.current) setClientsVisible(e.isIntersecting);
          if (e.target === typesRef.current) setTypesVisible(e.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (clientsRef.current) obs.observe(clientsRef.current);
    if (typesRef.current) obs.observe(typesRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.bannerWrap} className="banner-reveal">
        <img src={bannerImage} alt="" style={styles.banner} decoding="async" fetchPriority="high" />
      </div>

      <div style={styles.container}>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(-60px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          <AnimatedHeading as="h1" style={styles.heading}>
            Major Projects Completed
          </AnimatedHeading>
        </div>

        <div ref={clientsRef}>
          <div style={styles.grid}>
            {clients.map((item, index) => (
              <div
                key={item}
                style={{
                  ...styles.card,
                  opacity: clientsVisible ? 1 : 0,
                  transform: clientsVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${index * 0.06}s, transform 0.6s ease ${index * 0.06}s, box-shadow 0.35s ease, border-color 0.35s ease`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(77,238,234,0.18)";
                  e.currentTarget.style.borderColor = "rgba(77,238,234,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div style={styles.cardIcon}>✓</div>
                <span style={styles.cardText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={typesRef}>
          <h2 style={styles.blockHeading}>These projects include:</h2>
          <div style={styles.grid}>
            {projectTypes.map((item, index) => (
              <div
                key={item}
                style={{
                  ...styles.card,
                  opacity: typesVisible ? 1 : 0,
                  transform: typesVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${index * 0.06}s, transform 0.6s ease ${index * 0.06}s, box-shadow 0.35s ease, border-color 0.35s ease`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(77,238,234,0.18)";
                  e.currentTarget.style.borderColor = "rgba(77,238,234,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div style={styles.cardIcon}>→</div>
                <span style={styles.cardText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
