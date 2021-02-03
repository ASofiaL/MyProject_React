import React from 'react';
import './App.css';

export default function App() {
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
              <h5 id="date">"Date"</h5>
              <h1>
                {" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  id="icon"
                  alt="weathericon"
                />{" "}
              </h1>
              <h4>
                <span id="weathertype">Weather</span>
              </h4>
              <h2>
                <span id="temperature">Unknown</span>
                <span id="celsius"> ºC</span>|<span id="farenheit">ºF</span>
              </h2>
            </span>
          </div>
          <div className="col-8">
            <span className="currentplace">
              <div className="currentcity">
                <div className="row">
                  <h1 className="cityname">Search for your city</h1>
                </div>
              </div>
              <div className="row">
                <div id="press" className="col-4">
                  Pressure
                </div>
                <div id="humi" className="col-4">
                  Humidity
                </div>
                <div id="wind" className="col-4">
                  Wind
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="container block2">
        <div className="followingdays">
          <div className="row" id="forecast"></div>
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
}
