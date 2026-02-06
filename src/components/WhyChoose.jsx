import React from 'react';
import AnimatedHeading from './AnimatedHeading';

const points = [
  {
    title: 'Extensive Industry Experience',
    desc: 'Years of delivering reliable solutions across government, railways, corporate and education sectors.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Complete Technology Partner',
    desc: 'From CCTV to large-scale network design, OFC laying to website development—we cover everything.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 9h3M18 9h3M3 15h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Certified Engineers & Technical Experts',
    desc: 'Our team is professionally trained, certified and experienced in handling complex installations.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2"/>
        <path d="M19.4 15a8.4 8.4 0 0 0-14.8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.6 19.4a11.5 11.5 0 0 1 14.8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 12h2M20 12h2M12 2v2M12 20v2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    desc: 'Successfully completed multiple high-value, mission-critical projects with outstanding client feedback.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Customized Solutions',
    desc: 'We understand that every organization is unique and tailor our solutions accordingly.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 3a9 9 0 0 1 9 9M12 21a9 9 0 0 0 9-9M3 12a9 9 0 0 1 9-9M21 12a9 9 0 0 0-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Quality & On-Time Delivery',
    desc: 'We follow strict project management and engineering standards to ensure reliability and punctuality.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const styles = {
  section: {
    width: '100%',
    padding: '64px 0 80px',
    backgroundColor: '#f8fafc',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: '12px',
  },
  subheading: {
    fontSize: '18px',
    color: '#64748b',
    textAlign: 'center',
    marginBottom: '48px',
    whiteSpace: 'nowrap',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '28px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '28px 24px',
    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  iconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #4DEEEA 0%, #60A5FA 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '10px',
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.6,
    margin: 0,
  },
};

function WhyChoose() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <AnimatedHeading as="h2" style={styles.heading}>Why Choose P2P Infrastructure</AnimatedHeading>
        <p style={styles.subheading}>
          Trusted By Government, Railways, Corporates And Institutions For End-To-End Technology And Infrastructure Solutions.
        </p>
        <div style={styles.grid}>
          {points.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 23, 42, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
              }}
            >
              <div style={styles.iconWrap}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
