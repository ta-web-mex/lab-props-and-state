import React from 'react'

function Form ({name, surname, age, handleChange}){
    return(
        <div className="form">
            <h2>Form</h2>
            <div className="inputs">
                <input onChange={handleChange} name="name" type="text"/>
                <input onChange={handleChange} name="surname" type="text"/>
                <input onChange={handleChange} name="age" type="number"/>
            </div>
            <div className="ps">
                <p>{name}</p>
                <p>{surname}</p>
                <p>{age}</p>
            </div>
        </div>
    )
}

export default Form