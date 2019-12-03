import React from "react";


function Counter(props) {
  return (
    <>
      <h1> Lab Props & State: David Ibarra & Itza Blanco</h1>
      <h2>Count:</h2>
      <p>{props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  );
}


export default Counter;