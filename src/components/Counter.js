import React from 'react'

const Counter = ({ count, increment, decrease }) => {
  return (
    <div>
      <div className="counter">
        <div >
          <h1>Counter</h1>
        </div>
        <div>
          <h2>{count}</h2>
        </div>
      </div>
      <div class="botones">
        <div>
          <button className="decrease" onClick={decrease}>Decrease</button>
        </div>
        <div>
          <button className="decrease" onClick={increment}>Increase</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
