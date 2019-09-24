import React from "react";

const Counter = ({ counter, increment, decrement }) => (
  <div className="box">
    <p className="title is-1">Cuenta: {counter}</p>
    <div className="buttons">
    <button className="button is-danger" onClick={decrement}>
      menos -
    </button>
    <button className="button is-success" onClick={increment}>
      mas +
    </button>
    </div>
  </div>
);

export default Counter;