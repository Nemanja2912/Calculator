import React, { Component } from "react";
import Screen from "./components/Screen";
import Body from "./components/Body";

class App extends Component {
  state = {
    height: window.innerHeight,
    n: 0,
  };

  handlePrint = (n) => {
    this.setState({
      n: n,
    });
  };

  render() {
    console.log(this.state.height);
    return (
      <div style={{ height: this.state.height }} className="app">
        <Screen display={this.state.n} />
        <Body handlePrint={this.handlePrint} />
      </div>
    );
  }
}

export default App;
