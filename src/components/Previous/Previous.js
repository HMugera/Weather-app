import React from "react";
import "./Previous.scss";

function Previous({ forecast }) {
  return (
    <div>
      <h1 className='main-title'>Forecast</h1>

      <div className='previousWrapper'>
        <div className='previous-days'>
          {forecast
            ? forecast.map((item, index) => {
                return (
                  <>
                    <div className='previous-day'>
                    <div className='day'>{item.dt_txt}</div>
                    <div className='icon'>{item.weather[0].id}</div>
                    <div className='description'>{item.weather[0].main}</div>
                  </div>
                  </>
                );
              })
            : console.log("help")}
          {/* <div className='day'>Mon</div>
            <div className='icon'>icon</div>
            <div className='description'>sunny</div> */}
        </div>
      </div>
    </div>
  );
}

export default Previous;
