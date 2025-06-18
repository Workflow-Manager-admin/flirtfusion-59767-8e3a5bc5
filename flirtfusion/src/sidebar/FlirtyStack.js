import React, { useState } from "react";
import "../RightSidebar.css";

/**
 * PUBLIC_INTERFACE
 * FlirtyStack displays swipable/rotatable cards of flirty lines.
 * Designed for modularity (future: polls, confessions)
 */
function FlirtyStack() {
  const lines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a name, or can I call you mine? 💘",
    "Excuse me, but I think you dropped something: MY JAW.",
    "If you were a vegetable, you’d be a cute-cumber.",
    "Your hand looks heavy—can I hold it for you?",
    "Are you French? Because Eiffel for you.",
    "Can I follow you home? Cause my parents always told me to follow my dreams.",
    "Do you believe in love at first sight, or should I walk by again?",
    "If being cute was a crime, you’d be guilty as charged.",
    "Is it hot in here, or is it just our chemistry?",
  ];
  const [idx, setIdx] = useState(0);

  // Rotate card left (prev)
  const prev = () => setIdx(idx === 0 ? lines.length - 1 : idx - 1);
  // Rotate card right (next)
  const next = () => setIdx(idx === lines.length - 1 ? 0 : idx + 1);

  return (
    <div className="flirty-stack" aria-label="Flirty Pickup Lines">
      <div className="flirty-stack-title">Top Flirty Pickup Lines 🌸</div>
      <div className="flirty-card-container" tabIndex={0}>
        <div className="flirty-card animate-fadein" aria-live="polite">
          <span className="flirty-card-index">{idx + 1} / {lines.length}</span>
          {lines[idx]}
        </div>
      </div>
      <div className="flirty-card-nav">
        <button
          className="flirty-nav-btn"
          aria-label="Previous line"
          onClick={prev}
          disabled={lines.length <= 1}
          type="button"
        >‹</button>
        <button
          className="flirty-nav-btn"
          aria-label="Next line"
          onClick={next}
          disabled={lines.length <= 1}
          type="button"
        >›</button>
      </div>
      <div className="flirty-card-dots">
        {lines.map((_, i) => (
          <span
            key={i}
            className={"flirty-dot" + (i === idx ? " active" : "")}
            aria-label={i === idx ? "selected" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default FlirtyStack;
