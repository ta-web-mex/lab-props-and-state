import React from 'react'

const Counter = ({ count, increment, decrement }) => {
    return (
        <div className='box'>
           <h1 className='has-text-centered'>Counter</h1>
           <h2 className='has-text-centered'>{count}</h2>
           <div className='buttons is-centered'>
            <button className ='button is-primary  is-rounded is-size-5' onClick={decrement}>-</button> 
            <button  className ='button is-primary  is-rounded is-size-5'  onClick={increment}>+</button> 
           </div>
           
        </div>
    )
}

export default Counter
