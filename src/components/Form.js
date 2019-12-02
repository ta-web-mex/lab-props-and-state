import React from "react"

function Form (props) {
    return (
        <>
            <br></br>
            <input  name="name" value={props.input1} onChange={props.handleChange} placeholder="name" type="text"></input>
            <p>{props.input1}</p>
            <br></br>
            <input  name="surname" value={props.input2} onChange={props.handleChange} placeholder="surname" type="text"></input>
            <p>{props.input2}</p>
            <br></br>
            <input  name="age" value={props.input3} onChange={props.handleChange} placeholder="age" type="number"></input>
            <p>{props.input3}</p>
        </>
    )
}

export default Form;