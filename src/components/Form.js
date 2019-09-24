import React from 'react';

const Form = (props) => {

    return <div className="form">
    <h1>Form</h1>
    <input onChange={props.change} type="text" className="name" placeholder="Name"/>
    <p>{props.name}</p>
    <input onChange={props.change} type="text" className="surname" placeholder="Surname"/>
    <p>{props.surname}</p>
    <input type="number" onChange={props.change} className="age" placeholder="Age"/>
    <p>{props.age}</p>
    </div>

  }


export default Form