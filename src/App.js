import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className="container block1">
        <Weather defaultCity="Lisboa"/>
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
    </div>
  )
}
