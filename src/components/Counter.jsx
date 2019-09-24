import React from 'react'

const Counter = (props) => {
  return (
    <div className="counter">
      <h2>COUNTER</h2>
      <p>{props.counter}</p>
      <div>
        <button className="button is-danger" onClick={props.min}>-</button>
        <button className="button is-success"  onClick={props.sum}>+</button>
      </div>
    </div>
  )
}

export default Counter


