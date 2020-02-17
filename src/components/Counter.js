import React from 'react'

function Counter ({counter, incremento, decremento}){
    return(
        <div className="counter">
            <h2>Counter:</h2>
            <h2>{counter}</h2>
            <div className="buttons">
            <button onClick={decremento}>-</button>
            <button onClick={incremento}>+</button>
            </div>
        </div>
    )
}


export default Counter