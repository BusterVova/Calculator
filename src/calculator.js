/* eslint no-eval :0*/

import React, { useState } from "react";
import Input from "./components/input";
import Buttons from "./components/buttons";
import "./App.css";

const Calculator = () => {
  const [state, setState] = useState("0");

  const clickedNumber = (value) => {
    if (state === "0") {
      setState("");
    }
    setState((prevState) => prevState + value);
  };

  const setDefaultValue = (value) => {
    if (value === "AC") {
      setState("0");
    }
  };
  const showResult = (value) => {
    if (value === "=") {
      try {
        setState(eval(state));
      } catch {
        alert("Неккоректные данные");
      }
    }
  };

  return (
    <div className="calculator">
      <Input value={state} />
      <Buttons
        clickedNumber={clickedNumber}
        setDefaultValue={setDefaultValue}
        showResult={showResult}
      />
    </div>
  );
};

export default Calculator;
