import React from 'react';

function Form(props){
	return(
		<div className="center">
			<h2>Form:</h2>
			<div className="forms-input">
				<div className="individual-form">
					<input onChange={props.onChange} name="name" value={props.form.name}/>
					<p>{props.form.name}</p>
				</div>
				<div className="individual-form">
					<input onChange={props.onChange} name="surname" value={props.form.surname}/>
					<p>{props.form.surname}</p>
				</div>
				<div className="individual-form">
					<input onChange={props.onChange} name="age" value={props.form.age} />
					<p>{props.form.age}</p>

				</div>
			</div>
		</div>
	)
}

export default Form;
