import React from 'react'


const Form = (props) => {
      return( 
                    <div className= "form-container">
                       <div> 
                        <input type= "text" name= 'name' onChange = {props.change } 
                        value={props.name} placeholder="Enter name"/>
                        <small>Name:{props.name}</small>
                       </div>
                       
                       <div>
                        <input type= "text" name= 'surname' onChange = {props.change }
                         value={props.surname} placeholder="Enter surname" />
                        <small>Surname: {props.surname}</small>
                        </div>
                        <div>
                        <input type= "text" name= 'age' onChange = {props.change}
                         value={props.age} placeholder="Enter age"/>
                        <small>Age:{props.age}</small>
                        </div>
                    </div>       
            )
    }

    export default Form