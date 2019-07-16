import React from "react";

const Counter = props => {
	return (
		<div>
			<h2>Counter</h2>
			<h2>{props.count}</h2>
			<button
				style={{
					width: "30px",
					height: "30px"
				}}
				onClick={props.decrement}
			>
				-
			</button>
			<button
				style={{
					width: "30px",
					height: "30px"
				}}
				onClick={props.increment}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
