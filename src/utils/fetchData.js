const API_KEY = process.env.REACT_APP_API_KEY;

export const getCityWeather = (city) => {
	return fetch(
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
			return weatherData;
		});
};

export const getCityForecast = (city) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
	)
		.then((res) => res.json())
		.then((response) => {
			const forecast = [];
			for (let i = 0; i < response.list.length; i += 8) {
				forecast.push(response.list[i + 4]);
			}
			return forecast;
		});
};
