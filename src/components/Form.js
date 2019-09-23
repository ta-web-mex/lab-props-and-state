import React from "react";

function Form ({name, surname, age, handleChange}){
  return(
    //solo puede haber un contendedor 
    <form onChange = {handleChange}>
      <div class="form-group">
        <label htmlFor="">Name: </label>
        <input type="text" class="form-control" name="name" id="name"/>
      <p>{name}</p>
      </div>
      <div class="form-group"> 
        <label htmlFor="">Surname: </label>
        <input type="text" class="form-control" name="surname" id="surname"/>
        <p>{surname}</p>
      </div>
      <div class="form-group">
       <label htmlFor="">Age: </label>
        <input type="text" class="form-control" name="age" id="age"/>
        <p>{age}</p>
      </div>
    </form>

    
  )
}

export default Form;