import React from "react";

const Form = props => {
  return (
    <div>
      <input type="text" onChange={props.inputChange} value={props.text} />
      <p>{props.text}</p>
      <input type="text" onChange={props.inputChange} value={props.text} />
      <p>{props.text}</p>
      <input type="text" onChange={props.inputChange} value={props.text} />
      <p>{props.text}</p>
    </div>
  );
};

export default Form;
