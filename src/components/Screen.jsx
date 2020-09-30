import React, { Component } from "react";

class Screen extends Component {
  state = {};
  render() {
    return (
      <div className="screen">
        <div className="display">
          {this.props.display ? this.props.display : 0}
        </div>
        <div className="preview">
          <p>{this.props.preview.replace("/", "÷").replace("*", "×")}</p>
        </div>
      </div>
    );
  }
}

export default Screen;
