import React from 'react'

const Form = ({ handleChange, formData: { name, lastName, age } }) => {
  return (
    <div>
      <h2 className='h3'>Form</h2>
      <div className='row mt-3'>
        <div className='col-12 col-md-4 form-group'>
          <input type='text' placeholder='Name' name='name' className='form-control' onInput={handleChange} />
          <p>{name}</p>
        </div>
        <div className='col-12 col-md-4 form-group'>
          <input type='text' placeholder='Last Name' name='lastName' className='form-control' onInput={handleChange} />
          <p>{lastName}</p>
        </div>
        <div className='col-12 col-md-4 form-group'>
          <input type='number' placeholder='Age' name='age' className='form-control' onInput={handleChange} />
          <p>{age}</p>
        </div>
      </div>
    </div>
  )
}

export default Form
