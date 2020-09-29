import React, { Component } from "react";
import AdvanceOption from "./AdvanceOption";
import Button from "./Button";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="calc-body">
        <div className="number">
          <Button button="7"></Button>
          <Button button="8"></Button>
          <Button button="9"></Button>
          <Button button="4"></Button>
          <Button button="5"></Button>
          <Button button="6"></Button>
          <Button button="1"></Button>
          <Button button="2"></Button>
          <Button button="3"></Button>
          <Button button="0"></Button>
          <Button button="."></Button>
          <Button button="="></Button>
        </div>
        <div className="operation">
          <Button button="AC"></Button>
          <Button button="&#247;"></Button>
          <Button button="&#215;"></Button>
          <Button button="-"></Button>
          <Button button="+"></Button>
        </div>
        <div className="advance">
          <AdvanceOption />
        </div>
      </div>
    );
  }
}

export default Body;
