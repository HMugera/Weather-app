import React from "react";
import "./Unit.scss";

function Unit({isMetric,setMetric}) {
  return (
    //    <div className="unitStyles">
    //        <label htmlFor="cel">&#176;C</label>
    //       <button className="toggle">
    //       </button>
    //        <label htmlFor="fah">&#176;F</label>
    //    </div>
    <div className="unit">
      <label htmlFor="cel">&#176;C</label>
      <input type="radio" id="cel" name="unit" defaultChecked />
      <button className={isMetric ? "input-toggle":"input-toggle2"} onClick={() => setMetric((prev) => !prev)}></button>
      <label htmlFor="fah">&#176;F</label>
      <input type="radio" id="fah" name="unit" />
    </div>
  );
}

export default Unit;
