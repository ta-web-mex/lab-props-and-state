import React from 'react'

const Form = ({name, surname, age, handleChange}) => {
    return (
        <div className='form'>
          
       <article>
       <input
             onChange={handleChange}
             type="text"
             name="name"
             placeholder="Name"
             value={name}
             />
           
          <p>{name}</p>
       </article>
       <article>
       <input
             onChange={handleChange}
             type="text"
             name="surname"
             placeholder="Surname"
             value={surname}
             />
           
          <p>{surname}</p>
       </article>
       <article>
       <input
             onChange={handleChange}
             type="text"
             name="age"
             placeholder="Age"
             value={age}
            />
            
          <p>{age}</p>
       </article>
       
     
        </div>
    )
}

export default Form 