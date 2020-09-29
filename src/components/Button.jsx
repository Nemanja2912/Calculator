import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return <p className="button">{this.props.button}</p>;
  }
}

export default Button;
