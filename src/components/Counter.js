import React from 'react';

const Counter = ({ count, add, substract }) => (
  <div className="counter">
    <h2>{count}</h2>
    <div>
      <button onClick={add}>+1</button>
      <button onClick={substract}>-1</button>
    </div>
  </div>
);

export default Counter;
