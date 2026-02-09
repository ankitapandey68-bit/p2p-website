import React, { useState, useEffect } from 'react';
import newsImage from '../assets/latest news (1).png';
import AnimatedHeading from './AnimatedHeading';

const newsItems = [
  {
    title: 'Fiber and Network Infrastructure Projects Gain Momentum Across Sectors',
    location: 'New Delhi | January 2026',
    paragraphs: [
      'India is witnessing steady growth in fiber and network infrastructure projects as organizations expand digital operations and data-driven services. Government departments, railways, educational institutions and large enterprises are prioritizing structured cabling, optical fiber deployment and network modernization to support increased connectivity demands.',
      'Industry observers note that optical fiber networks are becoming essential for supporting secure communications, centralized systems and high-speed data access across campuses and operational facilities. The focus has shifted from short-term connectivity solutions to long-term, scalable infrastructure planning.',
      'Network reliability, redundancy and performance monitoring are emerging as critical requirements, particularly for mission-critical environments such as transport systems, healthcare facilities and public utilities.',
      'This article reflects general industry developments based on publicly available information.',
    ],
  },
  {
    title: 'Smart Surveillance Systems See Wider Adoption in Public and Institutional Spaces',
    location: 'New Delhi | January 2026',
    paragraphs: [
      'The adoption of smart surveillance systems is increasing across public infrastructure, transport hubs and institutional campuses in India. Organizations are moving beyond traditional CCTV installations towards IP-based cameras, centralized monitoring platforms and automated recognition technologies.',
      'Industry trends show growing use of integrated surveillance solutions for improving safety, compliance and operational oversight. These systems are increasingly linked with network infrastructure and data platforms, enabling real-time monitoring and faster response mechanisms.',
      'Experts suggest that surveillance infrastructure is now being viewed as an essential component of modern facility management rather than a standalone security measure.',
      'This article reflects general industry developments based on publicly available information.',
    ],
  },
  {
    title: 'Data Center and IT Infrastructure Modernization Becomes Strategic Priority',
    location: 'New Delhi | January 2026',
    paragraphs: [
      'As digital adoption accelerates, organizations across sectors are investing in modern IT infrastructure and data center capabilities. The emphasis is on scalable server environments, secure network architecture, backup systems and disaster recovery planning.',
      'Industry reports indicate that hybrid infrastructure models—combining on-premise systems with cloud-based services—are gaining traction. This approach allows organizations to balance performance, security and regulatory requirements while supporting growing data volumes.',
      'Data reliability, resilience and cybersecurity are emerging as key drivers influencing infrastructure investment decisions in both public and private sectors.',
      'This article reflects general industry developments based on publicly available information.',
    ],
  },
  {
    title: 'Infrastructure Modernization Drives Demand for Integrated Technology Solutions',
    location: 'New Delhi | January 2026',
    paragraphs: [
      'Infrastructure modernization initiatives across India are driving increased demand for integrated technology solutions combining network infrastructure, security systems and digital platforms. Organizations are focusing on unified infrastructure planning to improve efficiency, reliability and long-term scalability.',
      'Industry developments indicate that enterprises and public institutions are increasingly adopting end-to-end solutions that integrate networking, surveillance, access control and data systems. This approach is aimed at reducing operational complexity while ensuring higher performance and security standards.',
      'Experts note that integrated infrastructure models are becoming essential for supporting large-scale operations, especially in government facilities, transport systems and institutional campuses.',
      'This article reflects general industry developments based on publicly available information.',
    ],
  },
  {
    title: 'Telecom and Network Reliability Emerge as Key Operational Priorities',
    location: 'New Delhi | January 2026',
    paragraphs: [
      'Reliable telecom and network infrastructure is emerging as a critical operational priority for organizations across sectors. With growing dependence on digital communication, real-time monitoring and centralized systems, network stability and uptime have gained strategic importance.',
      'Industry trends highlight increased investment in structured cabling, firewall configurations, network monitoring tools and redundancy planning. These measures are aimed at minimizing downtime and improving service continuity in mission-critical environments.',
      'The focus on network reliability is particularly strong in sectors such as railways, healthcare, education and public administration, where uninterrupted connectivity is essential for daily operations.',
      'This article reflects general industry developments based on publicly available information.',
    ],
  },
  {
    title: 'Digital Infrastructure Investments Support Smart City and Institutional Growth',
    location: 'New Delhi | January 2026',
    paragraphs: [
      'Digital infrastructure investments are playing a key role in supporting the expansion of smart city initiatives and institutional development projects across India. Enhanced connectivity, surveillance systems and data platforms are being deployed to improve service delivery and operational transparency.',
      'Industry observers note that smart infrastructure projects increasingly rely on high-speed fiber networks, centralized monitoring systems and secure IT environments. These components enable better coordination, automation and data-driven decision-making.',
      'As smart city and campus development projects continue to expand, digital infrastructure is being recognized as a foundational element for sustainable growth.',
      'This article reflects general industry developments based on publicly available information.',
    ],
  },
];

const styles = {
  section: {
    width: '100%',
    padding: '48px 0 80px',
    backgroundColor: '#374151',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
  },
  headerWrap: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#f8fafc',
    textAlign: 'center',
    marginBottom: '12px',
  },
  subheading: {
    fontSize: '18px',
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: '40px',
    whiteSpace: 'nowrap',
  },
  layout: {
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  imageCol: {
    flex: '0 0 420px',
    width: '420px',
    height: '420px',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    background: '#0f172a',
    boxShadow: '0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(77,238,234,0.15)',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center',
    backgroundColor: '#0f172a',
  },
  leftCol: {
    flex: '0 0 420px',
    width: '420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  tickerWrap: {
    overflow: 'hidden',
    borderRadius: '12px',
    background: 'rgba(15,23,42,0.95)',
    padding: '12px 0',
    border: '1px solid rgba(77,238,234,0.25)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
  tickerTrack: {
    display: 'flex',
    width: 'max-content',
  },
  tickerText: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
    letterSpacing: '0.04em',
    paddingRight: '48px',
    whiteSpace: 'nowrap',
  },
  contentCol: {
    flex: '1 1 380px',
    minWidth: '0',
    textAlign: 'left',
  },
  titlesList: {
    marginBottom: '24px',
    borderRadius: '16px',
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(226,232,240,0.8)',
    padding: '12px 16px',
    maxHeight: '260px',
    overflowY: 'auto',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
  titleButton: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '10px 12px',
    borderRadius: '10px',
    border: 'none',
    borderLeft: '3px solid transparent',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#1e293b',
    fontWeight: '500',
    marginBottom: '2px',
    transition: 'background 0.2s ease, border-color 0.2s ease',
  },
  titleButtonActive: {
    background: 'linear-gradient(90deg, rgba(77,238,234,0.12), rgba(96,165,250,0.08))',
    borderLeft: '3px solid #4DEEEA',
    color: '#0f172a',
  },
  article: {
    borderRadius: '18px',
    border: '1px solid rgba(226,232,240,0.9)',
    padding: '28px 26px',
    background: '#ffffff',
    boxShadow: '0 12px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(77,238,234,0.08)',
    textAlign: 'left',
  },
  articleTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '10px',
    lineHeight: 1.35,
    letterSpacing: '0.01em',
    textAlign: 'left',
  },
  articleLocation: {
    fontSize: '13px',
    color: '#64748b',
    marginBottom: '18px',
    fontWeight: '500',
    letterSpacing: '0.02em',
    textAlign: 'left',
  },
  articleText: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.75,
    marginBottom: '14px',
    textAlign: 'left',
  },
};

const ENTRANCE_DURATION = 0.65;
const ENTRANCE_DELAY_CARDS = 0.12;

function LatestNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const sectionRef = React.useRef(null);
  const active = newsItems[activeIndex];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setEntered(true); });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={styles.section} className="latest-news-section">
      <div style={styles.container} className="latest-news-container">
        <div style={styles.headerWrap}>
          <AnimatedHeading as="h2" style={styles.heading} className="latest-news-heading">Latest News</AnimatedHeading>
          <p style={styles.subheading} className="latest-news-subheading">
            Industry Developments And Infrastructure Trends Relevant To Networks, Surveillance And Digital Platforms.
          </p>
        </div>
        <style>{`
          @keyframes newsTickerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .news-ticker-track {
            animation: newsTickerScroll 28s linear infinite;
          }
        `}</style>
        <div style={styles.layout} className="latest-news-layout">
          <div style={styles.leftCol} className="latest-news-left-col">
            <div
              className="latest-news-image-col"
              style={{
                ...styles.imageCol,
                transform: entered ? 'translateX(0)' : 'translateX(-120px)',
                opacity: entered ? 1 : 0,
                transition: `transform ${ENTRANCE_DURATION}s ease-out, opacity ${ENTRANCE_DURATION}s ease-out`,
              }}
            >
              <img src={newsImage} alt="News and updates" style={styles.image} loading="lazy" />
            </div>
            <div style={styles.tickerWrap}>
              <div className="news-ticker-track" style={styles.tickerTrack}>
                <span style={styles.tickerText}>
                  Infrastructure Updates • Network Solutions • Smart City • Surveillance • Digital India • Fiber & OFC • Data Center • Telecom •
                </span>
                <span style={styles.tickerText}>
                  Infrastructure Updates • Network Solutions • Smart City • Surveillance • Digital India • Fiber & OFC • Data Center • Telecom •
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              ...styles.contentCol,
              transform: entered ? 'translateX(0)' : 'translateX(120px)',
              opacity: entered ? 1 : 0,
              transition: `transform ${ENTRANCE_DURATION}s ease-out ${ENTRANCE_DELAY_CARDS}s, opacity ${ENTRANCE_DURATION}s ease-out ${ENTRANCE_DELAY_CARDS}s`,
            }}
          >
            <div style={styles.titlesList}>
              {newsItems.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{
                      ...styles.titleButton,
                      ...(isActive ? styles.titleButtonActive : null),
                    }}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            <article style={styles.article}>
              <h3 style={styles.articleTitle}>{active.title}</h3>
              <p style={styles.articleLocation}>{active.location}</p>
              {active.paragraphs.map((p, i) => (
                <p key={i} style={styles.articleText}>
                  {p}
                </p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
