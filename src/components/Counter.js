import React from "react";

const Counter = ({ count, mas, menos }) => (
  <div className="counter">
    <h2>Counter: {count} </h2>
    <div className="buttons">
      <button className="button is-success" onClick={mas}>
        mas
      </button>
      <button className="button is-danger" onClick={menos}>
        menos
      </button>
    </div>
  </div>
);

export default Counter;