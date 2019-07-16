import React from 'react'


const Form = props =>{
  return (<form className="form">
    <h1>Form</h1>
  
    <label for="name">Nombre:</label>
    <input onChange={props.handleChange} type="text" name="name" />
    <p>Nombre: {props.name}</p>
    <label for="surname">Apellido:</label>
    <input onChange={props.handleChange} type="text" name="surname" />
    <p>Apellido: {props.surname}</p>
    <label for="surname">Edad:</label>
    <input onChange={props.handleChange} type="text" name="age" />
    <p>Edad: {props.age}</p>
  
  </form>)

}

export default Form