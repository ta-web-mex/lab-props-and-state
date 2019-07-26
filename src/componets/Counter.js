import React from "react";

export default function Counter(props) {
  return (
    <div>
      <h2>counter {props.value}</h2>
      <button onClick={props.increase}>Increment</button>
      <button onClick={props.decrease}>Decrement</button>
    </div>
  );
}
