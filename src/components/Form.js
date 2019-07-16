import React from 'react'

export default function Form(props) {
  return (
    <div>
      Name:
      <p className="p">{props.name}</p>
      <input className="input" onChange={props.handleChange} name="name" type="text"/>
      

      Surname:
      <p className="p">{props.surname}</p>
      <input className="input" onChange={props.handleChange} name="surname" type="text"/>
      

      Age:
      <p className="p">{props.age}</p>
      <input className="input" onChange={props.handleChange} name="age" type="text"/>
      
    </div>
  )
}

