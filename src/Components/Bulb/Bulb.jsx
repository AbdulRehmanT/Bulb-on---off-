import React from "react";
import { useState } from "react";
import "./Bulb.css";

function Bulb() {
  const [bulbOn, setBulbOn] = useState(false);

  const bulbStatus = () => setBulbOn(!bulbOn);

  return (
    <div className="bulbApp">
      <h1>{bulbOn ? "Bulb is ON" : "Bulb is OFF"}</h1>
      <div className={`bulb ${bulbOn ? "on" : "off"}`} onClick={bulbStatus}></div>
      <button onClick={bulbStatus}>{bulbOn ? "OFF" : "ON"}</button>
    </div>
  );
}

export default Bulb;
