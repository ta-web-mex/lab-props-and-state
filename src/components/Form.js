import React from "react";

const Form = ({form, handleChange}) => {
    return (
        <div className="container">
            <h1>Form</h1>
            <div>
                <input type="text" name="name" placeholder="Name" onInput={handleChange} class="form-control"/>
                <p>{form.name}</p>
            </div>
            <div>
                <input type="text" name="surname" placeholder="Surname" onInput={handleChange} class="form-control"/>
                <p>{form.surname}</p>
            </div>
            <div>
                <input type="number" name="age" placeholder="Age" onInput={handleChange} class="form-control"/>
                <p>{form.age}</p>
            </div>
        </div>
    )
};

export default Form;
