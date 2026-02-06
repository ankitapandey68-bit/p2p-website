import React from 'react';
import './TaglineSection.css';

const styles = {
  section: {
    width: '100%',
    padding: '160px 24px 160px',
    backgroundColor: '#FFFFFF',
    background: '#FFFFFF',
    textAlign: 'center',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  line1: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
    lineHeight: 1.2,
  },
  line2: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: '700',
    margin: '8px 0 0',
    lineHeight: 1.2,
    background: 'linear-gradient(90deg, #4DEEEA, #60A5FA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
};

function TaglineSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div className="tagline-wrap">
          <p style={styles.line1}>Building Reliable Infrastructure</p>
          <p style={styles.line2}>For A Smarter, Connected Future.</p>
          <div className="connection-visual" aria-hidden="true">
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaglineSection;
