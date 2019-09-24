import React from "react";

const Counter = ({ counter, mas, menos }) => (
    <div className="App">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button className="button" onClick={menos}>Menos</button>
        <button className="button" onClick={mas}>Mas</button>
    </div>
);


export default Counter
