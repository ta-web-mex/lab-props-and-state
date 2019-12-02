import React from 'react';

function Counter(props) {
	return (
		<div className='counter-container'>
			<h2>Count: {props.count}</h2>
			<button onClick={props.decrement}>-</button>
			<button onClick={props.increment}>+</button>
		</div>
	);
}

export default Counter;
