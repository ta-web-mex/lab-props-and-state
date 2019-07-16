import React from 'react'


const Counter = (props) => {
    return (
        <div className= "counter-container">

            <h2>Teletubbies </h2>
            <p>{props.count}</p>
            <button onClick={props.dec} >-</button>
            <button onClick={props.inc} >+</button>
        </div>
    )
}

export default Counter

    
