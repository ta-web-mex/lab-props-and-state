import React from 'react'

const Form = props => {
  return (
    <div>
      <input type="text" name="left" onChange={props.inputChange} />
      <small>{props.left}</small>

      <input type="text" name="center" onChange={props.inputChange} />
      <small>{props.center}</small>

      <input type="text" name="right" onChange={props.inputChange} />
      <small>{props.right}</small>
    </div>
  )
}

export default Form
