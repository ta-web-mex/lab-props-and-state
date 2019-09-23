import React from "react";

 function Form (props){
  return (
    <div className= "form">
      <input type="text" onChange={props.handleChange} name="name" />
      <br />
      <p>name:{props.name}</p>
      <br />
      <input type="text" onChange={props.handleChange} name="surname" />
      <br />
      <p>surname:{props.surname}</p>
      <br />
      <br />
      <input type="text" onChange={props.handleChange} name="age" />
      <br />
      <p>age:{props.age}</p>
       <br />
    </div>
  );
};

 export default Form;