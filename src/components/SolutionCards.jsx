import React, { useState, useEffect, useRef } from "react";
import "./SolutionCards.css";
import solutionBanner from "../assets/vecteezy_solution-concept-and-demonstrating-leadership-strategies_45921050.jpg";
import AnimatedHeading from "./AnimatedHeading";

const CARD_COLORS = ["#f97316", "#3b82f6", "#14b8a6"]; // Orange, Blue, Teal

const servicesData = [
  { title: "IT & Network Infrastructure", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Enterprise LAN/WAN, Wi-Fi, server setup, network cabling, firewall configuration and AMC support.", fullContent: "A robust, secure and scalable IT backbone is essential for modern enterprises and government institutions. P2P Infrastructure delivers end-to-end network architecture design, deployment and long-term support, with a strong focus on performance, reliability and security. We implement infrastructure solutions for both on-premise and hybrid environments, ensuring systems that can seamlessly scale alongside business growth and operational demands." },
  { title: "CCTV & Smart Surveillance", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 1 14.14 0" stroke="currentColor" strokeWidth="2"/></svg>, desc: "IP & analog CCTV, NVR/DVR integration, AI cameras, remote monitoring and security systems.", fullContent: "Effective surveillance is a critical component of modern security and operational management. P2P Infrastructure delivers advanced CCTV and smart surveillance solutions that provide real-time visibility, intelligent monitoring and centralized control. Our systems are designed to enhance safety, improve situational awareness and support compliance requirements across commercial, industrial and public infrastructure environments." },
  { title: "OFC & Fiber Networking", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Optical fiber laying, HDD work, splicing, testing and maintenance of high-speed networks.", fullContent: "High-speed and reliable connectivity forms the foundation of today's digital infrastructure. P2P Infrastructure offers end-to-end optical fiber networking services, covering planning, deployment, testing and maintenance. We build robust fiber networks that support high bandwidth, low latency and long-distance communication, enabling mission-critical operations for enterprises, government projects and large-scale infrastructure deployments." },
  { title: "Mechanical & Electrical Infrastructure", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="2"/><line x1="15" y1="3" x2="15" y2="21" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Power distribution, structured cabling, equipment installation and facility support for enterprise and institutional projects.", fullContent: "Reliable mechanical and electrical infrastructure is essential for the smooth functioning of large facilities and mission-critical environments. P2P Infrastructure delivers integrated mechanical and electrical solutions covering power distribution, structured cabling, equipment installation and facility support, ensuring operational safety, efficiency and long-term reliability across enterprise and institutional projects." },
  { title: "Telecom & Communication Infrastructure", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>, desc: "Structured cabling, fiber connectivity and system integration for high availability and uninterrupted communication.", fullContent: "Seamless communication forms the backbone of modern operations and public infrastructure. P2P Infrastructure provides end-to-end telecom and communication infrastructure solutions, including structured cabling, fiber connectivity and system integration, designed to support high availability, scalability and uninterrupted communication across enterprise, government and large-scale network environments." },
  { title: "Database & Data Center Solutions", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Database architecture, cloud migration, backup, disaster recovery, security, virtualization and hybrid data center operations.", fullContent: "Secure and scalable database and data center solutions designed to support high availability, performance and data protection across enterprise and institutional environments. Our services cover database architecture, cloud migration, backup and disaster recovery, security, virtualization and hybrid data center operations." },
  { title: "RFID & Biometric Systems", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Access control, attendance systems, smart cards, readers and workforce automation.", fullContent: "Automation and access control play a vital role in improving operational efficiency and security. P2P Infrastructure designs and implements RFID and biometric solutions that enable accurate identification, access management and workforce automation. These systems help organizations reduce manual intervention, enhance data accuracy and establish transparent, secure operational processes." },
  { title: "ANPR Solutions", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>, desc: "Automatic Number Plate Recognition for parking, traffic monitoring and smart city projects.", fullContent: "Automated vehicle identification is an essential element of smart mobility and intelligent infrastructure. P2P Infrastructure provides ANPR solutions that support traffic management, parking automation and enforcement applications. Our systems enable real-time data capture and analytics, helping authorities and organizations improve monitoring, decision-making and overall operational efficiency." },
  { title: "Website & Digital Solutions", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Corporate websites, portals, dashboards, APIs, hosting and long-term maintenance.", fullContent: "In a digital-first environment, platforms and applications serve as critical operational tools rather than just an online presence. P2P Infrastructure develops secure, scalable and maintainable digital solutions aligned with organizational workflows and business objectives. We focus on performance, usability and long-term support to ensure digital platforms deliver sustained value across enterprise and institutional use cases." },
];

function SolutionCards() {
  const [modal, setModal] = useState({ open: false, title: "", content: "" });
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const gridRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeadingVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-solution-card]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute("data-solution-card");
            setVisibleCards((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (service) => {
    setModal({
      open: true,
      title: service.title,
      content: service.fullContent || service.desc,
    });
  };

  const closeModal = () => setModal({ open: false, title: "", content: "" });

  return (
    <section style={styles.section}>
      <div style={styles.bannerWrap} className="banner-reveal">
        <img src={solutionBanner} alt="Solutions" style={styles.bannerImage} decoding="async" fetchPriority="high" />
        <div style={styles.bannerOverlay} />
      </div>

      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(-120px)",
            transition: "opacity 1s ease-out, transform 1.2s ease-out",
          }}
        >
          <AnimatedHeading as="h1" style={styles.heading}>
            Get Right Solutions for your Business
          </AnimatedHeading>
        </div>

        <div ref={gridRef} style={styles.grid}>
          {servicesData.map((service, index) => {
            const color = CARD_COLORS[index % CARD_COLORS.length];
            const isVisible = visibleCards[index];
            return (
              <div
                key={service.title}
                data-solution-card={index}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(service)}
                onKeyDown={(e) => e.key === "Enter" && handleCardClick(service)}
                onMouseEnter={(e) => {
                  if (isVisible) {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.35)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = isVisible ? "translateY(0)" : "translateY(40px)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                style={{
                  ...styles.card,
                  borderColor: color,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${index * 0.06}s, transform 0.6s ease ${index * 0.06}s, box-shadow 0.3s ease`,
                }}
                className="solution-card"
              >
                <div style={{ ...styles.iconCircle, backgroundColor: color }}>
                  <span style={styles.iconInner}>{service.icon}</span>
                </div>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDesc}>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {modal.open && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>{modal.title}</h2>
            <p style={styles.modalBody}>{modal.content}</p>
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "0 0 80px",
    background: "#ffffff",
    minHeight: "100vh",
    position: "relative",
  },
  bannerWrap: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    minHeight: "320px",
  },
  bannerImage: {
    width: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
    height: "320px",
  },
  bannerOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
    pointerEvents: "none",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "48px 40px 0",
    textAlign: "center",
  },
  heading: {
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "50px",
    marginTop: 0,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "28px",
  },
  card: {
    background: "#0a0a0a",
    border: "2px solid",
    borderRadius: "8px",
    padding: "32px 28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  iconCircle: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    color: "#ffffff",
  },
  iconInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "12px",
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: "15px",
    color: "#d1d5db",
    lineHeight: 1.6,
    margin: 0,
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "90%",
    textAlign: "left",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    position: "relative",
  },
  modalTitle: {
    color: "#0f172a",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "700",
  },
  modalBody: {
    color: "#475569",
    lineHeight: 1.7,
    fontSize: "16px",
    margin: 0,
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
  },
};

export default SolutionCards;
