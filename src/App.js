import React, { Component } from "react";
import Screen from "./components/Screen";
import Body from "./components/Body";
import History from "./components/History";

class App extends Component {
  state = {
    height: window.innerHeight,
    display: "",
    preview: "",
    operation: false,
    highOperation: false,
    memory: "",
    history: [],
    size: 9,
    equal: false,
    hide: true,
    deleteText: "AC",
  };

  handlePrint = (n) => {
    let {
      display,
      operation,
      size,
      preview,
      equal,
      memory,
      highOperation,
    } = this.state;

    if (!operation && display.length >= size) return null;

    this.setState({
      display: operation || equal || display === "0" ? n : display + n,
      preview: display === "0" ? preview.slice(0, -1) + ` ${n}` : preview + n,
      operation: false,
      equal: false,
      deleteText: "C",
      memory: !highOperation ? "" : memory + n,
    });
  };

  operation = (s) => {
    let { preview, operation, display, highOperation, memory } = this.state;

    if (display === "") preview = 0;

    if (operation && display !== "") preview = preview.slice(0, -2);

    this.setState({
      operation: true,
      preview: preview + ` ${s} `,
      equal: false,
    });

    if (s === "*" || s === "/") {
      this.setState({
        highOperation: true,
        memory:
          memory === ""
            ? memory + display + `${s}`
            : operation
            ? memory.slice(0, -1) + `${s}`
            : memory + `${s}`,
        display:
          memory === ""
            ? display
            : operation
            ? eval(memory.slice(0, -1))
            : eval(memory),
      });
    } else {
      this.setState({
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

  handleEqual = () => {
    let { preview, operation, size, history, equal } = this.state;

    if (equal) return null;

    let result;

    if (operation) {
      result = String(eval(preview.slice(0, -2)));
    } else {
      result = String(eval(preview));
    }
    if (result.length > size) {
      result = Number(result).toExponential(0);
    }

    this.setState({
      operation: false,
      display: Number(result),
      preview: result,
      history: operation
        ? [...history, preview.slice(0, -2)]
        : [...history, preview],
      equal: true,
    });
  };

  handleHide = () => {
    let { hide } = this.state;

    this.setState({
      hide: hide ? false : true,
    });
  };

  handleDelete = () => {
    let { display, preview, memory, deleteText } = this.state;

    if (deleteText === "C") {
      preview = preview.split(" ");
      preview.pop();
      preview.push(" ");
      preview = preview.join(" ");

      memory = memory.split("");
      memory.pop();
      memory = memory.join("");

      this.setState({
        display: "0",
        preview: preview,
        deleteText: "AC",
        equal: true,
        memory: memory,
      });
    } else {
      this.setState({
        display: "",
        preview: "",
        operation: false,
        highOperation: false,
        memory: "",
        history: [],
        equal: false,
      });
    }
  };

  handleDisplay = () => {
    let { display, size, operation, preview, highOperation } = this.state;

    if (operation && !highOperation)
      display = String(eval(preview.slice(0, -2)));

    if (highOperation) display = String(display);

    if (display.length > size) display = String(Number(display).toFixed(2));

    if (display.length > 99) return "error";

    return display.length > size
      ? (display = Number(display).toExponential(0))
      : Number(display);
  };

  handleComma = (c) => {
    let { display, operation, size, preview, equal } = this.state;

    if (display === "" || operation) c = "0.";

    if (!operation && display.length >= size - 1) return null;

    if (
      display !== String(Math.round(Number(display))) &&
      display !== "" &&
      !operation
    )
      return null;

    this.setState({
      display: operation || equal ? c : display + c,
      preview: equal ? c : preview + c,
      operation: false,
      equal: false,
      deleteText: "C",
    });
  };

  render() {
    return (
      <div style={{ height: this.state.height }} className="app">
        <Screen
          display={this.handleDisplay()}
          preview={this.state.preview}
          handleHide={this.handleHide}
        />
        <Body
          handlePrint={this.handlePrint}
          handleAdd={this.handleAdd}
          handleSubstraction={this.handleSubstraction}
          handleMultiplication={this.handleMultiplication}
          handleDivision={this.handleDivision}
          handleEqual={this.handleEqual}
          handleDelete={this.handleDelete}
          deleteText={this.state.deleteText}
          handleComma={this.handleComma}
        />
        <History
          hide={this.state.hide}
          history={this.state.history}
          handleHide={this.handleHide}
        />
      </div>
    );
  }
}

export default App;
