import React from "react";
import WindowTracker from "./WindowTracker.js";
import "./index.css";

export default function App() {
  const [show, setshow] = React.useState(true);
  function toggle() {
    setshow((prevsetdata) => !prevsetdata);
  }
  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
