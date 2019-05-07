import React from "react";

function Counter({ count, increment, decrement }) {
  return (
    <>
      <div className="contador">
        <h2 align="center">Counter</h2>
        <p align="center">{count}</p>
        <p align="center">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </p>
      </div>
    </>
  );
}

export default Counter;
