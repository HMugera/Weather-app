import React, { useState, useEffect } from "react";
import "./App.scss";
import Search from "./components/search/search";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";
import Info from "./components/Info/info";
import Unit from "./components/Unit/Unit";
import Previous from "./components/Previous/Previous";

const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [weatherforecast, setForecast] = useState();
  const [isMetric, setMetric] = useState(true);
  const [city, setCity] = useState("Eldoret");
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchSearchWeather(city);
    getSearchForecast(city);
    setLoading(false);
  }, [city]);

  const onInputChange = (value) => {
    setCity(value);
  };
  let fetchSearchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => {
        let weatherData = {
          location: response.name,
          temp_max: response.main.temp_max,
          temp_min: response.main.temp_min,
          description: response.weather[0].description,
          country: response.sys.country,
          wind_speed: response.wind.speed,
          iconId: response.weather[0].id,
        };
        setWeather(weatherData);
        setError(false);
        console.log(weatherData);
      })
      .catch((error) => {
        setError(true);
        return;
      });
  };

  const getSearchForecast = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => {
        const forecast = [];
        for (let i = 0; i < response.list.length; i += 8) {
          forecast.push(response.list[i + 4]);
        }
        setForecast(forecast);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  const getCityWeather = (event) => {
    event.preventDefault();
    fetchSearchWeather();
    getSearchForecast();
  };

  return (
    <div className="App">
      <Nav />
      <div className="appWrapper">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="mainWeather">
              <Search
                getCityWeather={getCityWeather}
                changeLocation={onInputChange}
                isError={isError}
              />
              <Main isMetric={isMetric} data={weather} />
              <div className="infoWrapper" forecast={weatherforecast}>
                <Info data={weather} />
                <Unit isMetric={isMetric} setMetric={setMetric} />
              </div>
              <Previous forecast={weatherforecast} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
