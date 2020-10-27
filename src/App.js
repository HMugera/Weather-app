import React, { useState, useEffect } from "react";
import "./App.scss";
import Search from "./components/search/search";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";
import Info from "./components/Info/info";
import Unit from "./components/Unit/Unit";
import Previous from "./components/Previous/Previous";

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [isMetric, setMetric] = useState(true);
  const [isPrevious, setPrevious] = useState(false);
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchFromApi = async () => {
      const weather = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Eldoret&units=imperial&appid=ee79003171a6dfab7b9d6cb88c078a4f"
      );

      const response = await weather.json();
      // console.log(response);
      let weatherData = {
        location: response.name,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].main,
        country: response.sys.country,
        wind_speed: response.wind.speed,
        icon:response.weather[0].icon
      };
      setWeather(weatherData);
      setLoading(false);
     
    };

    fetchFromApi();
  }, []);

  const change = (value) => {
    setCity(value);
  };

  const changeWather = (event) => {
    event.preventDefault();
    let getWeather = async () => {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ee79003171a6dfab7b9d6cb88c078a4f`
      );
      const response = await api_call.json();
      console.log(response);
      let weatherData = {
        location: response.name,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].main,
        country: response.sys.country,
        wind_speed: response.wind.speed,
        icon:response.weather[0].icon
    
      };
      setWeather(weatherData);
     
    };
    getWeather();
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
              <Search changeWeather={changeWather} changeRegion={change} />
              <Main isMetric={isMetric} data={weather} />
              <div className="infoWrapper">
                <Info />
                <Unit isMetric={isMetric} setMetric={setMetric} />
              </div>
              <h1 className="main-title">Previous</h1>
              <Previous isPrevious={isPrevious} setPrevious={setPrevious} />
            </div>
                  </>
        )}
      </div>
    </div>
  );
}

export default App;


