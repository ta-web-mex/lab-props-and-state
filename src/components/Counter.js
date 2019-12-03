import React from "react";

function Counter(props) {
  return (
    <>
      <h2>Count:</h2>
      <p>{props.count}</p>
      <button onClick={props.handleIncrement}>+1</button>
      <button onClick={props.handleDecrement}>-1</button>
    </>
  );
}

export default Counter;
