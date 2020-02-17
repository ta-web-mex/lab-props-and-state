import React from 'react'

function Counter({count, increment, decrement}) {
    return (
        <div>
            <h1>Counter</h1>
            <h2> {count} </h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}


export default Counter