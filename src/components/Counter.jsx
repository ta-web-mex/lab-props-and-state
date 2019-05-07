import React from 'react'

function Counter ({incrementCount, decrementCount}){

  return (
  <div className="Count">
    <h1>Count</h1>
    <button className="btn" onClick ={incrementCount}>+</button>
    <button className="btn" onClick ={decrementCount}>-</button>
  </div>
  )

}

export default Counter