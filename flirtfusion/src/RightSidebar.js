import React from "react";
import "./RightSidebar.css";
import FlirtyStack from "./sidebar/FlirtyStack";

// PUBLIC_INTERFACE
function RightSidebar() {
  // Right sidebar for FlirtFusion: FlirtyStack, future Polls/Confessions modules
  return (
    <aside className="right-sidebar" aria-label="right sidebar">
      <div className="rs-module">
        <FlirtyStack />
      </div>
      <div className="rs-module placeholder">
        {/* Placeholder for future Poll module */}
        (Polls soon)
      </div>
      <div className="rs-module placeholder">
        {/* Placeholder for Confessions */}
        (Confessions soon)
      </div>
    </aside>
  );
}

export default RightSidebar;
