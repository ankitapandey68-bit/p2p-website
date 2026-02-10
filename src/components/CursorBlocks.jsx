import { useState, useEffect, useCallback, useRef } from "react";
import "./CursorBlocks.css";

/* Small round pointer - second image style, follows cursor */
const RING_R = 14;
const DOT_R = 7;

const MOBILE_MAX_WIDTH = 767;

export default function CursorBlocks() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(false);

  const rafRef = useRef(null);

  useEffect(() => {
    const mqlWidth = window.matchMedia(`(min-width: ${MOBILE_MAX_WIDTH + 1}px)`);
    const mqlPointer = window.matchMedia("(pointer: fine)"); /* fine = mouse, coarse = touch */
    const update = () => setIsDesktopOrTablet(mqlWidth.matches && mqlPointer.matches);
    update();
    mqlWidth.addEventListener("change", update);
    mqlPointer.addEventListener("change", update);
    return () => {
      mqlWidth.removeEventListener("change", update);
      mqlPointer.removeEventListener("change", update);
    };
  }, []);

  const handleMove = useCallback((e) => {
    setVisible(true);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX, y: e.clientY });
      rafRef.current = null;
    });
  }, []);

  const handleLeave = useCallback(() => setVisible(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [handleMove, handleLeave]);

  if (!isDesktopOrTablet || !visible) return null;

  return (
    <div className="cursor-blocks" aria-hidden="true">
      <svg className="cursor-blocks-svg">
        <defs>
          <linearGradient id="cursorBlockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4DEEEA" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        <g transform={`translate(${pos.x}, ${pos.y})`}>
          <circle cx={0} cy={0} r={RING_R} className="cursor-block-ring" />
          <circle cx={0} cy={0} r={DOT_R} className="cursor-block-dot" />
        </g>
      </svg>
    </div>
  );
}
