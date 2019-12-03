import React from "react";

function Form(props) {
  return (
    <>
      <h2 className="title">Form</h2>
      <div className="data">
        <input
          className="name"
          name="name"
          onChange={props.handleChange}
          type="text"
          value={props.name}
        />
        <input
          className="name"
          name="surname"
          onChange={props.handleChange}
          type="text"
          value={props.surname}
        />
        <input
          className="name"
          name="age"
          onChange={props.handleChange}
          type="text"
          value={props.age}
        />
      </div>
      <div className="name">
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.age}</p>
      </div>
    </>
  );
}

export default Form;
