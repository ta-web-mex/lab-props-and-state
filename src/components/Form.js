import React from 'react'

function Form({name, surname, age, changeInput}){
    return(
        <section
            style={{
                width:'100vw',
                height: '30%',
                display: 'flex',
                alignItems:'center',
                justifyContent: 'space-evenly',
                padding: '10%'
            }}
        >
        <p>Name</p>
        <input onChange={changeInput} type='text' name='name' value={name} />
        <p>{name}</p>
        <p>Surname</p>
        <input onChange={changeInput} type='text' name='surname' value={surname} />
        <p>{surname}</p>
        <p>Age</p>
        <input onChange={changeInput} typer='text' name='age' value={age} />
        <p>{age}</p>
    </section>
    )
}

export default Form