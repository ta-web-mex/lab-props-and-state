import React from 'react'


const Form = props =>{
  return <div>
  <h1>FORM CHIDO</h1>
  <label  for="name">Nombre:</label>
  <input onChange={props.handleChange} type="text" name="name"/>
  <p>Este es tu nombre: {props.name}</p>
  <label  for="surname">Apellido:</label>
  <input onChange={props.handleChange} type="text" name="surname"/>
  <p>Este es tu apellido: {props.surname}</p>
  <label  for="surname">Edad:</label>
  <input onChange={props.handleChange} type="text" name="age"/>
  <p>Esta es tu edad: {props.age}</p>
 
   </div>

}

export default Form