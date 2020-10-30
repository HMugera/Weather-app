import React from "react";
import "./Previous.scss";

import getIcon from "../../services/getIcon";
function Previous({ days, weatherForecasts, forecastIcons }) {
  return (
    <div>
      <h1 className='main-title'>Forecast</h1>

      <div className='previousWrapper'>
        <div className='previous-days'>
          <div className='previous-day'>
         
            </div>
        </div>
      </div>
    </div>
  );
}

export default Previous;

// {props.monsters.map((monster) => (
//   <Card  key={monster.id} monster={monster}/>
//  ))}{" "}
