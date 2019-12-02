import React from "react";

function Counter(props) {
  return (
    <>
      <h2>Count:</h2>
      <p>{props.count}</p>
      <button onClick={props.handleIncrement}>+</button>
      <button onClick={props.handleDecrement}>-</button>
    </>
  );
}

export default Counter;
