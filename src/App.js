import React, { Component } from "react";
import Screen from "./components/Screen";
import Body from "./components/Body";

class App extends Component {
  state = {
    height: window.innerHeight,
  };
  render() {
    console.log(this.state.height);
    return (
      <div style={{ height: this.state.height }} className="app">
        <Screen />
        <Body />
      </div>
    );
  }
}

export default App;
