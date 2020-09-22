import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <p
        onClick={this.props.func}
        className={this.props.span === "2" ? "btn span2" : "btn"}
      >
        {this.props.btn}
      </p>
    );
  }
}

export default Button;
