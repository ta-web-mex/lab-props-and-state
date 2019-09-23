import React from 'react'

const Counter = ({ counter, mas, menos }) => (
  <div className="counter">
    <p>Counter:{counter}</p>
    <div>
      <button onClick={menos}>-</button>
      <button onClick={mas}>+</button>
    </div>
  </div>
)

export default Counter
