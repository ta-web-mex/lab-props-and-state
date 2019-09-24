import React from "react"

const Form = (props) => {
  return (
    <div>
      <h1>Form</h1>
      <div id="buttons">
        <input type="text" id="name" name="name" onChange={props.handleChange} />
        <input type="text" id="surname" name="surname" onChange={props.handleChange} />
        <input type="text" id="age" name="age" onChange={props.handleChange} />
      </div>
      <div id="ps">
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.age}</p>
      </div>
    </div>
  )
}

export default Form