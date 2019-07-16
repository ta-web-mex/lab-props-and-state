import React from 'react'
const Form = props => {
  return (
    <div
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}
    >
      <br />
      <label for="name" />
      <input onChange={props.handleChange} type="text" name="name" placeholder="Text 1" />
      <p>Text 1: {props.name}</p>
      <label for="surname" />
      <input onChange={props.handleChange} type="text" name="surname" placeholder="Text 2" />
      <p>Text 2: {props.surname}</p>
      <label for="surname" />
      <input onChange={props.handleChange} type="text" placeholder="Text 3" />
      <p>Text 3: {props.age}</p>
    </div>
  )
}
export default Form
