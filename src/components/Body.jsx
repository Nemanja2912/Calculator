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
    } = this.props;

    return (
      <div className="calc-body">
        <div className="number">
          <Button handleFunc={handlePrint} button="7"></Button>
          <Button handleFunc={handlePrint} button="8"></Button>
          <Button handleFunc={handlePrint} button="9"></Button>
          <Button handleFunc={handlePrint} button="4"></Button>
          <Button handleFunc={handlePrint} button="5"></Button>
          <Button handleFunc={handlePrint} button="6"></Button>
          <Button handleFunc={handlePrint} button="1"></Button>
          <Button handleFunc={handlePrint} button="2"></Button>
          <Button handleFunc={handlePrint} button="3"></Button>
          <Button handleFunc={handlePrint} button="0"></Button>
          <Button handleFunc={handlePrint} button="."></Button>
          <Button button="="></Button>
        </div>
        <div className="operation">
          <Button button="AC"></Button>
          <Button handleFunc={handleDivision} button="/"></Button>
          <Button handleFunc={handleMultiplication} button="*"></Button>
          <Button handleFunc={handleSubstraction} button="-"></Button>
          <Button handleFunc={handleAdd} button="+"></Button>
        </div>
        <div className={this.state.advanceClass}>
          <p onClick={this.handleAdvance}>&#x2039;</p>
        </div>
        <div className={this.state.advanceBodyClass}>asaasas</div>
      </div>
    );
  }
}

export default Body;
