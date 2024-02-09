import React, { useState } from "react";

const Card = () => {
  const [counter, setCounter] = useState(0);

  const countHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const resetHandler = () => {
    setCounter(0);
  };
  const decreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="card">
      <div className="counter">
        <span>{counter}</span>
      </div>
      <div className="buttons">
        <button onClick={countHandler}>+</button>
        <button disabled={!counter} onClick={resetHandler}>
          Reset
        </button>
        <button disabled={!counter} onClick={decreaseCounter}>
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
