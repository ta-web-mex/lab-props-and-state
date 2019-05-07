import React from 'react'
import { Input, Icon } from 'antd'

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
              <Input
                placeholder="Name"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="text"
                name="name"
                onChange={handleChange}
              />
            </td>
            <td>
              <Input
                placeholder="Surname"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="text"
                name="surname"
                onChange={handleChange}
              />
            </td>
            <td>
              <Input
                placeholder="Age"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="text"
                name="age"
                onChange={handleChange}
              />
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
