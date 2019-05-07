import React from 'react'

function Form({ name, surname, age, handleInput }) {
  return (
    <section class="formulario">
      <div>
        <input type="text" name="name" onChange={handleInput} />
        <p>{name}</p>
      </div>
      <div>
        <input type="text" name="surname" onChange={handleInput} />
        <p>{surname}</p>
      </div>
      <div>
        <input type="text" name="age" onChange={handleInput} />
        <p>{age}</p>
      </div>
    </section>
  )
}

export default Form
