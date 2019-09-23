import React from 'react'

export default function Counter({ increment, decrement, counter }) {
  return (
    <div class="container mt-5 text-center">
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
