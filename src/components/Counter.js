import React from "react";

const Counter = props => {
  return (
    <div>
      <h2> {props.value} </h2>
      <button onClick={props.increase}> Increase </button>
      <button onClick={props.decrease}> Decrease </button>
    </div>
  );
};

export default Counter;
