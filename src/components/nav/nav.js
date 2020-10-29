import React from "react";
import "./nav.scss";

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-container"></span>
        <h1 className="main-title">WeatherHero</h1>

        {/* <a  className="link"href="">About</a> */}
      </div>
    </div>
  );
}

export default Nav;
