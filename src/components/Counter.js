import React from 'react'

const Counter = ({count, increment, decrement}) => {
    return (
        <section className="counter">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div className="buttons">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>

            </div>
        </section>
    )
    
}

export default Counter