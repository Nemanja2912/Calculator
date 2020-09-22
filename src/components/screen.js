import React, { Component } from "react";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="screen">
        <p className="preview">{this.props.preview}</p>
        <p>{this.props.display === "" ? 0 : this.props.display}</p>
      </div>
    );
  }
}

export default Screen;
