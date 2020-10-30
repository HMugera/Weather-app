import React, { useState, useEffect } from "react";
import "./App.scss";
import Search from "./components/search/search";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";
import Info from "./components/Info/info";
import Unit from "./components/Unit/Unit";
import Previous from "./components/Previous/Previous";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Eldoret&units=metric&appid=${API_KEY}`;
// http://api.openweathermap.org/data/2.5/weather?q=Eldoret&units=metric&appid=ee79003171a6dfab7b9d6cb88c078a4f //ee79003171a6dfab7b9d6cb88c078a4f
// const FORECAST_API = `http://api.openweathermap.org/data/2.5/forecast?q=Eldoret&appid=${API_KEY}`;
function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [isMetric, setMetric] = useState(true);
  const [city, setCity] = useState("");
  const [ifError, setError] = useState(false);
  console.log(data);


  useEffect(() => {
        const fetchFromApi = async () => {
      const weather = await fetch(API_URL);
      const response = await weather.json();
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
      setLoading(false);
    };

    fetchFromApi();
  }, []);

  const change = (value) => {
    setCity(value);
  };

  const changeWeather = (event) => {
    event.preventDefault();
    let getWeather = async () => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (api_call.ok) {
        const response = await api_call.json();
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
      } else {
        setError(true);
        return;
      }
    };
    getWeather();
  };

  return (
    <div className='App'>
      <Nav />
      <div className='appWrapper'>
        {loading ? (
          <div className='loader'></div>
        ) : (
          <>
            <div className='mainWeather'>
              <Search
                changeWeather={changeWeather}
                changeRegion={change}
                ifError={ifError}
              />
              <Main isMetric={isMetric} data={weather} />
              <div className='infoWrapper'>
                <Info />
                <Unit isMetric={isMetric} setMetric={setMetric} />
              </div>
              <Previous />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;


//   const fetchForecast = async () => {
  //     const forecastFetch = await fetch(FORECAST_API);
  //     const response = await forecastFetch.json();
  //     let forecastData = response;

  //     for (let i = 0; i < forecastData.list.length; i += 8) {
  //       //  console.log(forecastData.list[i].dt_txt);
  //       //  console.log(forecastData.list[i].weather[0].description);
  //       //  console.log(forecastData.list[i].weather[0].id);
  //       let dara = {
  //         days: forecastData.list[i].dt_txt,
  //         icons: forecastData.list[i].weather[0].id,
  //         weather: forecastData.list[i].weather[0].description,
  //       };
  // console.log(dara);
  //     }   
  //   };
