import React, { Component } from "react";

class Button extends Component {
  state = {
    classButton:
      this.props.operation === "true"
        ? "button operation"
        : this.props.span === "true"
        ? "button span2"
        : "button",
  };
  render() {
    return (
      <p
        onClick={() => this.props.handleFunc(this.props.button)}
        className={this.state.classButton}
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
