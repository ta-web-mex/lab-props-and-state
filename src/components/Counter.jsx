import React from 'react'

function Counter({increment,decrement,value}) {
    return (
        <>
            <h2>{value}</h2>
            <button onClick={increment} name='add' className="btn btn-success mx-md-n5">+</button>
            <button onClick={decrement} name='substract' className="btn btn-danger mx-md-n5">-</button>
        </>
    )
}

export default Counter