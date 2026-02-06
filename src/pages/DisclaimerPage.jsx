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

export default function DisclaimerPage() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>⚠️ Disclaimer</h1>

        <p style={styles.p}>
          The information contained on this website is for general informational purposes only. While we strive to keep the content accurate and up to date, P2P Infrastructure makes no warranties regarding completeness, accuracy, or reliability.
        </p>
        <p style={styles.p}>
          Any reliance you place on the information provided is strictly at your own risk.
        </p>

        <h2 style={styles.h2}>Third-Party Images & Content</h2>
        <p style={styles.p}>
          Some images, illustrations, and graphic elements used on this website are sourced from third-party platforms such as Vecteezy. These assets are used in accordance with applicable licensing terms. All rights and credits for such content belong to their respective owners.
        </p>

        <h2 style={styles.h2}>External Links</h2>
        <p style={styles.p}>
          This website may include links to external websites. We do not endorse or take responsibility for the content or practices of third-party sites.
        </p>
      </div>
    </section>
  );
}
