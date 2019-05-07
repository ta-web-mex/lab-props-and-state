import React from 'react'

function Form({ handleChange, inputsValue }) {
    return (
        <>
            <form onSubmit={handleChange}>
                <input type="text" name='name' placeholder='Name' onChange={handleChange} />
                <input type="text" name='surname' placeholder='Surname' onChange={handleChange} />
                <input type="number" name='age' placeholder='Age' onChange={handleChange} />
                <input type='submit' value='Send' name='send' />
            </form>
            <p>{inputsValue}</p>
            <p>{inputsValue}</p>
            <p>{inputsValue}</p>
        </>
    )
}

export default Form