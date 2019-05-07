import React from 'react'


function Form ({UserInfo, handleInput}){
return (
  <div>
    <form>
      <input type="text" name="name" onChange = {handleInput}/>
      <input type="text" name="surname" onChange = {handleInput}/>
      <input type="text" name="age" onChange = {handleInput}/>
    </form>
  </div>
)
}


export default Form