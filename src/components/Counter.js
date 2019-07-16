import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{props.counter}</h2>
      <button className="btn" onClick={props.add}> + </button>
      <button className="btn" onClick={props.sub}> - </button>
    </div>
  )
}

export default Counter


