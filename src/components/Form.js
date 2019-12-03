import React from "react";

function Form(props) {
  return (
    <>
      <input
        type="text"
        name="name"
        onChange={props.handleChange}
        value={props.name}
      ></input>
      <p>{props.name}</p>

      <input
        type="text"
        name="surname"
        onChange={props.handleChange}
        value={props.surname}
      ></input>
      <p>{props.surname}</p>

      <input
        type="text"
        name="age"
        onChange={props.handleChange}
        value={props.age}
      ></input>
    </>
  );
}

export default Form;
