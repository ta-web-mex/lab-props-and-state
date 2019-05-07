import React from "react";

function Form({ handleInput, name, surname, age }) {
  return (
    <>
      <div className="form">
        <h2 align="center">Form</h2>
        <div className="Forma">
          <article>
            <input type="text" name="name" onChange={handleInput} />
            <p>{name}</p>
          </article>
          <article>
            <input type="text" name="surname" onChange={handleInput} />
            <p>{surname}</p>
          </article>
          <article>
            <input type="text" name="age" onChange={handleInput} />
            <p>{age}</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Form;
