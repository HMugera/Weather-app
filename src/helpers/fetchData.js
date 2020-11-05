const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Eldoret&units=metric&appid=${API_KEY}`;

export const fetching = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Eldoret&units=metric&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((result) => {
      let weatherData = {
        location: response.name,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].description,
        country: response.sys.country,
        wind_speed: response.wind.speed,
        iconId: response.weather[0].id,
      };
      return weatherData;
    })
    .catch((error) => {
      alert(error);
    });
};

let getSearchWeather = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((result) => {
      let weatherData = {
        location: response.name,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].description,
        country: response.sys.country,
        wind_speed: response.wind.speed,
        iconId: response.weather[0].id,
      };
      return weatherData;
    })
    .catch((error) => {
      setError(true);
      alert(error);
      return;
    });
  setWeather(weatherData);
  setError(false);
};

function getWeather(city) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => handleResponse(res))
    .then((weather) => {
      if (Object.entries(weather).length) {
        const mappedData = mapDataToWeatherInterface(weather);
        return mappedData;
      }
    });
}
const getWeather = () => {
  fetch(API_URL)
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
      setLoading(false);
    })
    .catch((error) => {
      alert(error);
    });
};
