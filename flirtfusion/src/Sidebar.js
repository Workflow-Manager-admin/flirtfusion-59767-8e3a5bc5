import React from "react";
import "./Sidebar.css";
import MoodBoard from "./sidebar/MoodBoard";

// PUBLIC_INTERFACE
function Sidebar() {
  /** Left sidebar with modular sections: MoodBoard, Horoscope, Mini-game, etc. */
  return (
    <aside className="sidebar">
      <div className="sidebar-module">
        <MoodBoard />
      </div>
      <div className="sidebar-module placeholder">
        {/* Placeholder for Horoscope */}
        (Horoscope soon)
      </div>
      <div className="sidebar-module placeholder">
        {/* Placeholder for Mini-game */}
        (Mini-game soon)
      </div>
    </aside>
  );
}

export default Sidebar;
