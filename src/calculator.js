/* eslint no-eval :0*/

import React, { useState } from "react";
import Input from "./components/input";
import Buttons from "./components/buttons";
import "./App.css";

const Calculator = () => {
  const [state, setState] = useState({
    out: "0",
  });

  const clickedNumber = (value) => {
    if (state.out === "0") {
      setState({ out: "" });
    }
    setState((prevState) => ({
      out: prevState.out + value,
    }));
  };

  const clickedOperation = (value) => {
    if (value === "AC") {
      setState({
        out: "0",
      });
    } else if (value === "=") {
      try {
        setState({
          out: eval(state.out),
        });
      } catch {
        alert("Неккоректные данные");
      }
    }
  };

  return (
    <div className="calculator">
      <Input value={state.out} />
      <Buttons
        clickedNumber={clickedNumber}
        clickedOperation={clickedOperation}
      />
    </div>
  );
};

export default Calculator;
