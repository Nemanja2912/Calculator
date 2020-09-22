import React, { Component } from "react";
import Button from "./button";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: "",
      primaryCalculus: "1",
      currentNum: "",
      operation: false,
      calculus: "",
      operationStatus: "primary",
    };
  }

  print = (n) => {
    this.setState({
      currentNum: this.state.currentNum + n,
      calculus: this.state.calculus + n,
      operation: false,
    });

    if (this.state.operationStatus === "secondary") {
      this.setState({
        primaryCalculus: "1",
      });
    }

    this.sendData(this.state.currentNum + n, this.state.calculus + n);
  };

  operations = (sign) => {
    //   If operation is set to true cut last sign and put current pressed
    if (this.state.operation) {
      this.setState({
        calculus: this.state.calculus.slice(0, -2) + ` ${sign} `,
      });

      //   When operation is true and sign * or / then send data to display: current memory number and preview whole calculus
      if (sign === "*" || sign === "/") {
        if (this.state.operationStatus === "secondary") {
          this.sendData(
            this.state.memory,
            this.state.calculus.slice(0, -2) + ` ${sign} `
          );
        } else {
          this.sendData(
            eval(this.state.primaryCalculus),
            this.state.calculus.slice(0, -2) + ` ${sign} `
          );
        }
      }

      //   When operation is true and sign NOT * or / then send data to display: calculate whole calculus and preview whole calculus
      else {
        this.sendData(
          eval(this.state.calculus.slice(0, -2)),
          this.state.calculus.slice(0, -2) + ` ${sign} `
        );
      }
    }

    // If operation is false then set memory to current number, reset current number, add this sign to calculus and active operation
    else {
      this.setState({
        memory: this.state.currentNum,
        currentNum: "",
        calculus: this.state.calculus + ` ${sign} `,
        operation: true,
      });

      //   If operation is false and sign * OR / send data to display: current number and preview whole calculus
      if (sign === "*" || sign === "/") {
        this.setState({
          primaryCalculus:
            this.state.primaryCalculus + `${sign}` + this.state.currentNum,
          operationStatus: "primary",
        });
        this.sendData(
          eval(this.state.primaryCalculus + `${sign}` + this.state.currentNum),
          this.state.calculus + ` ${sign} `
        );
      }

      //   If operation is false and sign NOT * OR / send data to display: calculate whole calculus and preview whole calculus
      else {
        this.setState({
          operationStatus: "secondary",
        });
        this.sendData(
          eval(this.state.calculus),
          this.state.calculus + ` ${sign} `
        );
      }
    }
  };

  add = () => {
    this.operations("+");
  };

  substraction = () => {
    this.operations("-");
  };

  multiplication = () => {
    this.operations("*");
  };

  division = () => {
    this.operations("/");
  };

  sendData = (val1, val2) => {
    this.props.getData(val1, val2);
  };

  reset = () => {
    this.setState({
      currentNum: "",
      operation: false,
      calculus: "",
      primaryCalculus: "1",
    });
    this.sendData("", "");
  };

  render() {
    return (
      <div className="calc-body">
        <Button func={this.reset} btn="AC" />
        <Button btn="+/-" />
        <Button btn="%" />
        <Button func={this.division} btn="/" />
        <Button func={() => this.print(7)} btn="7" />
        <Button func={() => this.print(8)} btn="8" />
        <Button func={() => this.print(9)} btn="9" />
        <Button func={this.multiplication} btn="*" />
        <Button func={() => this.print(4)} btn="4" />
        <Button func={() => this.print(5)} btn="5" />
        <Button func={() => this.print(6)} btn="6" />
        <Button func={this.substraction} btn="-" />
        <Button func={() => this.print(1)} btn="1" />
        <Button func={() => this.print(2)} btn="2" />
        <Button func={() => this.print(3)} btn="3" />
        <Button func={this.add} btn="+" />
        <Button func={() => this.print(0)} span="2" btn="0" />
        <Button btn="." />
        <Button btn="=" />
      </div>
    );
  }
}

export default Body;
