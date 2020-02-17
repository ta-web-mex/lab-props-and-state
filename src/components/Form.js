import React from 'react'

const Form = ({name, surname, age, handleChange}) => {
    return (
        <section className="form">
            <h1>Form</h1>
            <div className="row">

            <article>
            <input 
                onChange={handleChange}
                type='text' 
                name='name' 
                placeholder='Name'
                value={name}
            />
            <p>{name}</p>
            </article>
            <article>
            <input 
                onChange={handleChange}
                type='text' 
                name='surname' 
                placeholder='Surname' 
                value={surname}
            />
            <p>{surname}</p>
            </article>
            <article>
            <input 
                onChange={handleChange}
                type='number' 
                name='age' 
                placeholder='Age' 
                value={age}
            />
            <p>{age}</p>
            </article>
            </div>
        </section>
    )
    
}

export default Form