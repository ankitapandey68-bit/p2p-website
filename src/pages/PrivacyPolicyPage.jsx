import React from "react";

const styles = {
  section: {
    minHeight: "60vh",
    padding: "80px 40px 100px",
    background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
  },
  container: {
    maxWidth: "720px",
    margin: "0 auto",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: "8px",
  },
  date: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "32px",
  },
  h2: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#e2e8f0",
    marginTop: "28px",
    marginBottom: "12px",
  },
  p: {
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: 1.75,
    marginBottom: "16px",
  },
  ul: {
    marginBottom: "16px",
    paddingLeft: "24px",
    color: "#cbd5e1",
    lineHeight: 1.75,
    fontSize: "16px",
  },
  li: { marginBottom: "8px" },
};

export default function PrivacyPolicyPage() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>🔐 Privacy Policy</h1>
        <p style={styles.date}>Effective Date: January 2026</p>

        <p style={styles.p}>
          P2P Infrastructure (“we”, “our”, “us”) respects the privacy of visitors and users of this website. This Privacy Policy explains how we collect, use, and protect information when you visit our website.
        </p>

        <h2 style={styles.h2}>Information We Collect</h2>
        <p style={styles.p}>We may collect the following information:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Name, email address, phone number (when submitted through contact forms)</li>
          <li style={styles.li}>Business or organization details (if shared voluntarily)</li>
          <li style={styles.li}>Technical data such as IP address, browser type, and device information for analytics and security purposes</li>
        </ul>

        <h2 style={styles.h2}>How We Use Information</h2>
        <p style={styles.p}>Collected information is used to:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Respond to inquiries and service requests</li>
          <li style={styles.li}>Improve website performance and user experience</li>
          <li style={styles.li}>Maintain website security and prevent misuse</li>
          <li style={styles.li}>Communicate important updates related to our services</li>
        </ul>
        <p style={styles.p}>We do not sell, rent, or trade personal information to third parties.</p>

        <h2 style={styles.h2}>Cookies</h2>
        <p style={styles.p}>
          This website may use cookies to enhance user experience and analyze website traffic. Users can disable cookies through their browser settings.
        </p>

        <h2 style={styles.h2}>Data Security</h2>
        <p style={styles.p}>
          We implement reasonable technical and organizational measures to protect information against unauthorized access, alteration, or disclosure.
        </p>

        <h2 style={styles.h2}>Third-Party Links</h2>
        <p style={styles.p}>
          Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
        </p>

        <h2 style={styles.h2}>Changes to This Policy</h2>
        <p style={styles.p}>
          This Privacy Policy may be updated periodically. Continued use of the website implies acceptance of the revised policy.
        </p>
      </div>
    </section>
  );
}
