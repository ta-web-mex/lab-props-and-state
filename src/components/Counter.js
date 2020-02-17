import React from 'react'

function Counter({count,increment,decrement}){
    return (
        <section className="Contador">
            <h2>Counter</h2>
            <h2>{count}</h2>
            <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </div>
        </section>
    )
}

export default Counter