import React from 'react'

function Form({handleInputs, name, surname, age}) {
    return (
        <div style={{
            marginTop: '400px',
        }}>
        <h1>Form</h1>
        <section
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row'
            }}
        >
            <div>
            <input type="text" onChange={handleInputs} value={name} placeholder="name" name="name" />
            <p>{name}</p>
            </div>
            <div>
            <input type="text" onChange={handleInputs} value={surname} placeholder="surname" name="surname"/>
            <p>{surname}</p>
            </div>
            <div>
            <input type="text" onChange={handleInputs} value={age} placeholder="age" name="age" />
            <p>{age}</p>
            </div>

        </section>
        </div>
    )
}

export default Form;