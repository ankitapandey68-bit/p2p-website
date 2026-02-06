import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "40px",
          fontFamily: "monospace",
          background: "#1e1e1e",
          color: "#ff6b6b",
          minHeight: "100vh",
        }}>
          <h2>Error</h2>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {this.state.error?.toString()}
          </pre>
          {this.state.error?.stack && (
            <details>
              <summary>Stack</summary>
              <pre style={{ fontSize: "12px", overflow: "auto" }}>
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
