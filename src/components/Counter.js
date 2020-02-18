import React from 'react'

function Contador ({contador, incremento,decremento}){

    return(
        <div className='contador'>
            <h2>
                Contador
            </h2>
    <h3>{contador}</h3>


         <div className="btn_container">
         <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button> 
         </div>
        </div>
    )
}


export default Contador
