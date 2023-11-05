import React from "react";
import "./App.css";
import GroupSessions from "./GroupSessions";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header> GRUPPETIMER</header>
      <GroupSessions />
    </div>
  );
}

export default App;
