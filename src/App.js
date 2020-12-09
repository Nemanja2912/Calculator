import React, { Component } from "react";
import Screen from "./components/Screen";
import Body from "./components/Body";
import History from "./components/History";

class App extends Component {
  // State
  state = {
    height: window.innerHeight,
    num: "",
    prevNum: "",
    operation: false,
    preview: [0],
    error: false,
    equal: false,
  };

  // Number click

  handlePrintNumber = (e) => {
    const { num, operation, preview, equal } = this.state;

    if (num.length > 7) return;

    if (num === "" && e.target.innerHTML === "0") return;

    const currentNum = e.target.innerHTML;

    let number = operation || equal ? currentNum : num + currentNum;

    if (operation) {
      preview[preview.length] = currentNum;
    } else if (equal) {
      preview[preview.length - 1] = [currentNum];
    } else {
      preview[preview.length - 1] = num + currentNum;
    }

    this.setState({
      num: number,
      operation: false,
      preview: preview,
      comma: false,
      equal: false,
    });
  };

  // Operation action
  handleOperationAction = (action) => {
    const { operation, preview } = this.state;

    if (operation) preview.pop();

    let result = eval(preview.join(""));

    if (isNaN(result) || !isFinite(result)) {
      result = "Error";

      this.setState({
        error: true,
      });
    }

    if (action === "addition") {
      preview[preview.length] = " + ";
    }

    if (action === "subtraction") {
      preview[preview.length] = " - ";
    }

    if (action === "multiplication") {
      preview[preview.length] = " * ";
    }

    if (action === "division") {
      preview[preview.length] = " / ";
    }

    this.setState({
      prevNum: result,
      num: result,
      operation: true,
      preview: preview,
      comma: false,
      equal: false,
    });

    if (action === "equal") {
      this.setState({
        prevNum: result,
        num: result,
        operation: false,
        comma: false,
        equal: true,
        preview: [result],
      });
    }
  };

  // Other button

  handleOtherAction = (action) => {
    const { preview, num, operation, comma } = this.state;

    if (action === "reset") {
      this.setState({
        num: "",
        prevNum: "",
        operation: false,
        preview: [0],
        comma: false,
        equal: false,
      });
    }

    if (action === "sign") {
      if (operation) return;

      preview[preview.length - 1] = preview[preview.length - 1] * -1;

      this.setState({
        num: num * -1,
        preview: preview,
        equal: false,
      });
    }

    if (action === "comma") {
      if (operation) return;
      if (comma) return;

      preview[preview.length - 1] = preview[preview.length - 1] + ".";

      this.setState({
        preview: preview,
        num: num === "" ? "0." : num + ".",
        comma: true,
        equal: false,
      });
    }

    if (action === "percent") {
      if (operation) return;

      preview[preview.length - 1] = preview[preview.length - 1] / 100;

      this.setState({
        num: num / 100,
        preview: preview,
        equal: false,
      });
    }
  };

  // Delete from Array

  handleDelete = () => {
    let deleteLast = [...this.state.preview];
    deleteLast.pop();

    this.setState({
      preview: deleteLast.length === 0 ? [0] : deleteLast,
      num: "",
      operation:
        isNaN(deleteLast[deleteLast.length - 1]) && deleteLast.length > 0
          ? true
          : false,
    });
  };

  render() {
    return (
      <div style={{ height: this.state.height }} className="app">
        <Screen
          num={this.state.num}
          preview={this.state.preview}
          handleDelete={this.handleDelete}
        />
        <Body
          reset={this.state.reset}
          handleOperationAction={this.handleOperationAction}
          handlePrintNumber={this.handlePrintNumber}
          handleOtherAction={this.handleOtherAction}
        />
        {/* <History /> */}
      </div>
    );
  }
}

export default App;
