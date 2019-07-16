import React from "react";

const Form = props => {
	return (
		<div
			style={{
				marginTop: "300px"
			}}
		>
			<h2>Form</h2>
			<form
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly"
				}}
			>
				<div>
					<input type="text" name="name" value={props.name} onChange={props.handleChange} />
					<p>{props.name}</p>
				</div>
				<div>
					<input type="text" name="surname" value={props.surname} onChange={props.handleChange} />
					<p>{props.surname}</p>
				</div>
				<div>
					<input type="text" name="age" value={props.age} onChange={props.handleChange} />
					<p>{props.age}</p>
				</div>
			</form>
		</div>
	);
};

export default Form;
