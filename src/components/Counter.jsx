import React from 'react'

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h1 className='h3'>Counter</h1>
      <h2 className='h4'>{counter}</h2>
      <div className='btn-group mt-2'>
        <button className='btn btn-secondary' onClick={decrement}>
          -
        </button>
        <button className='btn btn-secondary' onClick={increment}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
