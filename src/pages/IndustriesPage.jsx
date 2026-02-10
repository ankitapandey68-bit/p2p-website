import React, { useState, useEffect, useRef } from "react";
import bannerImage from "../assets/vecteezy_global-network-connection-over-earth-map-digital-technology_70872032.jpg";
import AnimatedHeading from "../components/AnimatedHeading";

const IconSvg = ({ children }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const industries = [
  { title: "Government & Public Sector Units", icon: <IconSvg><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></IconSvg> },
  { title: "Indian Railways & Transport Departments", icon: <IconSvg><rect x="1" y="3" width="22" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></IconSvg> },
  { title: "Schools, Colleges & Universities", icon: <IconSvg><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M12 6v6"/><path d="M9 9h6"/></IconSvg> },
  { title: "Corporate Offices", icon: <IconSvg><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></IconSvg> },
  { title: "Manufacturing & Industrial Plants", icon: <IconSvg><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></IconSvg> },
  { title: "Hospitals & Healthcare", icon: <IconSvg><path d="M19 21c-2.8 0-5-2.2-5-5v-4H8l2-6h4l2 6h-6v4c0 2.8 2.2 5 5 5z"/></IconSvg> },
  { title: "Hotels & Retail Chains", icon: <IconSvg><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></IconSvg> },
  { title: "Smart Cities", icon: <IconSvg><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></IconSvg> },
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
    maxWidth: "1100px",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#ffffff",
    border: "2px solid #e2e8f0",
    borderRadius: "16px",
    padding: "32px 28px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    transition: "all 0.35s ease",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    cursor: "default",
  },
  iconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(77,238,234,0.2) 0%, rgba(96,165,250,0.25) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    flexShrink: 0,
    color: "#2563eb",
  },
  cardTitle: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#0f172a",
    margin: 0,
    lineHeight: 1.4,
  },
};

export default function IndustriesPage() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const gridRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeadingVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-industry-card]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute("data-industry-card");
            setVisibleCards((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.bannerWrap} className="banner-reveal">
        <img src={bannerImage} alt="" style={styles.banner} />
      </div>

      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(-60px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          <AnimatedHeading as="h1" style={styles.heading}>
            Industries We Serve
          </AnimatedHeading>
        </div>

        <div ref={gridRef} style={styles.grid}>
          {industries.map((item, index) => (
            <div
              key={item.title}
              data-industry-card={index}
              style={{
                ...styles.card,
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, box-shadow 0.35s ease, border-color 0.35s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(77,238,234,0.2)";
                e.currentTarget.style.borderColor = "rgba(77,238,234,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div style={styles.iconWrap}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
