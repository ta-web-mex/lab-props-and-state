import React from 'react'

function Counter({ handleClick, counter }) {
  return(
    <>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button name="minus" onClick={handleClick}>-</button>
      <button name="plus" onClick={handleClick}>+</button>
    </>
  )
}

export default Counter