import React, { Component } from "react";
import Body from "./components/body";
import Screen from "./components/screen";

class App extends Component {
  state = {
    preview: "",
    display: "",
  };

  getData = (data, calculus) => {
    this.setState({
      preview: calculus,
      display: data,
    });
  };

  render() {
    return (
      <div className="app">
        <Screen display={this.state.display} preview={this.state.preview} />
        <Body getData={this.getData} />
      </div>
    );
  }
}

export default App;
