import React, { useState, useEffect, useRef } from 'react';
import blogImageDigital from '../assets/vecteezy_nighttime-panorama-wireless-network-and-connection_26175616.jpg';
import AnimatedHeading from './AnimatedHeading';
import blogImageSurveillance from '../assets/vecteezy_professional-home-cctv-and-security-cameras_22994012.jpg';
import blogImageFiber from '../assets/vecteezy_close-up-of-server-rack-with-blinking-lights-and-connected_59573294.jpeg';

const blogItems = [
  {
    category: 'Digital Infrastructure',
    cardImage: blogImageDigital,
    title: 'How Digital Infrastructure Is Redefining Operational Efficiency Across India',
    excerpt: "India's rapid digital transformation is reshaping how organizations operate, communicate, and deliver services. From government departments to large enterprises, the focus has shifted towards building strong digital infrastructure that can support growing data demands, automation, and real-time decision-making.",
    readTime: '5 min read',
    date: 'January 2026',
    paragraphs: [
      "India's rapid digital transformation is reshaping how organizations operate, communicate, and deliver services. From government departments to large enterprises, the focus has shifted towards building strong digital infrastructure that can support growing data demands, automation, and real-time decision-making.",
      "Network infrastructure upgrades are at the center of this transition. Organizations are investing in structured cabling, high-speed LAN and WAN environments, and secure firewall systems to ensure reliability and performance. As digital services expand, downtime and network inefficiencies are no longer acceptable, especially in mission-critical environments such as railways, healthcare facilities, and public institutions.",
      "Alongside connectivity, data infrastructure has gained strategic importance. Modern data centers, hybrid IT environments, and robust backup systems are now essential to maintain business continuity and protect sensitive information. Institutions are increasingly adopting scalable server environments that can grow with operational requirements while maintaining security and compliance.",
      "This shift highlights a broader trend—digital infrastructure is no longer a support layer. It has become a foundational element that enables efficiency, resilience, and long-term growth across sectors.",
      "This article reflects general industry developments based on publicly available information.",
    ],
    cardGradient: 'linear-gradient(145deg, #0c4a6e 0%, #0f172a 60%, #1e3a5f 100%)',
  },
  {
    category: 'Smart Surveillance',
    cardImage: blogImageSurveillance,
    title: 'The Growing Role of Smart Surveillance in Modern Infrastructure Planning',
    excerpt: 'Smart surveillance systems are rapidly becoming a core component of infrastructure planning in India. What was once limited to basic CCTV installations has evolved into integrated surveillance ecosystems designed to improve safety, monitoring, and operational control.',
    readTime: '5 min read',
    date: 'January 2026',
    paragraphs: [
      'Smart surveillance systems are rapidly becoming a core component of infrastructure planning in India. What was once limited to basic CCTV installations has evolved into integrated surveillance ecosystems designed to improve safety, monitoring, and operational control.',
      'Organizations are increasingly deploying IP-based cameras, centralized monitoring platforms, and intelligent analytics to gain real-time visibility across facilities. These systems are being integrated with network and data infrastructure, allowing faster response times and better situational awareness.',
      'Public infrastructure, educational campuses, healthcare facilities, and transport hubs are among the key adopters of advanced surveillance solutions. The focus is not only on security but also on operational efficiency—monitoring crowd movement, managing access points, and supporting automated systems such as vehicle identification.',
      'As surveillance technologies continue to advance, infrastructure planning is moving towards integrated, future-ready systems that combine connectivity, security, and data intelligence under a unified framework.',
      'This article reflects general industry developments based on publicly available information.',
    ],
    cardGradient: 'linear-gradient(145deg, #134e4a 0%, #0f172a 60%, #115e59 100%)',
  },
  {
    category: 'Network & Fiber',
    cardImage: blogImageFiber,
    title: 'Fiber and Network Modernization for Future-Ready Organizations',
    excerpt: 'Optical fiber networks and modern network infrastructure are playing a crucial role in enabling secure communication, centralized systems, and cloud-based operations for organizations across sectors.',
    readTime: '5 min read',
    date: 'January 2026',
    paragraphs: [
      'High-speed connectivity has become a basic requirement for organizations operating in a digital-first environment. Optical fiber networks and modern network infrastructure are playing a crucial role in enabling secure communication, centralized systems, and cloud-based operations.',
      'Across sectors, there is a noticeable shift from temporary connectivity solutions to long-term infrastructure investments. Large campuses, industrial facilities, and institutional environments are prioritizing fiber deployment to support high data volumes, low latency, and system reliability.',
      'Network modernization efforts also include performance monitoring, redundancy planning, and security enhancements. These measures help organizations maintain uptime and protect digital assets as operations become increasingly interconnected.',
      'Industry trends suggest that fiber and network infrastructure will continue to serve as the backbone of digital growth, supporting emerging technologies and expanding service delivery across both public and private sectors.',
      'This article reflects general industry developments based on publicly available information.',
    ],
    cardGradient: 'linear-gradient(145deg, #1e3a8a 0%, #0f172a 60%, #312e81 100%)',
  },
];

const styles = {
  section: {
    width: '100%',
    padding: '72px 0 88px',
    backgroundColor: '#f8fafc',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
    zIndex: 1,
  },
  headerWrap: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  subheading: {
    fontSize: '18px',
    color: '#475569',
    textAlign: 'center',
    marginBottom: '48px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.65,
    whiteSpace: 'nowrap',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 280px',
    gap: '32px',
    alignItems: 'start',
    textAlign: 'left',
  },
  cardsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    minWidth: 0,
  },
  card: {
    borderRadius: '20px',
    overflow: 'hidden',
    minHeight: '380px',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 12px 40px rgba(15,23,42,0.12)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    position: 'absolute',
    inset: 0,
  },
  cardImageImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.95) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '24px 20px',
    boxSizing: 'border-box',
  },
  categoryPill: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '6px 14px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#ffffff',
    background: 'rgba(77,238,234,0.9)',
    letterSpacing: '0.02em',
    zIndex: 2,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '10px',
    lineHeight: 1.35,
    textShadow: '0 1px 4px rgba(0,0,0,0.3)',
  },
  cardExcerpt: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.92)',
    lineHeight: 1.55,
    marginBottom: 0,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  sidebar: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '24px 20px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
  },
  sidebarTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '20px',
    letterSpacing: '0.02em',
  },
  featuredListWrap: {
    overflow: 'hidden',
    maxHeight: '260px',
  },
  featuredScrollTrack: {},
  featuredItem: {
    paddingBottom: '16px',
    marginBottom: '16px',
    borderBottom: '1px solid #f1f5f9',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  featuredDate: {
    fontSize: '12px',
    color: '#64748b',
    marginBottom: '6px',
  },
  featuredTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0f172a',
    lineHeight: 1.4,
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '24px',
    boxSizing: 'border-box',
  },
  modalContent: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '40px 36px',
    maxWidth: '680px',
    width: '100%',
    maxHeight: '85vh',
    overflowY: 'auto',
    boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
    border: '1px solid rgba(77,238,234,0.2)',
    position: 'relative',
    textAlign: 'left',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '20px',
    lineHeight: 1.35,
    textAlign: 'left',
  },
  modalParagraph: {
    fontSize: '16px',
    color: '#475569',
    lineHeight: 1.75,
    marginBottom: '16px',
    textAlign: 'left',
  },
  modalClose: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: '#f1f5f9',
    color: '#475569',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s ease, color 0.2s ease',
  },
};

function OurBlogs() {
  const [openBlog, setOpenBlog] = useState(null);
  const [cardsVisible, setCardsVisible] = useState({});
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-blog-card]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-blog-card');
            setCardsVisible((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const renderFeaturedItem = (item, index, keyPrefix) => (
    <div
      key={`${keyPrefix}-${index}`}
      style={styles.featuredItem}
      onClick={() => setOpenBlog(item)}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#2563eb';
        e.currentTarget.querySelector('[data-featured-title]').style.color = '#2563eb';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '';
        e.currentTarget.querySelector('[data-featured-title]').style.color = '#0f172a';
      }}
    >
      <p style={styles.featuredDate}>{item.date}</p>
      <p style={styles.featuredTitle} data-featured-title>{item.title}</p>
    </div>
  );

  return (
    <section ref={sectionRef} style={styles.section} className="our-blogs-section">
      <style>{`
        @keyframes featuredScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .featured-scroll-track {
          animation: featuredScrollUp 22s linear infinite;
        }
        .featured-list-wrap:hover .featured-scroll-track {
          animation-play-state: paused;
        }
      `}</style>
      <div style={styles.container} className="our-blogs-container">
        <div style={styles.headerWrap}>
          <AnimatedHeading as="h2" style={styles.heading} className="our-blogs-heading">Discover our latest blog</AnimatedHeading>
          <p style={styles.subheading} className="our-blogs-subheading">
            Exploring Current Trends Influencing Infrastructure, Connectivity, And Digital Systems In India.
          </p>
        </div>

        <div style={styles.layout} className="our-blogs-layout">
          <div style={styles.cardsRow} className="our-blogs-cards">
            {blogItems.map((item, index) => {
              const isVisible = cardsVisible[index];
              const fromLeft = index % 2 === 0;
              return (
                <article
                  key={index}
                  data-blog-card={index}
                  style={{
                    ...styles.card,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : `translateX(${fromLeft ? '-60px' : '60px'})`,
                    transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, box-shadow 0.3s ease`,
                  }}
                  onClick={() => setOpenBlog(item)}
                  onMouseEnter={(e) => {
                    if (isVisible) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 50px rgba(15,23,42,0.18)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = isVisible ? 'translateY(0)' : `translateX(${fromLeft ? '-60px' : '60px'})`;
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,23,42,0.12)';
                  }}
                >
                  {item.cardImage ? (
                    <img src={item.cardImage} alt="" style={styles.cardImageImg} loading="lazy" decoding="async" />
                  ) : (
                    <div style={{ ...styles.cardImage, background: item.cardGradient }} />
                  )}
                  <span style={styles.categoryPill}>{item.category}</span>
                  <div style={styles.cardOverlay}>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <p style={styles.cardExcerpt}>{item.excerpt}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <aside style={styles.sidebar}>
            <h4 style={styles.sidebarTitle}>Featured</h4>
            <div style={styles.featuredListWrap} className="featured-list-wrap">
              <div style={styles.featuredScrollTrack} className="featured-scroll-track">
                {blogItems.map((item, index) => renderFeaturedItem(item, index, 'a'))}
                {blogItems.map((item, index) => renderFeaturedItem(item, index, 'b'))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {openBlog && (
        <div style={styles.modalOverlay} onClick={() => setOpenBlog(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close"
              style={styles.modalClose}
              onClick={() => setOpenBlog(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <h3 style={styles.modalTitle}>{openBlog.title}</h3>
            {openBlog.paragraphs.map((p, i) => (
              <p key={i} style={styles.modalParagraph}>{p}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default OurBlogs;
