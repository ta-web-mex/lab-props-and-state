import React from 'react'

function Counter({increment,decrement,value}) {
    return (
        <>
            <h2>{value}</h2>
            <button onClick={increment} name='add'>+</button>
            <button onClick={decrement} name='substract'>-</button>
        </>
    )
}

export default Counter