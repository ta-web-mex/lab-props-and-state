import React from "react";

const Form = props => {
  return (
    <div className="forms">
      <div>
        <input type="text" onChange={props.inputChange} name="name" />

        <input type="text" onChange={props.inputChange} name="surname" />

        <input type="text" onChange={props.inputChange} name="age" />
      </div>

      <div className="form-value">
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.age}</p>
      </div>
    </div>
  );
};

export default Form;
