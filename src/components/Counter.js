import React from 'react'

const Counter = ({ count, increment, decrement }) => {
  return (
    <div class="container">
      <h1>Counter</h1>
      <h2>{count}</h2>

      <button class="btn btn-info" onClick={decrement}>
        -
      </button>
      <button class="btn btn-info offset-md-1" onClick={increment}>
        +
      </button>
    </div>
  )
}

export default Counter
