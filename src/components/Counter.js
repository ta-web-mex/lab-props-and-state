import React from 'react'

function Counter ({ count, increase, decrease }){
  return(
    <>
      <section>
        <h1>THIS IS REACT!</h1>
        <img src="https://www.meme-arsenal.com/memes/851c80f9fcc23dfb2a951de85e168c74.jpg"/>        
        <h2>{count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </section>
    </>
  )
}

export default Counter
