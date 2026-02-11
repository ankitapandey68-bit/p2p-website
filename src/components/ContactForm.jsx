import React, { useState } from 'react';

const styles = {
  form: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '28px 24px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)',
    maxWidth: '420px',
    width: '100%',
  },
  formCompact: {
    background: 'rgba(255,255,255,0.06)',
    borderRadius: '12px',
    padding: '24px 22px',
    border: '1px solid rgba(148,163,184,0.25)',
    width: '100%',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '20px',
  },
  titleCompact: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '14px',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '500',
    color: '#475569',
    marginBottom: '6px',
  },
  labelCompact: {
    fontSize: '12px',
    color: '#94a3b8',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    marginBottom: '14px',
    boxSizing: 'border-box',
  },
  inputCompact: {
    padding: '8px 10px',
    fontSize: '13px',
    border: '1px solid rgba(148,163,184,0.3)',
    borderRadius: '6px',
    backgroundColor: 'rgba(15,23,42,0.4)',
    color: '#f8fafc',
    marginBottom: '10px',
  },
  mobileRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '14px',
  },
  mobileRowCompact: {
    marginBottom: '10px',
  },
  countryCode: {
    flex: '0 0 90px',
    padding: '10px 8px',
    fontSize: '13px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
  },
  countryCodeCompact: {
    flex: '0 0 78px',
    padding: '8px 6px',
    fontSize: '12px',
    border: '1px solid rgba(148,163,184,0.3)',
    borderRadius: '6px',
    backgroundColor: 'rgba(15,23,42,0.4)',
    color: '#f8fafc',
  },
  mobileInput: {
    flex: 1,
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    boxSizing: 'border-box',
  },
  mobileInputCompact: {
    padding: '8px 10px',
    fontSize: '13px',
    border: '1px solid rgba(148,163,184,0.3)',
    borderRadius: '6px',
    backgroundColor: 'rgba(15,23,42,0.4)',
    color: '#f8fafc',
  },
  textarea: {
    width: '100%',
    minHeight: '80px',
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    marginBottom: '18px',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  textareaCompact: {
    minHeight: '60px',
    padding: '8px 10px',
    fontSize: '13px',
    border: '1px solid rgba(148,163,184,0.3)',
    borderRadius: '6px',
    backgroundColor: 'rgba(15,23,42,0.4)',
    color: '#f8fafc',
    marginBottom: '12px',
  },
  submit: {
    width: '100%',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.05em',
    color: '#ffffff',
    background: 'linear-gradient(90deg, #2563eb, #1d4ed8)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
  },
  submitCompact: {
    padding: '10px 16px',
    fontSize: '13px',
    background: 'linear-gradient(90deg, #4DEEEA, #60A5FA)',
    color: '#0f172a',
  },
};

function ContactForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91 IND',
    mobile: '',
    email: '',
    company: '',
    industry: '',
    designation: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const formStyle = compact ? styles.formCompact : styles.form;
  const titleStyle = compact ? styles.titleCompact : styles.title;
  const labelStyle = compact ? { ...styles.label, ...styles.labelCompact } : styles.label;
  const inputStyle = compact ? { ...styles.input, ...styles.inputCompact } : styles.input;
  const mobileRowStyle = compact ? { ...styles.mobileRow, ...styles.mobileRowCompact } : styles.mobileRow;
  const countryCodeStyle = compact ? { ...styles.countryCode, ...styles.countryCodeCompact } : styles.countryCode;
  const mobileInputStyle = compact ? { ...styles.mobileInput, ...styles.mobileInputCompact } : styles.mobileInput;
  const textareaStyle = compact ? { ...styles.textarea, ...styles.textareaCompact } : styles.textarea;
  const submitStyle = compact ? { ...styles.submit, ...styles.submitCompact } : styles.submit;

  return (
    <form
      style={formStyle}
      action="https://formsubmit.co/p2pinfra2@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_subject" value="P2P Website - New Contact Form" />
      <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
      <input type="hidden" name="_captcha" value="false" />
      <h3 style={titleStyle}>Get in Touch</h3>

      <label style={labelStyle}>Name *</label>
      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label style={labelStyle}>Mobile *</label>
      <div style={mobileRowStyle}>
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          style={countryCodeStyle}
        >
          <option value="+91 IND">+91 IND</option>
          <option value="+1 USA">+1 USA</option>
          <option value="+44 UK">+44 UK</option>
          <option value="+971 UAE">+971 UAE</option>
        </select>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile*"
          value={formData.mobile}
          onChange={handleChange}
          style={mobileInputStyle}
          required
        />
      </div>

      <label style={labelStyle}>Official email *</label>
      <input
        type="email"
        name="email"
        placeholder="Official email*"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label style={labelStyle}>Company name *</label>
      <input
        type="text"
        name="company"
        placeholder="Company name*"
        value={formData.company}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label style={labelStyle}>Industry name *</label>
      <input
        type="text"
        name="industry"
        placeholder="Industry name*"
        value={formData.industry}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label style={labelStyle}>Designation *</label>
      <input
        type="text"
        name="designation"
        placeholder="Designation*"
        value={formData.designation}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label style={labelStyle}>Message</label>
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        style={textareaStyle}
      />

      <button type="submit" style={submitStyle}>
        CONTACT US
      </button>
    </form>
  );
}

export default ContactForm;
