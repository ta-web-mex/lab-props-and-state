import React from 'react';

const Form = ({ displayInput, name, surname, age }) => (
  <form onChange={displayInput}>
    <div>
      <input type="text" name="name" placeholder="name" id="name" />
      <p>{name}</p>
    </div>
    <div>
      <input type="two" placeholder="surname" id="surname" />
      <p>{surname}</p>
    </div>
    <div>
      <input type="text" placeholder="age" id="age" />
      <p>{age}</p>
    </div>
  </form>
);

export default Form;
