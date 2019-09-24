import React from "react";

const Counter = (props) => {
  return <div>
    <h1>Cuenta</h1>
    <h2>{props.counter}</h2> 
    <button className="button is-danger" onClick={props.menos}>
      -
    </button>
    <button className="button is-success" onClick={props.mas}>
      +
    </button>
  </div>
}

export default Counter;