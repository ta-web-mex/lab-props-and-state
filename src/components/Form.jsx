import React from 'react'

const Form = ({handleChange, form}) => {
  return (
    <div className="box">
      <h1 className="title is-2">Form</h1>

      <div className="field">
      <label className="label">Name:</label>
      <p className="notification subtitle is-4">{ form.name }</p>
        <input className="input" type="text" name="name" onInput={handleChange}/>

      </div>

      <div className="field">
      <label className="label">Surname:</label>
      <p className="notification subtitle is-4">{ form.surname }</p>
        <input className="input" type="text" name="surname" onInput={handleChange}/>
      </div>

      <div className="field">
      <label className="label">Age:</label>
      <p className="notification subtitle is-4">{ form.age }</p>
        <input className="input" type="number" name="age" onInput={handleChange}/>
      </div>

    </div>
  )
}

export default Form

