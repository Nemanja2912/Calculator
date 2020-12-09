import React, { Component } from "react";

class Screen extends Component {
  state = {};
  render() {
    const { num, preview, handleDelete } = this.props;
    return (
      <div className="screen">
        <div className="display">
          {num === ""
            ? 0
            : String(num).length > 7
            ? Number(num).toExponential(4)
            : num}
        </div>
        <div className="preview">
          <p className="num-prev">
            {preview.join(" ").replaceAll("/", "÷").replaceAll("*", "×")}
          </p>
          <p onClick={() => handleDelete()} className="delete">
            <i className="fas fa-backspace"></i>
          </p>
        </div>
      </div>
    );
  }
}

export default Screen;
