import React, { useState, useEffect } from "react";
import "./App.scss";
import Search from "./components/search/search";
import CityWeather from "./components/CityWeather/CityWeather";
import Navbar from "./components/Navbar/Navbar";
import Recommendation from "./components/Recommendations/Recommendations";
import Forecast from "./components/Forecast/Forecast";

import { getCityForecast, getCityWeather } from "./helperFunctions/fetchData";

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [weatherforecast, setForecast] = useState();
  const [city, setCity] = useState("Eldoret");
  const [isError, setError] = useState(false);

  useEffect(() => {
    getCityWeather(city)
      .then((weatherData) => {
        setWeather(weatherData);
        setLoading(false);
        return;
      })
      .catch((error) => {
        setError(true);
        return;
      });

    getCityForecast(city)
      .then((forecast) => {
        setForecast(forecast);
        setError(false);
        return;
      })
      .catch((error) => {
        setError(true);
        return;
      });
  }, [city, isError]);

  const onInputChange = (value) => {
    setCity(value);
  };

  const getSearchWeather = (event) => {
    event.preventDefault();
    getCityWeather(city);
    getCityForecast(city);
  };

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="mainWeather">
            <Search
              getCityWeather={getSearchWeather}
              changeLocation={onInputChange}
              isError={isError}
            />
            <CityWeather data={weather} />
            <div className="infoWrapper">
              <Recommendation data={weather} />
            </div>
            <Forecast forecast={weatherforecast} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
