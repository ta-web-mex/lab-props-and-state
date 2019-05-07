import React from 'react'

function Form ({handleInput}){
return (
  <div className="Form">
    <form>
      <h1>Form</h1>
      <input type="text" name="name" onChange = {handleInput}/>
      <input type="text" name="surname" onChange = {handleInput}/>
      <input type="text" name="age" onChange = {handleInput}/>
    </form>
  </div>
)
}


export default Form