import React from 'react'
import App from './App.css'

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <div className="counter">
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter
