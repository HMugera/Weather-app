import React from "react";
import "./main.scss";

import { formatTemperature, getCurrentDate } from "../../services/helpers";
import getIcon from "../../services/getIcon";

function Main({ data, isMetric }) {
  return (
    <div className="container">
      <div className="date">
        <h2>
          {data.location},{data.country}
        </h2>
        <p>{getCurrentDate()}</p>

        <h1 className="description">{data.description}</h1>
      </div>
      <div className="temp">
        <h2 className="section-title">Temperature</h2>
        <p className="reading">
          {" "}
          High:
          <span>{formatTemperature(data.temp_max, isMetric)}</span>°
          <span>{isMetric ? "C" : "F"}</span>
        </p>
        <p className="reading">
          Low:
          <span>{formatTemperature(data.temp_min, isMetric)}</span>°
          <span>{isMetric ? "C" : "F"}</span>
        </p>
        <br />
        <h2 className="section-title ">Wind</h2>
        <p className="reading">
          <span>{data.wind_speed} kph</span>
          {/* <span>{isMetric ? 'kph':'mph'}</span> */}
        </p>
      </div>
      <div className="Icon">{getIcon(data.iconId)}</div>
    </div>
  );
}

export default Main;
