import React from 'react' 

function Counter({increment, decrement, count}) {
    return(
        <> 
            <div className="container">
            <p id="number">{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default Counter