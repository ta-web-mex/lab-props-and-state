import React from 'react'

const Counter = (props) => (
  <div className="counter">
    <h2>Counter</h2>
    <h2>{props.count}</h2>
    <button class="btn btn-outline-dark" onClick={props.decrement}>
      -
    </button>
    <button class="btn btn-outline-dark" onClick={props.increment}>
      +
    </button>
  </div>
)

export default Counter
