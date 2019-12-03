import React from "react";

function Counter(props) {
  return (
    <div className="count">
      <h2>Counter: </h2>
      <h2>{props.count}</h2>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

export default Counter;
