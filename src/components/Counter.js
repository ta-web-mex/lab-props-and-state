import React from 'react'

const Counter = ({counter, handleCounter}) => {
    return (
        <div className='counter'>
            <h2>{counter}</h2>
            
            <button onClick={()=> handleCounter(1)}>+</button>
            <button onClick={()=> handleCounter(-1)}>-<div class="alert alert-success" role="alert">
              <h4 class="alert-heading"></h4>
              <p></p>
              <p class="mb-0"></p>
            </div></button>
            
        </ div>
    )
}

export default Counter