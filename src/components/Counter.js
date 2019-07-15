import React from 'react'

const Counter = (props) => {
  return (
    <div className="counter">
      <h2>COUNTER</h2>
      <p>{props.counter}</p>
      <div>
        <button onClick={props.min}>-</button>
        <button onClick={props.sum}>+</button>
      </div>
    </div>
  )
}

export default Counter


