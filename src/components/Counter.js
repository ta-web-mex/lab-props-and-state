import React from 'react';


function Counter(props){
	return(
	<div className="center">
		<h2>Count:</h2>
		<p>{props.count}</p>
		<div >
			<button className="buttons"  onClick={props.increment}>+</button>
			<button  className="buttons" onClick={props.decrement}>-</button>
		</div>
	</div>

	);
}


export default Counter;
