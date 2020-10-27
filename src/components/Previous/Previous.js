import React from "react";
import "./Previous.scss";

function Previous({isPrevious,setPrevious}) {
  return (
    <div className={isPrevious? "previous-weather show-weather":"previous-weather"}>
      <button className="weather-toggle"  onClick={() => setPrevious((prev) => !prev)}>
        <span>&#8593;</span>
        <span className="sr-only">Show previous weather</span>
      </button>

      <h2 className="main-title previous-weather-title">Previous 5 days</h2>
      <div className="previous-days">
        <div className="previous-day">
          <div className="previous-day">
            <h2 className="day-title">Day</h2>
            <div className="Icon"></div>
            <h3 className="day-weather">Weather</h3>
          </div>
        </div>
        <div className="previous-day">
          <div className="previous-day">
            <h2 className="day-title">Day</h2>
            <div className="Icon"></div>
            <h3 className="day-weather">Weather</h3>
          </div>
        </div>
        <div className="previous-day">
          <div className="previous-day">
            <h2 className="day-title">Day</h2>
            <div className="Icon"></div>
            <h3 className="day-weather">Weather</h3>
          </div>
        </div>
        <div className="previous-day">
          <div className="previous-day">
            <h2 className="day-title">Day</h2>
            <div className="Icon"></div>
            <h3 className="day-weather">Weather</h3>
          </div>
        </div>
        <div className="previous-day">
          <div className="previous-day">
            <h2 className="day-title">Day</h2>
            <div className="Icon"></div>
            <h3 className="day-weather">Weather</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Previous;
