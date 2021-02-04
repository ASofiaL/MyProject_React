import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';

import './App.css';

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState ({ready: false});
    const [city, setCity] = useState (props.defaultCity);

    function handleResponse (response) {
    setWeatherData({
      ready: true,
      date: new Date (response.data.dt*1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: Math.round(response.data.main.pressure),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function handleSubmit (event) {
    event.preventDefault ();
    search();
  }
  function handleCityChange (event) {
    setCity(event.target.value);
  }

  function search () {
    let apiKey = "d2fb406d396cc1b4a8610cb40058cbde";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    
    axios.get(apiUrl).then(handleResponse);
  }
  

  if (weatherData.ready) {
    return (
      <div>
          <div className="row">
            <form className="form-inline search-engine" onSubmit={handleSubmit}>
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputcity" className="sr-only">
                  City
                </label>
                <input
                  type="city"
                  className="form-control"
                  placeholder="Current City"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Search
              </button>
            </form>
            <WeatherInfo data={weatherData}/>
            </div>
          </div>
    );
  } else {
    search();
    return "Loading...";}
}