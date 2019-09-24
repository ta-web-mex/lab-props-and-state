import React from "react"

const Counter = (props) => (
  <div>
    <h1>Count</h1>
    <h2>{props.count}</h2>
    <div id="buttons">
      <button onClick={props.plus}>+</button>
      <button onClick={props.minus}>-</button>
    </div>
  </div>
)

export default Counter