import { useState, useEffect } from "react";
import "./BlockAnimation.css";

/* Morphing geometric blocks - split bg (white | dark blue), purple/white blocks
   Cycles through L-shape, staircase, 3-shape configurations */
export default function BlockAnimation() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p >= 4 ? 1 : p + 1));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="block-animation" data-phase={phase} aria-hidden="true">
      <div className="block-animation-bg">
        <div className="block-animation-white" />
        <div className="block-animation-blue" />
      </div>

      <div className="block-animation-blocks">
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4DEEEA" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          {/* Phase 1: Single bar crossing divide */}
          <g className="phase-group phase-1">
            <rect x="165" y="80" width="70" height="40" rx="2" fill="url(#blockGrad)" />
          </g>

          {/* Phase 2: B/3 shape - 5 blocks */}
          <g className="phase-group phase-2">
            <rect x="120" y="130" width="45" height="45" rx="2" fill="url(#blockGrad)" />
            <rect x="165" y="130" width="45" height="45" rx="2" fill="url(#blockGrad)" />
            <rect x="165" y="80" width="45" height="45" rx="2" fill="#ffffff" />
            <rect x="120" y="35" width="45" height="45" rx="2" fill="url(#blockGrad)" />
            <rect x="210" y="80" width="45" height="45" rx="2" fill="#ffffff" />
          </g>

          {/* Phase 3: Ascending staircase */}
          <g className="phase-group phase-3">
            <rect x="80" y="140" width="40" height="40" rx="2" fill="url(#blockGrad)" />
            <rect x="125" y="105" width="45" height="45" rx="2" fill="url(#blockGrad)" />
            <rect x="175" y="70" width="40" height="40" rx="2" fill="#ffffff" />
            <rect x="220" y="40" width="45" height="45" rx="2" fill="url(#blockGrad)" />
            <rect x="270" y="15" width="38" height="38" rx="2" fill="url(#blockGrad)" />
          </g>

          {/* Phase 4: Inverted L / blocky 7 */}
          <g className="phase-group phase-4">
            <rect x="100" y="50" width="50" height="50" rx="2" fill="url(#blockGrad)" />
            <rect x="155" y="50" width="45" height="45" rx="2" fill="url(#blockGrad)" />
            <rect x="155" y="100" width="45" height="45" rx="2" fill="url(#blockGrad)" />
            <rect x="210" y="100" width="40" height="40" rx="2" fill="#ffffff" />
            <rect x="100" y="155" width="40" height="40" rx="2" fill="url(#blockGrad)" />
          </g>
        </svg>
      </div>
    </section>
  );
}
