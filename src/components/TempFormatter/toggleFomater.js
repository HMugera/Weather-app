import React from "react";
import "./toggleFormater.scss"

function ToggleFormater({ isMetric, setMetric }) {
  return (
    <div className="unit">
      <label htmlFor="cel">&#176;C</label>
      <input type="radio" id="cel" name="unit" defaultChecked />
      {/* toogle to change temperature units */}
      <button
        className={isMetric ? "input-toggle" : "input-toggle2"}
        onClick={() => setMetric((prev) => !prev)}
      ></button>
      <label htmlFor="fah">&#176;F</label>
      <input type="radio" id="fah" name="unit" />
    </div>
  );
}

export default ToggleFormater;
