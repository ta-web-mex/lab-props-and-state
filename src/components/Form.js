import React from 'react'

const Form = ({handleChange, form}) => {
    return (
        <div className='box'>
            <h1 className='has-text-centered'>Form</h1>
            <div>
    
            <input type='text' name='firstName' placeholder='Name' onInput={handleChange} className="input is-primary"/>
            <p>{form.firstName}</p>
            </div>
            <div>
            <input type='text' name='surname' placeholder='Surname' onInput={handleChange} className="input is-primary"/>
            <p>{form.surname}</p>
            </div>
            <div>
            <input type='tel' name='age' placeholder='Age' onInput={handleChange} className="input is-primary"/>
            <p>{form.age}</p>
            </div>
        </div>
    )
}

export default Form

