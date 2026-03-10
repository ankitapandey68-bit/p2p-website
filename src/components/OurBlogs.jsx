import React, { useState, useEffect, useRef } from 'react';
import blogImageDigital from '../assets/vecteezy_nighttime-panorama-wireless-network-and-connection_26175616.jpg';
import AnimatedHeading from './AnimatedHeading';
import blogImageSurveillance from '../assets/vecteezy_professional-home-cctv-and-security-cameras_22994012.jpg';
import blogImageFiber from '../assets/vecteezy_close-up-of-server-rack-with-blinking-lights-and-connected_59573294.jpeg';

const blogItems = [
  {
    category: 'Infrastructure Modernization',
    cardImage: blogImageDigital,
    title: '5 Signs Your Organization Needs Infrastructure Modernization',
    excerpt: 'Modern organizations rely heavily on digital systems to operate efficiently. However, many continue to rely on outdated infrastructure that struggles to support modern technological demands. Understanding when your infrastructure needs modernization can help prevent performance issues, security vulnerabilities, and costly downtime.',
    readTime: '6 min read',
    date: 'March 2025',
    paragraphs: [
      "Modern organizations rely heavily on digital systems to operate efficiently. From enterprise networks to data centers and surveillance systems, infrastructure plays a critical role in maintaining business continuity. However, many organizations continue to rely on outdated infrastructure that struggles to support modern technological demands. Infrastructure modernization is no longer optional; it is essential for growth, security, and operational efficiency.",
      "Understanding when your infrastructure needs modernization can help prevent performance issues, security vulnerabilities, and costly downtime. Here are five key signs that indicate your organization may need to upgrade its infrastructure.",
      "If your organization experiences frequent network outages, server failures, or connectivity disruptions, it may be a clear sign that your infrastructure is outdated. Older systems often lack the capacity and reliability required to handle modern workloads. Infrastructure modernization ensures higher uptime, improved system resilience, and better operational continuity.",
      "Slow data transfer speeds, delayed application responses, and poor network performance can significantly impact productivity. Legacy networking equipment and outdated cabling systems often struggle to support high bandwidth requirements. Upgrading to modern networking solutions, including fiber connectivity and high-capacity network equipment, can dramatically improve performance.",
      "Cybersecurity threats continue to evolve, and outdated infrastructure often lacks the necessary security capabilities to protect sensitive data. Older systems may not support modern encryption protocols, threat detection systems, or network monitoring tools. Infrastructure modernization allows organizations to integrate advanced security technologies that help protect critical assets and maintain regulatory compliance.",
      "Organizations experiencing growth often find that their existing infrastructure cannot support increased workloads, users, or data volumes. Modern infrastructure solutions are designed to be scalable, allowing businesses to expand their operations without major disruptions or costly system replacements.",
      "Maintaining outdated infrastructure often requires frequent repairs, specialized support, and expensive maintenance contracts. In many cases, the cost of maintaining legacy systems becomes higher than investing in modern solutions. Infrastructure modernization reduces operational costs while improving efficiency and reliability.",
      "Infrastructure modernization enables organizations to improve performance, enhance security, and prepare for future technological demands. By investing in modern networking systems, data infrastructure, and integrated technology solutions, organizations can build a strong foundation for long-term growth and digital transformation.",
    ],
    cardGradient: 'linear-gradient(145deg, #0c4a6e 0%, #0f172a 60%, #1e3a5f 100%)',
  },
  {
    category: 'Fiber & Network',
    cardImage: blogImageFiber,
    title: 'How Fiber Connectivity Improves Enterprise Network Performance',
    excerpt: 'As organizations adopt cloud computing and high-bandwidth applications, the demand for reliable connectivity has increased significantly. Fiber optic networking has become one of the most effective technologies for supporting enterprise network infrastructure.',
    readTime: '5 min read',
    date: 'March 2025',
    paragraphs: [
      "As organizations continue to adopt cloud computing, digital collaboration tools, and high-bandwidth applications, the demand for reliable and high-speed connectivity has increased significantly. Fiber optic networking has become one of the most effective technologies for supporting enterprise network infrastructure.",
      "Fiber connectivity provides unmatched speed, reliability, and scalability, making it the preferred choice for modern organizations seeking to optimize network performance.",
      "Fiber optic cables transmit data using light signals through thin strands of glass or plastic fibers. Unlike traditional copper cables that transmit electrical signals, fiber optics can carry significantly larger amounts of data over longer distances without signal degradation. This capability allows organizations to maintain stable and high-speed connectivity even in complex network environments.",
      "One of the primary advantages of fiber connectivity is its ability to support extremely high data transfer speeds. Fiber networks can handle large volumes of data with minimal latency, making them ideal for applications such as cloud computing, video conferencing, and real-time data processing.",
      "Fiber optic networks are less susceptible to electromagnetic interference compared to copper cables. This results in more stable connections and reduced signal disruptions. Enterprises benefit from consistent network performance and fewer service interruptions.",
      "Modern businesses require infrastructure that can adapt to changing technological needs. Fiber networks offer significant scalability, allowing organizations to increase bandwidth capacity as demand grows without replacing the entire network infrastructure.",
      "Fiber optic cables are more secure than traditional networking solutions because they are difficult to tap or intercept without detection. This makes fiber connectivity particularly valuable for organizations handling sensitive information or operating in highly regulated industries.",
      "Fiber connectivity has become a cornerstone of modern enterprise networking. By investing in fiber infrastructure, organizations can improve performance, increase reliability, and create a future-ready network environment capable of supporting digital innovation.",
    ],
    cardGradient: 'linear-gradient(145deg, #1e3a8a 0%, #0f172a 60%, #312e81 100%)',
  },
  {
    category: 'Digital Transformation',
    cardImage: blogImageDigital,
    title: 'Top Infrastructure Technologies Driving Digital Transformation',
    excerpt: 'Digital transformation has become a strategic priority for organizations across industries. At the core of this transformation lies modern infrastructure that supports emerging digital technologies.',
    readTime: '5 min read',
    date: 'March 2025',
    paragraphs: [
      "Digital transformation has become a strategic priority for organizations across industries. Businesses are increasingly adopting advanced technologies to improve efficiency, enhance customer experiences, and enable data-driven decision making. At the core of this transformation lies modern infrastructure that supports emerging digital technologies.",
      "Several infrastructure technologies are playing a key role in enabling organizations to adapt to a rapidly evolving digital landscape.",
      "Cloud computing has revolutionized the way organizations manage IT resources. Cloud platforms provide flexible access to computing power, storage, and applications without requiring large investments in physical hardware. Organizations can scale resources quickly while maintaining operational efficiency.",
      "Edge computing brings processing power closer to the location where data is generated. Instead of sending all data to centralized data centers, edge infrastructure allows organizations to process information locally. This reduces latency and improves real-time data analysis for applications such as smart cities, industrial automation, and IoT systems.",
      "Modern networking technologies enable faster communication between devices, applications, and systems. High-capacity routers, advanced switching systems, and fiber connectivity ensure that organizations can handle large data volumes efficiently.",
      "Security technologies have evolved significantly with the integration of artificial intelligence and intelligent monitoring systems. Modern surveillance infrastructure enables real-time threat detection, automated alerts, and centralized monitoring for large facilities and urban environments.",
      "Data centers continue to serve as the backbone of digital services. Modern data center infrastructure incorporates energy-efficient cooling systems, automated monitoring tools, and high-capacity networking equipment to support growing data demands.",
      "Digital transformation requires a strong infrastructure foundation capable of supporting advanced technologies. Organizations that invest in modern infrastructure solutions can unlock new opportunities for innovation, efficiency, and sustainable growth.",
    ],
    cardGradient: 'linear-gradient(145deg, #0c4a6e 0%, #0f172a 60%, #1e3a5f 100%)',
  },
  {
    category: 'Security & Surveillance',
    cardImage: blogImageSurveillance,
    title: 'The Future of Integrated Security and Surveillance Systems',
    excerpt: 'Security and surveillance technologies are rapidly evolving as organizations seek smarter ways to protect assets, facilities, and people. Traditional systems are being replaced by integrated security platforms that combine multiple technologies.',
    readTime: '5 min read',
    date: 'March 2025',
    paragraphs: [
      "Security and surveillance technologies are rapidly evolving as organizations seek smarter ways to protect assets, facilities, and people. Traditional surveillance systems that rely solely on manual monitoring are being replaced by integrated security platforms that combine multiple technologies into a unified solution.",
      "Integrated security and surveillance systems are shaping the future of infrastructure security by enabling intelligent monitoring, automated threat detection, and centralized management.",
      "Artificial intelligence has significantly enhanced the capabilities of surveillance systems. AI-powered video analytics can identify unusual behavior, detect unauthorized access, and analyze patterns in real time. This allows organizations to respond quickly to potential security incidents.",
      "Modern surveillance infrastructure enables organizations to monitor multiple locations from a centralized control center. Integrated platforms combine video feeds, access control systems, and alarm management tools into a single interface, improving operational efficiency.",
      "The integration of IoT devices and smart sensors has expanded the capabilities of security systems. Sensors can detect motion, environmental changes, or unauthorized entry and trigger automated alerts. This level of automation enhances situational awareness and reduces response times.",
      "Cloud technology is transforming the way surveillance systems are deployed and managed. Cloud-based platforms allow organizations to access video feeds remotely, store large amounts of data securely, and scale surveillance infrastructure easily.",
      "Integrated security and surveillance systems represent the future of infrastructure protection. By combining advanced technologies such as AI analytics, cloud platforms, and smart sensors, organizations can create a proactive security environment that ensures safety and operational efficiency.",
    ],
    cardGradient: 'linear-gradient(145deg, #134e4a 0%, #0f172a 60%, #115e59 100%)',
  },
  {
    category: 'Data Infrastructure',
    cardImage: blogImageFiber,
    title: 'Why Organizations are Investing in Scalable Data Infrastructure',
    excerpt: 'Data has become one of the most valuable assets for modern organizations. As data volumes continue to grow rapidly, organizations must invest in scalable data infrastructure capable of handling increasing workloads.',
    readTime: '5 min read',
    date: 'March 2025',
    paragraphs: [
      "Data has become one of the most valuable assets for modern organizations. From operational insights to customer analytics, businesses rely on data to make strategic decisions and drive innovation. As data volumes continue to grow rapidly, organizations must invest in scalable data infrastructure capable of handling increasing workloads.",
      "Scalable infrastructure enables businesses to manage large datasets efficiently while maintaining high levels of performance and reliability.",
      "Organizations today generate vast amounts of data from digital platforms, connected devices, and operational systems. Without scalable infrastructure, managing this data becomes increasingly difficult. Modern data infrastructure allows organizations to store, process, and analyze large datasets effectively.",
      "Many organizations are adopting hybrid infrastructure models that combine on-premise systems with cloud platforms. Scalable infrastructure enables seamless integration between different environments, allowing businesses to distribute workloads efficiently.",
      "Advanced data infrastructure supports powerful analytics tools that provide valuable insights into business performance. Organizations can use these insights to optimize operations, identify market opportunities, and improve decision-making processes.",
      "Scalable infrastructure ensures that applications and services continue to perform efficiently even as user demand increases. This helps organizations maintain service quality and avoid performance bottlenecks.",
      "Investing in scalable data infrastructure allows organizations to harness the full potential of their data. With the right infrastructure foundation, businesses can support digital innovation, improve operational efficiency, and prepare for the future of data-driven technology.",
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
