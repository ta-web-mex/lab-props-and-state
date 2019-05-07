import React from "react";


function Counter({ increment, decrement, count }) {
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter