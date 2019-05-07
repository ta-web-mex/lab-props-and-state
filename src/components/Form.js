import React from 'react'

function Form({ name, surname, age, handleInput }){
  return(
    <>
    <p>Name: {name}</p>
    <p>Surname: {surname}</p>
    <p>Age: {age}</p>
    <form>
      <fieldset>
        <label for="name">Name:</label>
        <input type="text"  name="name" onChange={handleInput} />
      </fieldset>
      <fieldset>
        <label for="surname" >Surname:</label>
        <input type="text" name="surname"  onChange={handleInput}/>
      </fieldset>
      <fieldset>
        <label for="age">Age:</label>
        <input type ="number" name="age" onChange={handleInput} />
      </fieldset>
    </form>
    </>
  )
}

export default Form