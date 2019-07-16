import React from 'react'

const Form = (props) => {
  return (
    <div>
          <input name = "name" type="text" onChange = {props.handleChange}/>
          <p>{props.name}</p>
          <input name = "surname" type="text" onChange = {props.handleChange}/>
          <p>{props.surname}</p>
          <input name = "age" type="text" onChange = {props.handleChange}/>
          <p>{props.age}</p>
    </div>
  )
}

export default Form