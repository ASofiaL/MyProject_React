import React from 'react';
import FormattedDate from './FormattedDate';

import './App.css';

export default function WeatherInfo(props) {
    return (
        <div>
            <div className="weatherinfo">
                <div className="row">
                    <div className="col-4">
                        <span className="currentplace">
                            <h5 className="date"><FormattedDate date={props.data.date} /></h5>
                            <h1>
                                {" "}
                                <img
                                    src={props.data.iconUrl}
                                    alt={props.data.description}
                                    className="icon"
                                />{" "}
                            </h1>
                            <h4>
                                <span className="text-capitalize">{props.data.description}</span>
                            </h4>
                            <h2>
                                <span className="temperature">{props.data.temperature}</span>
                                <span className="celsius"> ºC</span>|<span className="farenheit">ºF</span>
                            </h2>
                        </span>
                    </div>
                    <div className="col-8">
                        <span className="currentplace">
                            <div className="currentcity">
                                <div className="row">
                                    <h1 className="cityname">{props.data.city}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    Pressure: {props.data.pressure} h/Pa
                    </div>
                                <div className="col-4">
                                    Humidity: {props.data.humidity} %
                    </div>
                                <div className="col-4">
                                    Wind: {props.data.wind} km/h
                    </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container block2">
                <div className="followingdays">
                    <div className="row"></div>
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