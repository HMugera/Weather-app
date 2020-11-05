import React from "react";
import "./Previous.scss";
import dayjs from "dayjs";
import getIcon from "../../helpers/getIcon";

function Previous({ forecast }) {
  return (
    <div>
      <h1 className="main-title">Forecast</h1>

      <div className="previousWrapper">
        <div className="previous-days">
          {forecast
            ? forecast.map((item, index) => {
                return (
                  <>
                    <div className="previous-day">
                      <div className="day">
                        {dayjs(item.dt_txt).format("ddd")}
                      </div>
                      <div className="icon">{getIcon(item.weather[0].id)}</div>
                      <div className="description">
                        {item.weather[0].description}
                      </div>
                    </div>
                  </>
                );
              })
            : null}
          {/* <div className='day'>Mon</div>
            <div className='icon'>icon</div>
            <div className='description'>sunny</div> */}
        </div>
      </div>
    </div>
  );
}

export default Previous;
