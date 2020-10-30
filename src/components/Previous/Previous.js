import React from "react";
import "./Previous.scss";

function Previous() {
  return (
    <div>
      <h1 className="main-title">Forecast</h1>

      <div className="previousWrapper">
        <div className="previous-days">
          <div className="previous-day"></div>
        </div>
      </div>
    </div>
  );
}

export default Previous;
