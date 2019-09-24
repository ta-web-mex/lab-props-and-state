import React from "react"

const Form = ({ inputDisplay, name, surname, age}) => (
  <form onChange = {inputDisplay}>
    <div>
      <label>Name: </label>
      <input type="text" id="name" name="name"/>
      <p>{name}</p>
    </div>

    <div>
      <label>Surname: </label>
      <input type="text" id="surname" name="surname"/>
      <p>{surname}</p>
    </div>
    
    <div>
      <label>Age: </label>
      <input type="number" min="0" id="age" name="age"/>
      <p>{age}</p>
    </div>
  </form>
)

export default Form