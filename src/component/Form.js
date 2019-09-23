import React from 'react'

const Form = props => (
  <div className="form">
    <input name="name" onChange={props.handleChange} />
    <p>name:{props.name} </p>
    <input name="surname" onChange={props.handleChange} />
    <p> surname:{props.surname}</p>
    <input name="age" onChange={props.handleChange} />
    <p>age:{props.age}</p>
  </div>
)
export default Form
