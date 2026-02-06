import React from 'react';
import AnimatedHeading from './AnimatedHeading';

const servicesData = [
  { title: "IT & Network Infrastructure", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Enterprise LAN/WAN, Wi-Fi, server setup, network cabling, firewall configuration and AMC support." },
  { title: "CCTV & Smart Surveillance", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 1 14.14 0M4.93 19.07a10 10 0 0 1 0-14.14M19.07 19.07a10 10 0 0 1-14.14 0" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/></svg>, desc: "IP & analog CCTV, NVR/DVR integration, AI cameras, remote monitoring and security systems." },
  { title: "OFC & Fiber Networking", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m16.24-3.76l-4.24 4.24M7.76 16.24l-4.24 4.24M16.24 16.24l4.24 4.24M7.76 7.76L3.52 3.52" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Optical fiber laying, HDD work, splicing, testing and maintenance of high-speed networks." },
  { title: "Mechanical & Electrical Infrastructure Solutions", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="2"/><line x1="15" y1="3" x2="15" y2="21" stroke="currentColor" strokeWidth="2"/><circle cx="6" cy="7" r="1.5" fill="currentColor"/><circle cx="6" cy="12" r="1.5" fill="currentColor"/><circle cx="6" cy="17" r="1.5" fill="currentColor"/><path d="M12 9l1.5-1.5M12 9l-1.5-1.5M12 15l1.5-1.5M12 15l-1.5-1.5" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Reliable mechanical and electrical infrastructure covering power distribution, structured cabling, equipment installation and facility support for enterprise and institutional projects." },
  { title: "Telecom & Communication Infrastructure Solutions", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M2 19h20v2H2z" stroke="currentColor" strokeWidth="2"/></svg>, desc: "End-to-end telecom and communication infrastructure solutions including structured cabling, fiber connectivity and system integration for high availability and uninterrupted communication across enterprise and government networks." },
  { title: "Database & Data Center Solutions", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5" stroke="currentColor" strokeWidth="2"/><ellipse cx="12" cy="19" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Secure and scalable database and data center solutions designed to support high availability, performance and data protection across enterprise and institutional environments. Our services cover database architecture, cloud migration, backup and disaster recovery, security, virtualization and hybrid data center operations." },
  { title: "RFID & Biometric Systems", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><rect x="7" y="7" width="10" height="10" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>, desc: "Access control, attendance systems, smart cards, readers and workforce automation." },
  { title: "ANPR Solutions", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>, desc: "Automatic Number Plate Recognition for parking, traffic monitoring and smart city projects." },
  { title: "Website & Digital Solutions", icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" strokeWidth="2"/></svg>, desc: "Corporate websites, portals, dashboards, APIs, hosting and long-term maintenance." },
];

function Services() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [modal, setModal] = React.useState({ open: false, title: '', content: '' });
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // Continuous left-to-right marquee-style slide (no visible break)
  // Pause when any card is hovered
  React.useEffect(() => {
    const CARD_TOTAL_WIDTH = 280; // approximate card width + gap
    const TOTAL_WIDTH = CARD_TOTAL_WIDTH * servicesData.length;

    // If user is hovering a card, freeze animation
    if (hoveredIndex !== null) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + 4; // speed in px (was 2)
        return next >= TOTAL_WIDTH ? 0 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handleCardClick = (service) => {
    if (service.title === "IT & Network Infrastructure") {
      setModal({
        open: true,
        title: service.title,
        content: "A robust, secure and scalable IT backbone is essential for modern enterprises and government institutions. P2P Infrastructure delivers end-to-end network architecture design, deployment and long-term support, with a strong focus on performance, reliability and security. We implement infrastructure solutions for both on-premise and hybrid environments, ensuring systems that can seamlessly scale alongside business growth and operational demands."
      });
    } else if (service.title === "CCTV & Smart Surveillance") {
      setModal({
        open: true,
        title: service.title,
        content: "Effective surveillance is a critical component of modern security and operational management. P2P Infrastructure delivers advanced CCTV and smart surveillance solutions that provide real-time visibility, intelligent monitoring and centralized control. Our systems are designed to enhance safety, improve situational awareness and support compliance requirements across commercial, industrial and public infrastructure environments."
      });
    } else if (service.title === "OFC & Fiber Networking") {
      setModal({
        open: true,
        title: service.title,
        content: "High-speed and reliable connectivity forms the foundation of today’s digital infrastructure. P2P Infrastructure offers end-to-end optical fiber networking services, covering planning, deployment, testing and maintenance. We build robust fiber networks that support high bandwidth, low latency and long-distance communication, enabling mission-critical operations for enterprises, government projects and large-scale infrastructure deployments."
      });
    } else if (service.title === "Mechanical & Electrical Infrastructure Solutions") {
      setModal({
        open: true,
        title: service.title,
        content: "Reliable mechanical and electrical infrastructure is essential for the smooth functioning of large facilities and mission-critical environments. P2P Infrastructure delivers integrated mechanical and electrical solutions covering power distribution, structured cabling, equipment installation and facility support, ensuring operational safety, efficiency and long-term reliability across enterprise and institutional projects."
      });
    } else if (service.title === "Telecom & Communication Infrastructure Solutions") {
      setModal({
        open: true,
        title: service.title,
        content: "Seamless communication forms the backbone of modern operations and public infrastructure. P2P Infrastructure provides end-to-end telecom and communication infrastructure solutions, including structured cabling, fiber connectivity and system integration, designed to support high availability, scalability and uninterrupted communication across enterprise, government and large-scale network environments."
      });
    } else if (service.title === "RFID & Biometric Systems") {
      setModal({
        open: true,
        title: service.title,
        content: "Automation and access control play a vital role in improving operational efficiency and security. P2P Infrastructure designs and implements RFID and biometric solutions that enable accurate identification, access management and workforce automation. These systems help organizations reduce manual intervention, enhance data accuracy and establish transparent, secure operational processes."
      });
    } else if (service.title === "ANPR Solutions") {
      setModal({
        open: true,
        title: service.title,
        content: "Automated vehicle identification is an essential element of smart mobility and intelligent infrastructure. P2P Infrastructure provides ANPR solutions that support traffic management, parking automation and enforcement applications. Our systems enable real-time data capture and analytics, helping authorities and organizations improve monitoring, decision-making and overall operational efficiency."
      });
    } else if (service.title === "Website & Digital Solutions") {
      setModal({
        open: true,
        title: service.title,
        content: "In a digital-first environment, platforms and applications serve as critical operational tools rather than just an online presence. P2P Infrastructure develops secure, scalable and maintainable digital solutions aligned with organizational workflows and business objectives. We focus on performance, usability and long-term support to ensure digital platforms deliver sustained value across enterprise and institutional use cases."
      });
    } else if (service.title === "Database & Data Center Solutions") {
      setModal({
        open: true,
        title: service.title,
        content: "Secure and scalable database and data center solutions designed to support high availability, performance and data protection across enterprise and institutional environments. Our services cover database architecture, cloud migration, backup and disaster recovery, security, virtualization and hybrid data center operations."
      });
    } else {
      setModal({
        open: true,
        title: service.title,
        content: service.desc || `Learn more about our ${service.title.toLowerCase()} services.`
      });
    }
  };

  const closeModal = () => setModal({ open: false, title: '', content: '' });

  const CARD_TOTAL_WIDTH = 280;
  const TOTAL_WIDTH = CARD_TOTAL_WIDTH * servicesData.length;
  const step = CARD_TOTAL_WIDTH;

  const handlePrev = () => {
    setOffset((prev) => (prev <= 0 ? TOTAL_WIDTH - step : prev - step));
  };
  const handleNext = () => {
    setOffset((prev) => (prev + step >= TOTAL_WIDTH ? 0 : prev + step));
  };

  return (
    <section style={styles.section}>
      <div style={styles.videoBg} />
      <div style={styles.overlay} />
      <div style={styles.container}>
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          textAlign: 'center',
        }}>
          <AnimatedHeading as="h2" style={styles.heading}>Our Solutions</AnimatedHeading>
        </div>
        <p style={styles.subtext}>
          Integrated technology and infrastructure services built to enable secure, scalable and future-ready operations for enterprises, government and institutions.
        </p>

        <div style={styles.sliderOuter}>
          <button type="button" aria-label="Previous cards" style={styles.arrowLeft} onClick={handlePrev}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <div style={styles.sliderViewport}>
          <div
            style={{
              ...styles.grid,
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.04s linear",
            }}
          >
            {[...servicesData, ...servicesData].map((service, index) => {
              const logicalIndex = index % servicesData.length;
              const delay = logicalIndex * 0.08;
              const isHovered = hoveredIndex === logicalIndex;
              const baseTransform = isVisible ? "scale(1)" : "scale(0.96)";
              const hoverTransform = isHovered ? "scale(1.03)" : baseTransform;

              return (
                <div
                  key={`${service.title}-${index}`}
                  style={{
                    ...styles.cardWrapper,
                    opacity: isVisible ? 1 : 0,
                    transform: hoverTransform,
                    boxShadow: isHovered ? "0 24px 55px rgba(15,23,42,0.22)" : styles.cardWrapper.boxShadow,
                    transition: `opacity 0.6s ease ${delay}s, transform 0.3s ease, box-shadow 0.3s ease`
                  }}
                  onMouseEnter={() => setHoveredIndex(logicalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleCardClick(service)}
                >
                  <div style={styles.card}>
                    <div style={styles.front}>
                      <div style={styles.iconWrapper}>{service.icon}</div>
                      <h3 style={styles.cardTitle}>{service.title}</h3>

                      <div style={styles.cardBottom}>
                        <div style={styles.linesArea} />
                        {isHovered && (
                          <button style={styles.knowMoreButton}>
                            Know More
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
          <button type="button" aria-label="Next cards" style={styles.arrowRight} onClick={handleNext}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {modal.open && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: '#0f172a', marginBottom: '20px'}}>{modal.title}</h2>
            <p style={{color: '#475569', lineHeight: '1.6', fontSize: '18px'}}>{modal.content}</p>
            <button style={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    width: "100%",                 // FULL WIDTH SECTION
    padding: "50px 0",
    position: "relative",
    overflow: "hidden",
  },
  videoBg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0c4a6e 60%, #1e3a8a 100%)",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(15, 23, 42, 0.78)",
    zIndex: 0.5,
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 40px",
    position: "relative",
    zIndex: 1,
    textAlign: "center",
  },
  heading: {
    fontSize: "56px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "28px",
    textAlign: "center",
  },
  subtext: {
    fontSize: "18px",
    color: "#e5e7eb",
    textAlign: "center",
    backgroundColor: "rgba(15,23,42,0.8)",
    padding: "18px 32px",
    borderRadius: "999px",
    margin: "0 auto 60px auto",
    boxShadow: "0 8px 25px rgba(0,0,0,0.45)",
    whiteSpace: "normal",
    maxWidth: "960px",
  },
  sliderOuter: {
    position: "relative",
    width: "100%",
  },
  sliderViewport: {
    overflow: "hidden",
    width: "100%",
  },
  arrowLeft: {
    position: "absolute",
    left: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.9)",
    background: "linear-gradient(135deg, #4DEEEA 0%, #60A5FA 100%)",
    color: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 2,
    boxShadow: "0 4px 20px rgba(15,23,42,0.25)",
  },
  arrowRight: {
    position: "absolute",
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.9)",
    background: "linear-gradient(135deg, #4DEEEA 0%, #60A5FA 100%)",
    color: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 2,
    boxShadow: "0 4px 20px rgba(15,23,42,0.25)",
  },
  grid: {
    display: "flex",
    gap: "20px",
    maxWidth: "100%",
    margin: "0 auto",
    paddingBottom: "10px",
  },
  cardWrapper: {
    background: "rgba(37, 99, 235, 0.06)",
    padding: "1px",
    borderRadius: "16px",
    cursor: "pointer",
    border: "1px solid #e2e8f0",
    boxShadow: "0 18px 45px rgba(15,23,42,0.12)",
    flex: "0 0 260px",
    scrollSnapAlign: "start",
  },
  card: {
    backgroundColor: "#ffffff",
    backgroundImage:
      "repeating-linear-gradient(135deg, rgba(77,238,234,0.12) 0px, rgba(77,238,234,0.12) 2px, transparent 2px, transparent 10px)",
    borderRadius: "16px",
    width: "100%",
    height: "260px",
    position: "relative",
  },
  front: {
    position: "relative",
    color: "#000000",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: "24px 22px",
  },
  cardTitle: {
    marginBottom: "16px",
    fontSize: "16px",
    letterSpacing: "0.03em",
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
  },
  iconWrapper: {
    width: "64px",
    height: "64px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #4DEEEA 0%, #60A5FA 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    marginBottom: "24px",
    alignSelf: "center",
  },
  cardBottom: {
    marginTop: "auto",
    position: "relative",
    width: "100%",
  },
  linesArea: {
    height: "70px",
    borderRadius: "0 0 16px 16px",
    backgroundImage:
      "linear-gradient(135deg, rgba(77,238,234,0.7) 1px, transparent 1px)",
    backgroundSize: "8px 8px",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "bottom left",
  },
  knowMoreButton: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "18px",
    padding: "10px 22px",
    borderRadius: "999px",
    border: "none",
    backgroundImage: "linear-gradient(90deg, #4DEEEA, #60A5FA)",
    color: "#020617",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.04em",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    background: "#ffffff",
    padding: "50px",
    borderRadius: "15px",
    maxWidth: "700px",
    width: "90%",
    textAlign: "left",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.8)",
    border: "4px solid #667eea",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: '10px 20px',
    backgroundColor: '#667eea',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '30px',
  },
  middleRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
};

export default Services;
