import React, { useEffect, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * MoodBoard component displays a rotating mood icon, daily quote, and "Love Vibe" text.
 */
function MoodBoard() {
  // Rotating mood emoji/icons.
  const moodIcons = [
    "💖", "😍", "😎", "😁", "🥰", "🙈", "✨", "🌈"
  ];
  // Rotating mood quotes (one per day, looped)
  const moodQuotes = [
    "Radiate love. Attract magic. 💫",
    "Flirt with life today!",
    "Your vibe sets the vibe. 😌",
    "Smiles are the hottest accessory.",
    "Channel your inner main-character energy!",
    "Self love = Best love. 🌸",
    "You were born to stand out, stunner.",
    "Dare to be playful & bold.",
  ];

  // Pick an icon based on a timer
  const [iconIdx, setIconIdx] = useState(0);

  useEffect(() => {
    // Rotate every 1.85s
    const interval = setInterval(() => {
      setIconIdx((idx) => (idx + 1) % moodIcons.length);
    }, 1850);
    return () => clearInterval(interval);
  }, []);

  // Day-based quote (rotating per day, fallback to looping array if too many days)
  const getQuote = () => {
    const today = new Date();
    // Deterministically get quote for today
    let idx = today.getDate() % moodQuotes.length;
    return moodQuotes[idx];
  };

  return (
    <div className="mood-board" aria-label="mood board">
      <div className="section-title">MoodBoard ✨</div>
      <span className="mood-rotating-icon" aria-label="mood icon">
        {moodIcons[iconIdx]}
      </span>
      <div className="mood-quote">{getQuote()}</div>
      <div className="mood-love-vibe">Love Vibe</div>
    </div>
  );
}

export default MoodBoard;
