
import React from 'react'

const Form = (props) => {
  return (
    <div className="form">
      <h2>FORM</h2>
      <div className="input-container">
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <div className="control">
            <input className="input" onChange={props.handleChange} type="text" name="name" placeholder="Write your name" />
          </div>
          <p className="help">Your name is: <span>{props.name}</span></p>
        </div>
        <div className="field">
          <label className="label" htmlFor="surname">Surname</label>
          <div className="control">
          <input className="input" onChange={props.handleChange} type="text" name="surname" placeholder="Write your surname" />
          </div>
          <p className="help">Your surname is: <span>{props.surname}</span></p>
        </div>
        <div className="field">
          <label className="label" htmlFor="age">Age</label>
            <div className="control">
          <input className="input" onChange={props.handleChange} type="text" name="age" placeholder="Write your age"/>
          </div>
          <p className="help">Your age is: <span>{props.age}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Form