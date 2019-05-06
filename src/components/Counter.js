import React from 'react';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh'
      }}
    >
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </p>
    </section>
  );
};

export default Counter;
