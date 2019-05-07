import React from 'react'

function Form({handleInput, handleSubmit, name, surname, age}){
  return(
    <>
    <div>
      <div>
        <input type="text" name="name" onChange={handleInput}/>
        <p>{name}</p>
      </div>
      <div>
        <input type="text" name="surname" onChange={handleInput}/>
        <p>{surname}</p>
      </div>
      <div>
        <input type="text" name="age" onChange={handleInput}/>
        <p>{age}</p>
      </div>
    </div>
  </>
  )
}


export default Form
