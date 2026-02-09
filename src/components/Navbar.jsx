import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Hero.css";
import "./Navbar.css";
import ContactForm from "./ContactForm";

function Navbar() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleContactEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setShowContactForm(true);
  };

  const handleContactLeave = () => {
    closeTimerRef.current = setTimeout(() => setShowContactForm(false), 150);
  };

  const handleContactClick = () => {
    setShowContactForm(true);
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header style={styles.header} className="navbar-header">
      <div style={styles.container} className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ ...styles.logo, textDecoration: "none" }} aria-label="Go to home" onClick={handleLogoClick}>
          P2P <span style={styles.logoBold}>Infrastructure</span>
        </Link>

        <button
          type="button"
          className="navbar-hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={mobileMenuOpen ? "open" : ""} />
          <span className={mobileMenuOpen ? "open" : ""} />
          <span className={mobileMenuOpen ? "open" : ""} />
        </button>

        {mobileMenuOpen && (
          <div className="navbar-backdrop" onClick={closeMobileMenu} aria-hidden="true" />
        )}
        <nav className={`navbar-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul style={styles.menu} className="navbar-menu">
            <li><Link to="/" style={styles.menuLink} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" style={styles.menuLink} onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/solutions" style={styles.menuLink} onClick={closeMobileMenu}>Solutions</Link></li>
            <li><Link to="/industries" style={styles.menuLink} onClick={closeMobileMenu}>Industries</Link></li>
            <li><Link to="/projects" style={styles.menuLink} onClick={closeMobileMenu}>Projects</Link></li>
            <li
              onMouseEnter={handleContactEnter}
              onMouseLeave={handleContactLeave}
              onClick={handleContactClick}
            >
              <span style={{ ...styles.menuItem, cursor: "pointer" }}>Contact Us</span>
              {showContactForm && (
                <div
                  className="navbar-contact-dropdown"
                  style={styles.formDropdown}
                  onMouseEnter={handleContactEnter}
                  onMouseLeave={handleContactLeave}
                >
                  <div style={styles.formBackdrop} onClick={() => setShowContactForm(false)} />
                  <div style={styles.formWrap} className="navbar-form-wrap">
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
    backgroundColor: "#0b1c2d",
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
    fontWeight: "500",
    transition: "color 0.25s ease",
  },
  menuLink: {
    color: "#e5e7eb",
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
