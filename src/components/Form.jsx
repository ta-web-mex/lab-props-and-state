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
            <div className="d-flex justify-content-center mx-md-n5">
                <p className='px-md-5'>{inputsValue.name}</p>
                <p className='px-md-5'>{inputsValue.surname}</p>
                <p className='px-md-5'>{inputsValue.age}</p>
            </div>

        </>
    )
}

export default Form