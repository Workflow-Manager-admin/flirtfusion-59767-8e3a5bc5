import React from "react";
import "./App.css";
import "./Sidebar.css";
import MainContainer from "./MainContainer";

// PUBLIC_INTERFACE
function App() {
  // Renders ONLY the FlirtFusion app without any default header/nav or Kavia AI bar.
  return (
    <div className="app">
      <main style={{ minHeight: "100vh" }}>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;