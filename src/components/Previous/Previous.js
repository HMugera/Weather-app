import React from "react";
import "./Previous.scss";

import getIcon from "../../services/getIcon";
function Previous({ data }) {
  return (
    <div>
      <h1 className="main-title">Forecast</h1>

      <div className="previousWrapper">
        <div className="previous-days">
          <div className="previous-day">
            <div className="day">Day</div>
            <div className="icon"> {getIcon(data.iconId)}</div>
            <div className="weather">{data.description}</div>
          </div>
          <div className="previous-day">
            <div className="day">Day</div>
            <div className="icon"> {getIcon(data.iconId)}</div>
            <div className="weather">{data.description}</div>
          </div>
          <div className="previous-day">
            <div className="day">Day</div>
            <div className="icon"> {getIcon(data.iconId)}</div>
            <div className="weather">{data.description}</div>
          </div>
          <div className="previous-day">
            <div className="day">Day</div>
            <div className="icon"> {getIcon(data.iconId)}</div>
            <div className="weather">{data.description}</div>
          </div>
          <div className="previous-day">
            <div className="day">Day</div>
            <div className="icon"> {getIcon(data.iconId)}</div>
            <div className="weather">{data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Previous;
