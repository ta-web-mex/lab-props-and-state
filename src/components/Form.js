import React from 'react'

function Form ({name,surname,age, manejadoDeInputs}){
    return (
        <div className="formulario">
            <h2>Formulario</h2>
            <input 
            onChange={manejadoDeInputs}
            type="text" 
            name="name" 
            placeholder="Name"/>
            <p>{name}</p>
            
            
            <input 
             onChange={manejadoDeInputs}
            type="text" 
            name="surname" 
            placeholder="Surname"/>
            <p>{surname}</p>
            
            
            <input 
            onChange={manejadoDeInputs}
            type="text" 
            name="age" 
            placeholder="Age"/>
            <p>{age}</p>

        </div>
    )
}

export default Form