import React from 'react'

const Form = ({ handleChange, form }) => {
  return (
    <div>
      <h1>Form</h1>
      <div className="inputs">
        <div>
          <input type="text" name="name" placeholder="Name" onInput={handleChange} />
          <p>{form.name}</p>
        </div>
        <div>
          <input type="text" name="surname" placeholder="Surname" onInput={handleChange} />
          <p>{form.surname}</p>
        </div>
        <div>
          <input type="number" name="age" placeholder="Age" onInput={handleChange} />
          <p>{form.age}</p>
        </div>
      </div>
    </div>
  )
}

export default Form
