import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "",
    };
  }

  multipleFunction = () => {
    this.props.func();
    this.setState({
      background: "#535353",
    });
    setTimeout(() => {
      this.setState({
        background: "",
      });
    }, 200);
  };

  render() {
    return (
      <p
        style={{ backgroundColor: this.state.background }}
        onClick={this.multipleFunction}
        className={this.props.span === "2" ? "btn span2" : "btn"}
      >
        {this.props.btn}
      </p>
    );
  }
}

export default Button;
