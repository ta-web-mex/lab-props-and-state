import React from 'react'

function Counter(props) {
  return (
    <div>
      <h2>{props.counter}</h2>
      <button onClick={props.clickHandlerPlus}>+</button>
      <button onClick={props.clickHandlerMinus}>-</button>
    </div>
  )
}

export default Counter
