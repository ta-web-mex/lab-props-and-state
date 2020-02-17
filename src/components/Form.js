import React from 'react'

function Form({name,surname,age,handleChange}){
    return (
        <section >
            <div className="info">
                <h2>Form</h2>
            </div>
            <div className="info">
                <div className="cuadro" >
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="name"
                    value={name} />
                    <p>{name}</p>
                </div>
                <div className="cuadro">
                    <input onChange={handleChange}
                    type="text"
                    name="surname"
                    placeholder="surname"
                    value={surname} />
                    <p>{surname}</p>
                </div> 
                <div className="cuadro">
                    <input onChange={handleChange}
                    type="text"
                    name="age"
                    placeholder="age"
                    value={age} />
                    <p>{age}</p>
                </div>
            </div>
        </section>
    )
}
export default Form