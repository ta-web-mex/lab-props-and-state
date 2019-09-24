import React from 'react';

const Counter = (props) => {

    return <div>
    <h1>Counter</h1>
    <h2>{props.counter}</h2>
    <button onClick={props.menos}>menos</button>
    <button onClick={props.mas}>mas</button>
    <br/><br/><br/><br/><br/><br/><br/>
    </div>

  }


export default Counter