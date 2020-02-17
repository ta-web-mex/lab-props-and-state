import React from 'react'

function Form({name, surname, age, handleChange}){
    return (
        <section className = "formulario">
        <div>
            <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="name"
                value = {name}
                className="inp"
            />
            <p>{name}</p>

        </div>

        <div>
            
            <input
                onChange={handleChange}
                type="text"
                name="surname"
                placeholder="surname"
                value = {surname}
                className="inp"
            />
            <p>{surname}</p>
            </div>

            <div>
            <input
                onChange={handleChange}
                type="number"
                name="age"
                placeholder="age"
                value = {age}
                className="inp"
            />
            <p>{age}</p>
            
            
            
            </div>
        </section>
    )
}


export default Form