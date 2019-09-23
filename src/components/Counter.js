import React from "react";

function Counter({counter, less, more}){
  return(
    <div>
      <h2>{counter}</h2>
      <button class="btn btn-info" onClick ={less} >menos</button>
      <button class="btn btn-info" onClick = {more}>mas</button>
    </div>
  )
}

export default Counter;