import React from "react";

const  Form = (props) => {
    return(
    <div className="Form">
        <div>
            <p>Input 1</p>
            <input name="name" onChange={props.handleChange}></input>
            <p className="result">{props.name}</p>
        </div>
        <div>
            <p>Input 2</p>
            <input name="surname" onChange={props.handleChange}></input>
            <p className="result">{props.surname}</p>
        </div>
        <div>
            <p>Input 3</p>
            <input name="age" onChange={props.handleChange}></input>
            <p className="result">{props.age}</p>
        </div>
    </div>
    )
}

export default Form
