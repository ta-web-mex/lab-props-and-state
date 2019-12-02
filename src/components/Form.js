import React from 'react';

function Form(props) {
    return (
        <>
            <input
                className="form"
                name="name"
                onChange={props.handleChange}
                type="text"
                value={props.name}
            />
            <input
                className="form"
                name="surname"
                onChange={props.handleChange}
                type="text"
                value={props.surename}
            />
            <input
                className="form"
                name="age"
                onChange={props.handleChange}
                type="text"
                value={props.age}
            />
        </>
    );
}

export default Form;