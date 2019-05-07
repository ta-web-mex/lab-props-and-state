import React from 'react'

function Counter ({incrementCount, decrementCount}){

  return (
  <div>
    
    <button className="btn" onClick ={incrementCount}>+</button>
    <button className="btn" onClick ={decrementCount}>-</button>
  </div>
  )

}

export default Counter