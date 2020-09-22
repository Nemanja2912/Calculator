import React, { Component } from "react";
import Button from "./button";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: "",
      maxChar: 9,
      calculus: "",
      operation: false,
      equal: false,
    };
  }

  //   Click number button
  print = (n) => {
    if (this.state.currentNum.length >= this.state.maxChar) {
      return null;
    }

    if (
      (this.state.currentNum === "" || this.state.currentNum === "0") &&
      n === 0
    ) {
      return null;
    }

    if (this.state.equal) {
      this.setState({
        currentNum: "" + n,
        calculus: "" + n,
        equal: false,
      });
    } else {
      this.setState({
        currentNum: this.state.currentNum + n,
        calculus: this.state.calculus + n,
        operation: false,
      });
    }

    this.sendData();
  };

  //   Comma
  comma = () => {
    if (!Number(this.state.currentNum + ".1")) {
      return null;
    }

    if (this.state.currentNum.length >= this.state.maxChar - 1) {
      return null;
    }

    if (this.state.currentNum === "") {
      this.setState({
        currentNum: 0 + ".",
        calculus: 0 + ".",
      });
    } else {
      this.setState({
        currentNum: this.state.currentNum + ".",
        calculus: this.state.calculus + ".",
      });
    }

    this.sendData();
  };

  //   operation function
  operation = (sign) => {
    if (this.state.operation) {
      this.setState({
        calculus: this.state.calculus.slice(0, -3) + ` ${sign} `,
      });
    } else {
      this.setState({
        currentNum: "",
        calculus: this.state.calculus + ` ${sign} `,
        operation: true,
        equal: false,
      });

      if (this.state.calculus === "") {
        this.setState({
          calculus: "0" + ` ${sign} `,
        });
      }
    }

    this.sendData();
  };

  // Secundary operation
  add = () => {
    this.operation("+");
  };

  substraction = () => {
    this.operation("-");
  };

  multiplication = () => {
    this.operation("*");
  };
  division = () => {
    this.operation("/");
  };

  //   Equal
  equal = () => {
    if (this.state.operation) {
      this.setState({
        currentNum: eval(this.state.calculus.slice(0, -2)),
        calculus: eval(this.state.calculus.slice(0, -2)),
        operation: false,
        equal: true,
      });
    } else {
      this.setState({
        currentNum: eval(this.state.calculus),
        calculus: eval(this.state.calculus),
        equal: true,
      });
    }
    this.sendData();
  };

  //   Reset button
  reset = () => {
    this.setState({
      currentNum: "",
      calculus: "",
      operation: false,
    });

    this.sendData();
  };

  //   Lift data up
  sendData = () => {
    setTimeout(() => {
      if (this.state.operation) {
        this.props.getData(
          eval(this.state.calculus.slice(0, -2)),
          this.state.calculus
        );
      } else {
        this.props.getData(this.state.currentNum, this.state.calculus);
      }
    }, 0);
  };

  //

  render() {
    return (
      <div className="calc-body">
        <Button func={this.reset} btn="AC" />
        <Button func={this.sign} btn="+/-" />
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
        <Button func={this.comma} btn="." />
        <Button func={this.equal} btn="=" />
      </div>
    );
  }
}

export default Body;
