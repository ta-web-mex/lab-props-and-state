import React from 'react'

export default function Form({ handleChange, formData }) {
  return (
    <div class="container mt-5 text-center">
      <h2>Form</h2>
      <small>Type something</small>
      <br />
      <br />
      <input type="text" name="text1" onInput={handleChange} />
      <p>{formData.text1}</p>
      <input type="text" name="text2" onInput={handleChange} />
      <p>{formData.text2}</p>
      <input type="text" name="text3" onInput={handleChange} />
      <p>{formData.text3}</p>
    </div>
  )
}
