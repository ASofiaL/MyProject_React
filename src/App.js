import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [weatherData, setWeatherData] = useState ({ready: false});
  function handleResponse (response) {
    setWeatherData({
      ready: true,
      date: new Date (response.data.dt)*1000,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: Math.round(response.data.main.pressure),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
     if (weatherData.ready) {
      return (
        <div className="App">
          <div className="container block1">
            <div className="row">
              <form className="form-inline search-engine">
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="inputcity" className="sr-only">
                    City
                  </label>
                  <input
                    type="city"
                    className="form-control"
                    placeholder="Current City"
                    autoFocus="on"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Search
                </button>
              </form>
            </div>
            <div className="row">
              <div className="col-4">
                <span className="currentplace">
                  <h5 className="date">{weatherData.date}</h5>
                  <h1>
                    {" "}
                    <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                      className="icon"
                    />{" "}
                  </h1>
                  <h4>
                    <span className="text-capitalize">{weatherData.description}</span>
                  </h4>
                  <h2>
                    <span className="temperature">{weatherData.temperature}</span>
                    <span className="celsius"> ºC</span>|<span className="farenheit">ºF</span>
                  </h2>
                </span>
              </div>
              <div className="col-8">
                <span className="currentplace">
                  <div className="currentcity">
                    <div className="row">
                      <h1 className="cityname">{weatherData.city}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="press" className="col-4">
                      Pressure: {weatherData.pressure} h/Pa
                    </div>
                    <div className="humi" className="col-4">
                      Humidity: {weatherData.humidity} %
                    </div>
                    <div className="wind" className="col-4">
                      Wind: {weatherData.wind} km/h
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="container block2">
            <div className="followingdays">
              <div className="row" className="forecast"></div>
            </div>
          </div>
          <div className="link">
            <a
              className="opencode"
              href="https://github.com/ASofiaL?tab=repositories"
              target="blank"
            >
              {" "}
              Open-source code{" "}
            </a>
            <strong>by ASofiaL</strong>
          </div>
          <script src="src/index.js"></script>
        </div>
      );
    } else {
      let apiKey = "fc1ba4d8c20faae50c9db10bb53ae3ed";
      let city = "Lisbon";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
      axios.get(apiUrl).then(handleResponse);

      return "Loading...";
    }  
}
