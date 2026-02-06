import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Hero.css";
import "./Navbar.css";
import ContactForm from "./ContactForm";

function Navbar() {
  const [showContactForm, setShowContactForm] = useState(false);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setShowContactForm(true);
  };

  const handleContactLeave = () => {
    closeTimerRef.current = setTimeout(() => setShowContactForm(false), 150);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo - click to go home or scroll to hero on home */}
        <Link to="/" style={{ ...styles.logo, textDecoration: "none" }} aria-label="Go to home" onClick={handleLogoClick}>
          P2P <span style={styles.logoBold}>Infrastructure</span>
        </Link>

        {/* Menu */}
        <nav>
          <ul style={styles.menu}>
            <li style={styles.menuItem}><Link to="/" style={styles.menuLink}>Home</Link></li>
            <li style={styles.menuItem}><Link to="/about" style={styles.menuLink}>About Us</Link></li>
            <li style={styles.menuItem}><Link to="/solutions" style={styles.menuLink}>Solutions</Link></li>
            <li style={styles.menuItem}><Link to="/industries" style={styles.menuLink}>Industries</Link></li>
            <li style={styles.menuItem}><Link to="/projects" style={styles.menuLink}>Projects</Link></li>
            <li
              style={styles.menuItem}
              onMouseEnter={handleContactEnter}
              onMouseLeave={handleContactLeave}
            >
              Contact Us
              {showContactForm && (
                <div
                  style={styles.formDropdown}
                  onMouseEnter={handleContactEnter}
                  onMouseLeave={handleContactLeave}
                >
                  <div style={styles.formBackdrop} />
                  <div style={styles.formWrap}>
                    <button
                      type="button"
                      aria-label="Close form"
                      style={styles.closeButton}
                      onClick={() => setShowContactForm(false)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                    <ContactForm compact={false} />
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#0b1c2d",   // Dark Navy
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
  },

  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#e5e7eb",
    letterSpacing: "0.5px",
    cursor: "pointer",
  },

  logoBold: {
    fontWeight: "900",
    background: "linear-gradient(90deg, #4DEEEA, #60A5FA)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "34px",
    margin: 0,
    padding: 0,
    fontSize: "17px",
  },

  menuItem: {
    color: "#e5e7eb",
    cursor: "pointer",
    fontWeight: "500",
    transition: "color 0.25s ease",
    position: "relative",
  },
  menuLink: {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.25s ease",
  },
  formDropdown: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 200,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-end",
    pointerEvents: "auto",
  },
  formBackdrop: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(4px)",
  },
  formWrap: {
    position: "relative",
    zIndex: 201,
    maxHeight: "100vh",
    overflowY: "auto",
    width: "100%",
    maxWidth: "420px",
    padding: "50px 24px 24px 16px",
    boxSizing: "border-box",
  },
  closeButton: {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "none",
    background: "#0f172a",
    color: "#ffffff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 202,
    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    transition: "background 0.2s ease, transform 0.2s ease",
  },
};
export default Navbar;
