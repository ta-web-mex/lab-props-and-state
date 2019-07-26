import React from "react";

const Form = props => {
  return (
    <div>
      <input type="text" onChange={props.camabioforma} name="name" />
      <br />
      <br />
      <input type="text" onChange={props.camabioforma} name="surname" />
      <br />
      <br />
      <br />
      <input type="text" onChange={props.camabioforma} name="age" />
      <br />

      <br />
      <div>
        <p>name:{props.name}</p>
        <p>surname:{props.surname}</p>
        <p>age:{props.age}</p>
      </div>
    </div>
  );
};

export default Form;
