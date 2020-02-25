import React from 'react'

export default ({props}) => {
  return (
    <div className={'center'}>
      <button
        onClick={props.handleDecrement}
        className={'counterBtn decrement center'}> - </button>

      <h2 style={{ padding: '0 10px', fontFamily: 'monospace', fontSize: 32 }}>{
        props.count.toString().padStart(2, '0')
      }</h2>

      <button
        onClick={props.handleIncrement}
        className={'counterBtn increment center'}> + </button>
    </div>
  )
}
