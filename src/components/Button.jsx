import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return (
      <p
        onClick={() => this.props.handlePrint(this.props.button)}
        className="button"
      >
        {this.props.button === "/" ? (
          <span>&#247;</span>
        ) : this.props.button === "*" ? (
          <span>&#215;</span>
        ) : (
          this.props.button
        )}
      </p>
    );
  }
}

export default Button;
