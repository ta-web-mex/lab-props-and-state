import React from "react";

const Form = ({change, name, lastName, age}) => (
    
    <div >
    <form onChange={change} className="elform" >
   <div>
    <input type="text" id= "name" placeholder="Name"/>
    <p>{name}</p>
    </div>
    <div>
    <input type="text" id="lastName" placeholder="Last Name"/>
    <p>{lastName}</p>
    </div>
    <div>
    <input type="number" id="age" placeholder="Age"/>
    <p>{age}</p>
    </div>
    </form>
    </div>
   
)

export default Form