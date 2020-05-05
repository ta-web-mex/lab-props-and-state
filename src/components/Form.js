import React from 'react'

const Form = ({ name, surname, age, changeInputName, changeInputSurname, changeInputAge }) => (
  <div>
    <input type="text" name="name" value={name} onChange={changeInputName} />
    <input type="text" name="surname" value={surname} onChange={changeInputSurname} />
    <input type="text" name="age" value={age} onChange={changeInputAge} />
    <p>{name}</p>
    <p>{surname}</p>
    <p>{age}</p>
  </div>
)
export default Form
