import React from "react";
import "./search.scss";

export default function Search({ changeWeather, changeRegion, ifError }) {
  return (
    <div>
      <div className="search-bar">
        <form
          className="region"
          onSubmit={(e) => {
            changeWeather(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter location..."
            onChange={(e) => changeRegion(e.target.value)}
            className="regioninput"
            required
          />
          {ifError ? <h1 className="error">Location not found!</h1> : <></>}
        </form>
      </div>
    </div>
  );
}
