import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Travel 
        destination ='Madrid'
        country= 'Spain'
        photo="https://static.amazon.jobs/locations/42/thumbnails/Madrid_-_Thumbnail.jpg?1453992961"
        distance="2000"
        />
      </div>
    );
  }
}

export default App;
