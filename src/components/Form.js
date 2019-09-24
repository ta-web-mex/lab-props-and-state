import React from 'react'

const Form = ({ form, handleChange }) => {
  return (
    <div>
      <h1 className="form">Form</h1>
      <div className="inputs">
        <div>
          <input className="box-text" type="text" name="firstname" placeholder="Name" onInput={handleChange} />
          <p>{form.firstname}</p>
        </div>
        <div>
          <input className="box-text" type="text" name="surename" placeholder="Surename" onInput={handleChange} />
          <p>{form.surename}</p>
        </div>
        <div>
          <input className="box-text" type="number" name="age" placeholder="Age" onInput={handleChange} />
          <p>{form.age}</p>
        </div>
      </div>
    </div>
  )
}

export default Form