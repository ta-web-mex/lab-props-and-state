
import React from 'react'

const Form = (props) => {
  return (
    <div className="form">
      <h2>FORM</h2>
      <div className="input-container">
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={props.handleChange} type="text" name="name" placeholder="Write your name" />
          <p>Your name is: <span>{props.name}</span></p>
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input onChange={props.handleChange} type="text" name="surname" placeholder="Write your surname" />
          <p>Your surname is: <span>{props.surname}</span></p>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input onChange={props.handleChange} type="text" name="age" placeholder="Write your age"/>
          <p>Your age is: <span>{props.age}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Form