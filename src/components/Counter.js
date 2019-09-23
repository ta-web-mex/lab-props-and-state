import React from "react";

const Counter = ({ counter, increment, decrement }) => (
  <div className="contador">
    <h2>Count: {counter}</h2>
    <button className="button is-danger" onClick={decrement}>
      decrement --
    </button>
    <button className="button is-success" onClick={increment}>
      increment ++
    </button>
  </div>
);

export default Counter;