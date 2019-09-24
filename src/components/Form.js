import React from 'react'

const Form = ({ handleChange,form }) => {
  return (

  
    <div class="container">
      <h1>Form</h1>
      <div >
        <input class="input-group mb-3" type="text"
          name="name"
          placeholder="Name"
          onInput={handleChange}
        />
        <p>{form.name}</p>
      </div>
      <div>
        <input class="input-group mb-3" type="text"
          name="surname"
          placeholder="Surname"
          onInput={handleChange}
        />
        <p>{form.surname}</p>
      </div>
      <div>
        <input class="input-group mb-3" type="tel" name="age" placeholder="Age" onInput={handleChange} />
        <p><p>{form.age}</p></p>
      </div>
    </div>
  )
}

export default Form
