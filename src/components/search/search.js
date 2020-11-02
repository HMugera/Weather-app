import React from "react";
import "./search.scss";

export default function Search({ getCityWeather, changeLocation, isError }) {
  return (
    <div>
      <div className="search-bar">
        <form
          className="region"
          onSubmit={(e) => {
            getCityWeather(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter location..."
            onChange={(e) => changeLocation(e.target.value)}
            className="regioninput"
            required
          />
          {isError ? <h2 className="error">Location not found!</h2> : <></>}
        </form>
      </div>
    </div>
  );
}
