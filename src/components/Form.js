import React from 'react';

function Form(props) {
	return (
		<form action='' className='form-container'>
			<h2>Form</h2>
			<div>
				<input type='text' name='name' onChange={props.handleChange} />
				<p>{props.form.name}</p>
			</div>
			<div>
				<input type='text' name='surname' onChange={props.handleChange} />
				<p>{props.form.surname}</p>
			</div>
			<div>
				<input type='text' name='age' onChange={props.handleChange} />
				<p>{props.form.age}</p>
			</div>
		</form>
	);
}

export default Form;
