import React from 'react'

function Counter({counter, increment, decrement}){
    return(
    <section
        style={{
            width: '100vw',
        }}
    >
        <h2>Counter:</h2>
        <h2>{counter}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </section>
    )}

export default Counter