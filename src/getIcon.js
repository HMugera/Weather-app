import React from "react";
import Cloudy from "./assets/icons/animated/cloudy.svg";
import Cloudy2 from "./assets/icons/animated/cloudy-day-2.svg";
import Cloudy3 from "./assets/icons/animated/cloudy-day-3.svg";
import Rain from "./assets/icons/animated/rainy-6.svg";
import Rain2 from "./assets/icons/animated/rainy-2.svg";
import Rain3 from "./assets/icons/animated/rainy-3.svg";
import Sun from "./assets/icons/animated/day.svg";
import Snowy from "./assets/icons/animated/snowy-6.svg";
import Thunder from "./assets/icons/animated/thunder.svg";

const getIcon = (code) => {
  switch (code) {
    case 800:
      return <img className="Icon" src={Sun} alt={Sun} />;

    case 801:
      return <img className="Icon" src={Cloudy} alt={Cloudy} />;

    case 802:
      return <img className="Icon" src={Cloudy2} alt={Cloudy2} />;

    case 803:
      return <img className="Icon" src={Cloudy3} alt={Cloudy3} />;

    case 500:
      return <img className="Icon" src={Rain} alt={Rain} />;

    case 501:
      return <img className="Icon" src={Rain} alt={Rain} />;

    case 502:
      return <img className="Icon" src={Rain} alt={Rain} />;

    case 600:
      return <img className="Icon" src={Snowy} alt={Snowy} />;

    case 601:
      return <img className="Icon" src={Snowy} alt={Snowy} />;

    case 602:
      return <img className="Icon" src={Snowy} alt={Snowy} />;

    case 610:
      return <img className="Icon" src={Snowy} alt={Snowy} />;

    case 200:
      return <img className="Icon" src={Thunder} alt={Thunder} />;

    case 201:
      return <img className="Icon" src={Thunder} alt={Thunder} />;

    case 300:
      return <img className="Icon" src={Rain2} alt={Rain2} />;

    case 301:
      return <img className="Icon" src={Rain3} alt={Rain3} />;

    case 302:
      return <img className="Icon" src={Rain3} alt={Rain3} />;

    case 700:
      return <img className="Icon" src={Rain3} alt={Rain3} />;

    case 711:
      return <img className="Icon" src={Rain3} alt={Rain3} />;

    case 721:
      return <img className="Icon" src={Rain3} alt={Rain3} />;

    case 741:
      return <img className="Icon" src={Rain3} alt={Rain3} />;

    default:
      return <img className="Icon" src={Cloudy} alt={Cloudy} />;
  }
};
export default getIcon;
