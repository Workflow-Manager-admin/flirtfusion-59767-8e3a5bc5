import React, { useState } from "react";
import "./MainContainer.css";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

// Sample sassy/flirty verdicts and lines
const verdicts = [
  "🔥 Sizzling chemistry detected!",
  "💞 Written in the stars!",
  "😏 Sparks are flying!",
  "🤔 Give it a shot, you never know!",
  "💔 Not today, Cupid!",
];
const flirtyLines = [
  "Is your name Google? Because you have everything I’ve been searching for.",
  "You must be made of copper and tellurium, because you’re Cu-Te.",
  "Do you have a map? Because I just got lost in your eyes.",
  "I must be a snowflake, because I’ve fallen for you.",
  "You’re the reason Cupid even has a job.",
];

/**
 * PUBLIC_INTERFACE
 * Main container for Love Chamber app
 */
function MainContainer() {
  const [name, setName] = useState("");
  const [crush, setCrush] = useState("");
  const [result, setResult] = useState("");
  const [line, setLine] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showLine, setShowLine] = useState(false);

  // Generate a pseudo-random deterministic "compatibility verdict"
  const handleCalculate = (e) => {
    e.preventDefault();
    if (!name.trim() || !crush.trim()) return;
    const score =
      (name.charCodeAt(0) * crush.charCodeAt(crush.length - 1) +
        name.length +
        crush.length) %
      verdicts.length;
    setResult(verdicts[score]);
    setShowResult(true);
    setShowLine(false);
  };

  // Get a random flirty line
  const handleLine = () => {
    setLine(flirtyLines[Math.floor(Math.random() * flirtyLines.length)]);
    setShowLine(true);
  };

  // Reset to initial state
  const handleReset = () => {
    setName("");
    setCrush("");
    setResult("");
    setLine("");
    setShowResult(false);
    setShowLine(false);
  };

  return (
    <div className="flirtfusion-bg" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Sidebar (MoodBoard etc) */}
      <Sidebar />
      {/* Flirty floating background */}
      <FloatingBackground />
      {/* Main Center Card */}
      <div className="flirtfusion-center" style={{ flex: 1, zIndex: 1, position: "relative" }}>
        <div className="flirtfusion-card">
          <h2 className="ff-title">💘 Love Chamber</h2>
          <p className="ff-tagline">
            Enter your name and your crush’s name to see your spark score!
          </p>
          <form className="ff-form" onSubmit={handleCalculate} autoComplete="off">
            <input
              type="text"
              className="ff-input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
            <input
              type="text"
              className="ff-input"
              placeholder="Crush's name"
              value={crush}
              onChange={(e) => setCrush(e.target.value)}
              required
            />
            <div className="ff-btn-row">
              <button
                type="submit"
                className="ff-btn ff-btn-primary sparkle"
                disabled={!name.trim() || !crush.trim()}
              >
                See Your Love Score
                <span className="sparkle-anim" />
              </button>
              <button
                type="button"
                className="ff-btn ff-btn-secondary"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
          <div className="ff-result-area">
            {/* Animated result display */}
            {showResult && (
              <div className="ff-result animate-pop">
                <span>{result}</span>
                <button
                  className="ff-btn ff-btn-flirty sparkle"
                  onClick={handleLine}
                  type="button"
                >
                  Get Flirty Line <span className="sparkle-anim" />
                </button>
              </div>
            )}
            {/* Flirty line, animated in */}
            {showLine && (
              <div className="ff-flirty-line animate-fadein">
                <span role="img" aria-label="sparkle">
                  ✨
                </span>{" "}
                {line}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Right Sidebar: FlirtyStack + future modules */}
      <RightSidebar />
    </div>
  );
}

// FloatingBackground: Animated floating hearts and stars in pastel colors
function FloatingBackground() {
  // Use CSS for animation, elements are just layered divs/spans
  const shapes = [];
  const icons = [
    "💖","💗","💘","💝","💫","✨","⭐","🌟"
  ];
  // 18 floating shapes, randomize their type/size/speed
  for (let i = 0; i < 18; i++) {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const left = Math.random() * 98; // %
    const duration = 7 + Math.random() * 5; // seconds
    const size = 22 + Math.random() * 20; // px
    shapes.push(
      <span
        key={i}
        className="floating-shape"
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          fontSize: `${size}px`,
          top: `${Math.random()*30+2}%`
        }}
      >
        {icon}
      </span>
    );
  }
  return <div className="floating-bg-anim">{shapes}</div>;
}

export default MainContainer;
