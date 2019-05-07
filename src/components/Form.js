import React from 'react'

function Form({ form, handleChange }) {
  const { name, surname, age } = form
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="surname" onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="age" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <p>{name}</p>
            </td>
            <td>
              <p>{surname}</p>
            </td>
            <td>
              <p>{age}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Form
