import React, { Component } from "react";
import Button from "./Button";

class Body extends Component {
  state = {
    advanceClass: "advance",
    advanceBodyClass: "advance-body",
    n: 0,
  };

  handleAdvance = () => {
    let advanceOpen = this.state.advanceClass !== "advance";

    this.setState({
      advanceClass: advanceOpen ? "advance" : "advance advance-open",
      advanceBodyClass: advanceOpen
        ? "advance-body"
        : "advance-body advance-body-open",
    });
  };

  render() {
    const {
      handlePrint,
      handleAdd,
      handleSubstraction,
      handleDivision,
      handleMultiplication,
      handleEqual,
      handleDelete,
      deleteText,
      handleComma,
    } = this.props;

    return (
      <div className="calc-body">
        <div className="number">
          <Button
            handleFunc={handleDelete}
            operation="true"
            button={deleteText}
          ></Button>
          <Button
            handleFunc={handlePrint}
            operation="true"
            button="+/-"
          ></Button>
          <Button handleFunc={handlePrint} operation="true" button="%"></Button>
          <Button
            handleFunc={handleDivision}
            operation="true"
            button="/"
          ></Button>
          <Button handleFunc={handlePrint} button="7"></Button>
          <Button handleFunc={handlePrint} button="8"></Button>
          <Button handleFunc={handlePrint} button="9"></Button>
          <Button
            handleFunc={handleMultiplication}
            operation="true"
            button="*"
          ></Button>
          <Button handleFunc={handlePrint} button="4"></Button>
          <Button handleFunc={handlePrint} button="5"></Button>
          <Button handleFunc={handlePrint} button="6"></Button>
          <Button
            handleFunc={handleSubstraction}
            operation="true"
            button="-"
          ></Button>
          <Button handleFunc={handlePrint} button="1"></Button>
          <Button handleFunc={handlePrint} button="2"></Button>
          <Button handleFunc={handlePrint} button="3"></Button>
          <Button handleFunc={handleAdd} operation="true" button="+"></Button>
          <Button handleFunc={handlePrint} span="true" button="0"></Button>

          <Button handleFunc={handleComma} button="."></Button>
          <Button handleFunc={handleEqual} button="=" operation="true"></Button>
        </div>
        <div className={this.state.advanceClass}>
          <p onClick={this.handleAdvance}>&#x2039;</p>
        </div>
        <div className={this.state.advanceBodyClass}></div>
      </div>
    );
  }
}

export default Body;
