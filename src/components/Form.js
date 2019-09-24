import React from 'react';

const Form = (props) => {

    return <div className="form">
      <h1>Form</h1>
    <div className="contenedor">
    <div className="inputs">
    <input onChange={props.change} type="text" className="name" placeholder="Name"/>
    <p>{props.name}</p>
    </div>
    <div className="inputs">
    <input onChange={props.change} type="text" className="surname" placeholder="Surname"/>
    <p>{props.surname}</p>
    </div>
    <div className="inputs">
    <input type="number" onChange={props.change} className="age" placeholder="Age"/>
    <p>{props.age}</p>
    </div>
    </div>
    </div>

  }


export default Form