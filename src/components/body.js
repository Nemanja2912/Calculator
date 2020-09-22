import React, { Component } from "react";
import Button from "./button";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: "",
      memoryNum: 0,
      operation: false,
      calculus: "",
    };
  }

  print = (n) => {
    this.setState({
      currentNum: this.state.currentNum + n,
      calculus: this.state.calculus + n,
    });
  };

  add = () => {
    this.setState({
      currentNum: "",
      memoryNum: this.state.currentNum,
      calculus: this.state.calculus + " + ",
    });
    console.log(Number(this.state.currentNum) + Number(this.state.memoryNum));
  };

  componentDidUpdate() {
    console.log(this.state.currentNum);
    console.log(this.state.calculus);
  }

  render() {
    return (
      <div className="calc-body">
        <Button btn="AC" />
        <Button btn="+/-" />
        <Button btn="%" />
        <Button btn="/" />
        <Button func={() => this.print(7)} btn="7" />
        <Button func={() => this.print(8)} btn="8" />
        <Button func={() => this.print(9)} btn="9" />
        <Button btn="*" />
        <Button func={() => this.print(4)} btn="4" />
        <Button func={() => this.print(5)} btn="5" />
        <Button func={() => this.print(6)} btn="6" />
        <Button btn="-" />
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
