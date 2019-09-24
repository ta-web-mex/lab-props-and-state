import React from 'react'

function Counter({more, less, count}){
return (
 <div id="Counter">
    <h2>Count: {count}</h2>
    <div id="buttons">
      <button onClick={less} className="btn btn-light"> - </button>
      <button onClick={more} className="btn btn-dark"> + </button>
    </div>
    <br/>
 </div>
)
}

export default Counter