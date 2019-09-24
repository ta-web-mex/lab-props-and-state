import React from "react"

const Form = (props) => {
  return (
    <div>
      <input type="text" id="name" name="name" onChange={props.handleChange} />
      <input type="text" id="surname" name="surname" onChange={props.handleChange} />
      <input type="text" id="age" name="age" onChange={props.handleChange} />
      <p>{props.name}</p>
      <p>{props.surname}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default Form
