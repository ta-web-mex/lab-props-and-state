import React from 'react'

const Counter = props => {
  return (
    <div>
      <h2>Counter</h2>
      <p>{props.counter}</p>
      <button onClick={props.add}>+</button>
      <button onClick={props.sub}>-</button>
    </div>
  )
}

export default Counter
