import React, { Component } from "react";

class Body extends Component {
  render() {
    const {
      handlePrintNumber,
      handleOperationAction,
      handleOtherAction,
    } = this.props;

    return (
      <div className="calc-body">
        <div className="number">
          <p
            onClick={() => handleOtherAction("reset")}
            className="button operation reset"
          >
            AC
          </p>
          <p
            onClick={() => handleOtherAction("sign")}
            className="button operation"
          >
            +/-
          </p>
          <p
            onClick={() => handleOtherAction("percent")}
            className="button operation"
          >
            %
          </p>
          <p
            onClick={() => handleOperationAction("division")}
            className="button operation special"
          >
            <span>&#247;</span>
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            7
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            8
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            9
          </p>
          <p
            onClick={() => handleOperationAction("multiplication")}
            className="button operation special"
          >
            <span>&#215;</span>
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            4
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            5
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            6
          </p>
          <p
            onClick={() => handleOperationAction("subtraction")}
            className="button operation special"
          >
            -
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            1
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            2
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="button">
            3
          </p>
          <p
            onClick={() => handleOperationAction("addition")}
            className="button operation special"
          >
            +
          </p>
          <p onClick={(e) => handlePrintNumber(e)} className="span2 button">
            0
          </p>
          <p onClick={() => handleOtherAction("comma")} className="button">
            .
          </p>
          <p
            onClick={() => handleOperationAction("equal")}
            className="button  equal"
          >
            =
          </p>
        </div>
      </div>
    );
  }
}

export default Body;
