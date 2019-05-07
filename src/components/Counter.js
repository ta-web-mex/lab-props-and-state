import React from 'react'


function Counter({ count, increment, decrement }) {
  return (
    <>
    <div className="counter">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
      <button onClick={decrement}>-</button>

      <button onClick={increment}>+</button>
      </div>
      </div>
      </>
  )
}

export default Counter