import React, { Component } from "react";

class History extends Component {
  render() {
    return (
      <div
        style={{ display: this.props.hide ? "none" : "flex" }}
        className="history"
      >
        <p className="close" onClick={this.props.handleHide}>
          x
        </p>
        {this.props.history.map((h) => (
          <p>
            {h} <br />= {eval(h)}
          </p>
        ))}
      </div>
    );
  }
}

export default History;
