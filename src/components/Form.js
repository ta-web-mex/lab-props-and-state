import React from 'react'

function Form({handleInput, form}) {
    const {name, surname, age} = form
    return(
        <>
            <form id="form">
                <article>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleInput}/>
                    <p>{name}</p>
                </article>
                <article>
                    <label>Surname</label>
                    <input type="text" name="surname" onChange={handleInput} />
                    <p>{surname}</p>
                </article>
                <article>
                    <label>Age</label>
                    <input type="text" name="age" onChange={handleInput}/>
                    <p>{age}</p>
                </article>
            </form>
        </>
    )
}

export default Form