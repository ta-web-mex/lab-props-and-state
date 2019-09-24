import React from 'react';

const Form = ({handleChange, form}) => {
  return (
    <div className="container">
      <div className="row col-md-4 offset-md-4">
        <div className="form-group">
          <h1>Form</h1>
          <div>
            <input className="form-control " type="text" name="name" placeholder="Name" onInput={handleChange} />
            <p>{form.name}</p>
          </div>
          <div>
            <input className="form-control" type="text" name="surname" placeholder="Surname" onInput={handleChange} />
            <p>{form.surname}</p>
          </div>
          <div>
            <input className="form-control" type="tel" name="age" placeholder="Age" onInput={handleChange} />
            <p>{form.age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
