import React from 'react'

function Form({handleInput }){
    return(
        <>
            <form>
                <h1>Form:</h1>  
                <input type="text" name="username" onChange={handleInput}/>
                <input type="text" name="email" onChange={handleInput}/>
                <input type="text" name="age" onChange={handleInput}/>

            </form>
        </>
    )
}   

export default Form