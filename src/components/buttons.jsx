import React from "react";
import operators from "../operators";

const Buttons = ({ clickedNumber, setDefaultValue, showResult }) => {
  return (
    <div className="buttons">
      <div className="operators">
        {operators.buttons.map((el) => (
          <button
            key={el.value}
            id={el.value}
            onClick={() => clickedNumber(el.value)}
          >
            {el.value}
          </button>
        ))}
      </div>
      <div className="leftPanel">
        <div className="numbers">
          {operators.numbersOne.map((el) => (
            <button
              id={el.value}
              key={el.value}
              onClick={() => clickedNumber(el.value)}
            >
              {el.value}
            </button>
          ))}
        </div>
        <div className="numbers">
          {operators.numbersTwo.map((el) => (
            <button
              id={el.value}
              key={el.value}
              onClick={() => clickedNumber(el.value)}
            >
              {el.value}
            </button>
          ))}
        </div>
        <div className="numbers">
          {operators.numbersThree.map((el) => (
            <button
              id={el.value}
              key={el.value}
              onClick={() => clickedNumber(el.value)}
            >
              {el.value}
            </button>
          ))}
        </div>
        <div className="numbers">
          {operators.zeroAndDot.map((el) => (
            <button
              id={el.value}
              key={el.value}
              onClick={() => clickedNumber(el.value)}
            >
              {el.value}
            </button>
          ))}
          {operators.AC.map((el) => (
            <button
              id={el.value}
              key={el.value}
              onClick={() => setDefaultValue(el.value)}
            >
              {el.value}
            </button>
          ))}
        </div>
      </div>

      {operators.default.map((el) => (
        <button
          id={el.value}
          className="equal"
          key={el.value}
          onClick={() => showResult(el.value)}
        >
          {el.value}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
