import React from 'react'

function Counter({count,increment, decrement}){
    return(

        <section className = "contador">
            <h2>Counter</h2>
            <h3>{count}</h3>
            <button className="btn" onClick= {increment} >+</button>
            <button className="btn" onClick= {decrement}>-</button>
        </section>
        
    )
}

export default Counter