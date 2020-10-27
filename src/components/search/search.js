import React from "react";
 import './search.scss'

export default function Search({changeWeather,changeRegion}) {
  return (
    <div>
      <div className="search-bar">
        <form
          className="region"
         onSubmit={(e)=>{
           changeWeather(e);
         }}
        >
          <input
            type="text"
            placeholder="Enter location..."
          onChange={(e)=> changeRegion(e.target.value)}
            className="regioninput"
            required
          />
        </form>
      </div>
    </div>
  );
}

// onChange={(e) => props.changeRegion(e.target.value)}
// onSubmit={(e) => {
//   props.changeWeather(e);
// }}