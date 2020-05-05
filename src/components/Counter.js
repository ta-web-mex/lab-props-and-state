import React from 'react'

const Counter = ({ plus, min, count = 0 }) => (
  <div>
    <h2>Counter</h2>
    <h2>{count}</h2>
    <button onClick={min}>-</button>
    <button onClick={plus}>+</button>
  </div>
)

export default Counter
