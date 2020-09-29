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
    return (
      <div className="calc-body">
        <div className="number">
          <Button handlePrint={this.props.handlePrint} button="7"></Button>
          <Button handlePrint={this.props.handlePrint} button="8"></Button>
          <Button handlePrint={this.props.handlePrint} button="9"></Button>
          <Button handlePrint={this.props.handlePrint} button="4"></Button>
          <Button handlePrint={this.props.handlePrint} button="5"></Button>
          <Button handlePrint={this.props.handlePrint} button="6"></Button>
          <Button handlePrint={this.props.handlePrint} button="1"></Button>
          <Button handlePrint={this.props.handlePrint} button="2"></Button>
          <Button handlePrint={this.props.handlePrint} button="3"></Button>
          <Button handlePrint={this.props.handlePrint} button="0"></Button>
          <Button handlePrint={this.props.handlePrint} button="."></Button>
          <Button button="="></Button>
        </div>
        <div className="operation">
          <Button button="AC"></Button>
          <Button button="/"></Button>
          <Button button="*"></Button>
          <Button button="-"></Button>
          <Button button="+"></Button>
        </div>
        <div onClick={this.handleAdvance} className={this.state.advanceClass}>
          <p>&#x2039;</p>
        </div>
        <div className={this.state.advanceBodyClass}>asaasas</div>
      </div>
    );
  }
}

export default Body;
