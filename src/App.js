import React, { Component } from "react";
import Screen from "./components/Screen";
import Body from "./components/Body";

class App extends Component {
  state = {
    height: window.innerHeight,
    display: "",
    preview: "",
    operation: false,
    size: 9,
    highOperation: false,
    memory: "",
  };

  handlePrint = (n) => {
    let { display, operation, size, preview } = this.state;

    if (!operation && display.length >= size) return null;

    this.setState({
      display: operation || display === "0" ? n : display + n,
      preview:
        display[0] === "0" ? preview.slice(0, -1) + ` ${n}` : preview + n,
      operation: false,
    });
  };

  operation = (s) => {
    let { preview, operation, display, highOperation, memory } = this.state;

    if (display === "") preview = 0;

    if (operation) preview = preview.slice(0, -2);

    this.setState({
      operation: true,
      preview: preview + ` ${s} `,
    });

    if (s === "*" || s === "/") {
      this.setState({
        highOperation: true,
        memory:
          memory === ""
            ? display
            : operation
            ? memory
            : eval(memory + s + display),
        display:
          memory === ""
            ? display
            : operation
            ? memory
            : eval(memory + s + display),
      });
    } else {
      this.setState({
        memory: "",
        highOperation: false,
      });
    }
  };

  handleAdd = () => {
    this.operation("+");
  };

  handleSubstraction = () => {
    this.operation("-");
  };

  handleDivision = () => {
    this.operation("/");
  };

  handleMultiplication = () => {
    this.operation("*");
  };

  handleDisplay = () => {
    let { display, size, operation, preview, highOperation } = this.state;

    if (display.length > 99) return "error";

    if (operation && !highOperation)
      display = String(eval(preview.slice(0, -2)));

    if (highOperation) display = String(display);

    return display.length > size ? Number(display).toExponential(5) : display;
  };

  render() {
    return (
      <div style={{ height: this.state.height }} className="app">
        <Screen display={this.handleDisplay()} preview={this.state.preview} />
        <Body
          handlePrint={this.handlePrint}
          handleAdd={this.handleAdd}
          handleSubstraction={this.handleSubstraction}
          handleMultiplication={this.handleMultiplication}
          handleDivision={this.handleDivision}
        />
      </div>
    );
  }
}

export default App;
