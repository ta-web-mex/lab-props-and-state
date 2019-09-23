import React from "react";

function Counter ({count, increment, decrement}){
    return(
        <div>
        <h1>Counter: <br/>{count} </h1>
        <button onClick = {decrement}>
            -
        </button>
        <button onClick = {increment}>
            +
        </button>
        </div>
    )
}

export default Counter;