import React from 'react'

function Form(props) {
  return (
    <div className="form">
      <div>
        <h2>Form</h2>
      </div>
      <div className="inputs">
        <div>
          <input type="text" name="name" value={props.name} onChange={props.handleChangeName} />
          <p>{props.name}</p>
        </div>
        <div>
          <input
            type="text"
            name="surname"
            value={props.surname}
            onChange={props.handleChangeSurname}
          />
        </div>
        <div>
          <p>{props.surname}</p>
          <input type="text" name="age" value={props.age} onChange={props.handleChangeAge} />
          <p>{props.age}</p>
        </div>
      </div>
    </div>
  )
}

export default Form
