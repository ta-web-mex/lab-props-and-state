import React from 'react';

function Counter(props) {
    return (
        <>
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.age}</p>
            <h3>Counter:</h3>
            <h2>{props.count}</h2>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </>
    );
}

export default Counter;