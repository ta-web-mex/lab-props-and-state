import React from 'react'

function Counter({increment, decrement}){
  return(
    <>
      <h1 className="counter__h1">Counter</h1>
      <button className="counter__button" onClick={increment}>+</button>
      <button className="counter__button" onClick={decrement}>-</button>
    </>
  )
}

export default Counter