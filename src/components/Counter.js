import React from 'react'

const Counter = props => {
  return (
    <div className="Counter">
      <h1>Counter</h1>
      <h2>{props.count}</h2>
      <div>
        <button onClick={props.min}>-</button>
        <button onClick={props.max}>+</button>
      </div>
    </div>
  )
}

export default Counter
