import React from "react";
import "./AnimatedHeading.css";

export default function AnimatedHeading({ children, as: Tag = "h1", style = {}, ...props }) {
  return (
    <div className="animated-heading-wrap" style={{ display: "inline-block" }}>
      <Tag style={style} {...props}>
        {children}
      </Tag>
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
  );
}
