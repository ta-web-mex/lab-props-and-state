import React from 'react'

const Form = ({ name, surname, age, changeInputName, changeInputSurname, changeInputAge }) => (
  <div class="form">
    <input type="text" name="name" value={name} onChange={changeInputName} />
    <p>{name}</p>
    <input type="text" name="surname" value={surname} onChange={changeInputSurname} />
    <p>{surname}</p>
    <input type="text" name="age" value={age} onChange={changeInputAge} />

    <p>{age}</p>
  </div>
)
export default Form
