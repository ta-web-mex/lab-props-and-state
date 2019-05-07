import React from 'react'

function Counter({count,handleSum, handleMinus}) {
  return(
    <>
    <h2>{count}</h2>
    <button onClick={handleSum} ><i className="material-icons">add_circle</i></button>
    <button onClick={handleMinus}><i className="material-icons">remove_circle</i></button>
    </>
  )
}

export default Counter