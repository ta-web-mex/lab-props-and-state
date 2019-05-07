import React from 'react'

function Form({ handleChange, form }) {
  const  {name, surname, age} = form
  return(
    <>
      <input name="name" onChange={handleChange}></input>
      <p>{name}</p>
      <input name="surname" onChange={handleChange}></input>
      <p>{surname}</p>
      <input name="age" onChange={handleChange}></input>
      <p>{age}</p>
    </>
  )
}

export default Form