import React from 'react'

function Form({ handleInput, inputOne, inputTwo, inputThree }) {
  return(
    <>
      <h2>Form</h2>
      <form>
        <input name="inputOne" type="text" onChange={handleInput} />
        <p>{inputOne}</p>
        <input name="inputTwo" type="text" onChange={handleInput} />
        <p>{inputTwo}</p>
        <input name="inputThree" type="text" onChange={handleInput} />
        <p>{inputThree}</p>
      </form>
    </>
  )
}

export default Form