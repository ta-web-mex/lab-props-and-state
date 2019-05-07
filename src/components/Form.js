import React from 'react'

function Form({handleChange}){
  return(
    <>
      <h2 className="form__h2">Form</h2>
      <form class="form__container">
        <input class="form__item"  type="text" name="name" placeholder="Name: Arya" onChange={handleChange}/>
        <input class="form__item" type="text" name="surname" placeholder="Surname: Stark" onChange={handleChange}/>
        <input class="form__item" type="number" name="age" placeholder="Age: 18" onChange={handleChange}/>
      </form>
    </>
  )
}

export default Form