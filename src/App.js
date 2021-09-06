/* eslint no-eval :0*/
import "./App.css";
import React from "react";
import operators from "./operators";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      out: "0",
    };
    this.refOutput = React.createRef();
  }
  clickedNumber(value) {
    let currentValue = value;
    let output = this.refOutput.current;
    this.setState({
      out: currentValue,
    });

    if (output.value === "0") {
      output.value = "";
    }
    output.value += currentValue;
  }

  clickedOperation(value) {
    let output = this.refOutput.current;
    if (value === "AC") {
      output.value = "0";
    } else if (value === "=") {
      try {
        output.value = eval(output.value);
      } catch {
        alert("Недопустимое значение");
      }
    }
  }

  render() {
    return (
      <div className="calculator">
        <input
          className="input"
          ref={this.refOutput}
          type="text"
          defaultValue={this.state.out}
        />
        <div className="buttons">
          <div className="operators">
            {operators.buttons.map((el) => (
              <button
                key={el.value}
                onClick={() => this.clickedNumber(el.value)}
              >
                {el.value}
              </button>
            ))}
          </div>
          <div className="leftPanel">
            <div className="numbers">
              {operators.numbersOne.map((el) => (
                <button
                  key={el.value}
                  onClick={() => this.clickedNumber(el.value)}
                >
                  {el.value}
                </button>
              ))}
            </div>
            <div className="numbers">
              {operators.numbersTwo.map((el) => (
                <button
                  key={el.value}
                  onClick={() => this.clickedNumber(el.value)}
                >
                  {el.value}
                </button>
              ))}
            </div>
            <div className="numbers">
              {operators.numbersThree.map((el) => (
                <button
                  key={el.value}
                  onClick={() => this.clickedNumber(el.value)}
                >
                  {el.value}
                </button>
              ))}
            </div>
            <div className="numbers">
              {operators.operations.map((el) => (
                <button
                  key={el.value}
                  onClick={() => this.clickedNumber(el.value)}
                >
                  {el.value}
                </button>
              ))}
              {operators.AC.map((el) => (
                <button
                  key={el.value}
                  onClick={() => this.clickedOperation(el.value)}
                >
                  {el.value}
                </button>
              ))}
            </div>
          </div>

          {operators.default.map((el) => (
            <button
              className="equal"
              key={el.value}
              onClick={() => this.clickedOperation(el.value)}
            >
              {el.value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
