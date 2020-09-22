import React, { Component } from "react";
import Body from "./components/body";
import Screen from "./components/screen";

class App extends Component {
  state = {
    display: "ok",
  };

  getDisplay = (data) => {
    this.setState({
      display: data,
    });
  };

  render() {
    return (
      <div className="app">
        <Screen display={this.state.display} />
        <Body getData={this.getDisplay} />
      </div>
    );
  }
}

export default App;
