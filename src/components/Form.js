import React from "react";

function Form(props) {
  return (
    <div className="forms">
      <input
        className="name-input"
        name="name"
        onChange={props.handleInput}
        type="text"
        value={props.nameValue}
      />
      <input
        className="surname-input"
        name="surname"
        onChange={props.handleInput}
        type="text"
        value={props.surnameValue}
      />
      <input
        className="age-input"
        name="age"
        onChange={props.handleInput}
        type="text"
        value={props.ageValue}
      />
      <p>Name: {props.nameValue}</p>
      <p>Surname: {props.surnameValue}</p>
      <p>Age: {props.ageValue}</p>
    </div>
  );
}

export default Form;
