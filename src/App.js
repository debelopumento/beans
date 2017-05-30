import React, { Component } from "react";
import "./App.css";
import Beans from "./beans";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Beans />
      </div>
    );
  }
}

export default App;
