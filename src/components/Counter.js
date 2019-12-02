import React from "react";

function Counter (props) {
    return (
        <>
            <h2>{props.count}</h2>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </>
    )
}

export default Counter;