import React from "react";
import "./CityWeather.scss"

import { formatTemperature } from "../../helperFunctions/formatTemp";
import dayjs from "dayjs";
import setIcon from "../../helperFunctions/setIcon";

function CityWeather({ data, isMetric }) {
  return (
    <div className='container'>
      <div className='townInfo'>
        <h2>
          {data.location},{data.country}
        </h2>
        <p>{dayjs().format("MMMM DD")}</p>
        <h1 className='description'>{data.description}</h1>
      </div>
      <div className='weather-units'>
    <div className="temp">
    <h2 className='section-title'>Temperature</h2>
        <p className='reading'>
          High :
          <span>{formatTemperature(data.temp_max, isMetric)}</span>°
          {isMetric ? <span>{`C`}</span> :  <span>{`F`}</span>}
        </p>
        <p className='reading'>
          Low :
          <span>{formatTemperature(data.temp_min, isMetric)}</span>°
          {isMetric ? <span>{`C`}</span> :  <span>{`F`}</span>}
        </p>
    </div>
        <div className="wind">
      <h2 className='section-title'>Wind</h2>
        <p className='reading'>
          <span>{Math.ceil(data.wind_speed)}</span>kph
        </p>
      </div>
      </div>
   
      <div className='Icon'>{setIcon(data.iconId)}</div>
    </div>
  );
}

export default CityWeather;
