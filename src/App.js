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
    let { display, operation, size, preview, equal } = this.state;

    if (!operation && display.length >= size) return null;

    this.setState({
      display: operation || equal || display === "0" ? n : display + n,
      preview: equal
        ? n
        : display === "0"
        ? preview.slice(0, -1) + ` ${n}`
        : preview + n,
      operation: false,
      equal: false,
      deleteText: "C",
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

  handleEqual = () => {
    let { preview, operation, history, equal } = this.state;

    if (equal) return null;

    this.setState({
      operation: false,
      display: operation
        ? eval(preview.slice(0, -2)).toExponential(5)
        : eval(preview).toExponential(5),
      preview: operation
        ? String(eval(preview.slice(0, -2)).toExponential(5))
        : String(eval(preview).toExponential(5)),
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
    let { display, preview, operation } = this.state;

    if (display !== "") {
      preview = preview.split(" ");
      preview.pop();
      preview.push(" ");
      preview = preview.join(" ");

      this.setState({
        display: "",
        preview: preview,
        deleteText: "AC",
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

    if (display.length > 99) return "error";

    if (operation && !highOperation)
      display = String(eval(preview.slice(0, -2)));

    if (highOperation) display = String(display);

    return display.length > size ? Number(display).toExponential(5) : display;
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
