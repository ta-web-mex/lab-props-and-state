import React from 'react';

const Counter = ({count, increment, decrement}) => {
  return (
    <div className="container col-md-4 offset-md-4 p-5">
      <div d-flex justify-content-center>
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
      <div d-flex justify-content-center>
        <button className="btn btn-secondary btn-lg p-2" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-secondary btn-lg p-2 mx-1" onClick={decrement}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
