import React from "react";
import "./CityWeather.scss";

import dayjs from "dayjs";
import setIcon from "../../utils/setIcon";

function CityWeather({ data }) {
	return (
		<div className="city-weather">
			<div className="townInfo">
				<h2>
					{data.location},{data.country}
				</h2>
				<p>{dayjs().format("MMMM DD")}</p>
				<h1 className="description">{data.description}</h1>
			</div>
			<div className="weather-units">
				<div className="tempInfo">
					<h2 className="section-title">Temperature</h2>
					<p className="reading">
						High : &nbsp;{" "}
						<span className="info">{Math.ceil(data.temp_max)} ° C</span>
					</p>
					<p className="reading">
						Low : &nbsp;{" "}
						<span className="info">{Math.ceil(data.temp_min)} ° C</span>
					</p>
				</div>
				<div className="windInfo">
					<h2 className="section-title">Wind</h2>
					<p className="reading">
						speed : &nbsp;{" "}
						<span className="info">{Math.ceil(data.wind_speed)} kph</span>{" "}
					</p>
				</div>
			</div>

			<div className="Icon">{setIcon(data.iconId)}</div>
		</div>
	);
}

export default CityWeather;
