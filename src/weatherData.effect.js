import { useState, useEffect } from "react";

function Usefetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const response = await res.json();

      let weatherData = {
        location: response.name,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].main,
        country: response.sys.country,
        wind_speed: response.wind.speed,
      };
      setData(weatherData);
    };
    fetchData();
  }, []);

  return data;
}

export default UseFetch;

//custom hook to fetch data and place it in an array

// //custom hook
// import UseFetch from './weatherData.effect'

// // const user =useFetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
