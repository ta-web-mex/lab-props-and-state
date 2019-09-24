import React from 'react'

function Form(props) {
return(
  <div id = "form">
    <label> Name 
    <br/>
    <input onChange={props.change} type="text" name="name" id="name" />
      <p id="displayName" className="form-control">{props.name}</p>
    </label>
    <label> Surname
    <br/>
      <input onChange={props.change} type="text" name="surname" id="surname" />
      <p id="displaySurname" className="form-control">{props.surname}</p>
    </label>
    <label> Age
    <br/> 
      <input onChange={props.change} type="text" name="age" id="age" />
      <p id="displayAge" className="form-control">{props.age}</p>
    </label>
  </div>
)
}
export default Form