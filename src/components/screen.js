import React, { Component } from "react";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="screen">{this.props.display}</div>;
  }
}

export default Screen;
