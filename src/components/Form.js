import React from 'react'


const Form = ({name, surname, age, handleInput}) => {
return (
    <div>
    <h4>Form</h4>
    <div className='form'>
        <input type='text' placeholder='name' value={name} onChange={handleInput} name='name'></input>
        <input type='text' placeholder='surname' value={surname} onChange={handleInput} name='surname'></input>
        <input type='text' placeholder='age' value={age} onChange={handleInput} name='age'></input>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{age}</p>
    </div>
    </div>
)
}

export default Form