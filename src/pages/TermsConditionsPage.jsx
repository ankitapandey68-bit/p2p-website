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
};

export default function TermsConditionsPage() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>📜 Terms & Conditions</h1>
        <p style={styles.date}>Effective Date: January 2026</p>

        <p style={styles.p}>
          By accessing and using this website, you agree to comply with the following Terms and Conditions.
        </p>

        <h2 style={styles.h2}>Use of Website</h2>
        <ul style={{ paddingLeft: "24px", color: "#cbd5e1", lineHeight: 1.75, fontSize: "16px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>This website is intended for informational purposes only</li>
          <li style={{ marginBottom: "8px" }}>You agree not to misuse, damage, or interfere with the website’s functionality</li>
          <li style={{ marginBottom: "8px" }}>Unauthorized use may result in legal action</li>
        </ul>

        <h2 style={styles.h2}>Intellectual Property</h2>
        <p style={styles.p}>
          All content on this website, including text, layout, logos, and design, is the property of P2P Infrastructure unless otherwise stated. Unauthorized reproduction or distribution is prohibited.
        </p>

        <h2 style={styles.h2}>Service Information</h2>
        <p style={styles.p}>
          Information provided on this website does not constitute a contractual obligation. Final scope, pricing, and deliverables are subject to written agreement.
        </p>

        <h2 style={styles.h2}>Limitation of Liability</h2>
        <p style={styles.p}>
          P2P Infrastructure shall not be liable for any direct or indirect loss arising from the use or inability to use this website.
        </p>

        <h2 style={styles.h2}>Governing Law</h2>
        <p style={styles.p}>
          These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.
        </p>
      </div>
    </section>
  );
}
