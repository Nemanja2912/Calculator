import React, { Component } from "react";
import Body from "./components/body";
import Screen from "./components/screen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "",
      display: "",
      height: window.innerHeight,
    };
  }

  getData = (data, calculus) => {
    let expo;
    String(data).length > 9
      ? (expo = Number(data).toExponential(5))
      : (expo = data);

    let preview = String(calculus).split(" ");

    for (let i = 0; i < preview.length; i++) {
      if (String(preview[i]).length > 9) {
        preview[i] = Number(preview[i]).toExponential(5);
      }
    }

    this.setState({
      display: expo,
      preview: preview,
    });
  };

  render() {
    return (
      <div style={{ height: `${this.state.height}px` }} className="app">
        <Screen display={this.state.display} preview={this.state.preview} />
        <Body getData={this.getData} />
      </div>
    );
  }
}

export default App;
