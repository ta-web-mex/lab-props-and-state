import React from 'react'

function Counter({count, handleIncrement, handleDecrement}){
    return(
        <>
        <h1>Counter:</h1>
        <h2>{count}</h2>

        <button onClick={handleDecrement}><i className="material-icons">remove_circle_outline</i></button>
        <button onClick={handleIncrement}><i className="material-icons">add_circle_outline</i></button>
        </>
    )
}

export default Counter