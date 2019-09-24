import React from "react"

const Counter = (props) => (
  <div>
    <h2>{props.count}</h2>
    <button onClick={props.plus}>+</button>
    <button onClick={props.minus}>-</button>
  </div>
)

export default Counter // Counter es el componente Counter.js
