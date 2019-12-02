import React, { Component } from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
import './App.css';

class App extends Component {
	state = {
		count: 0,
		form: {
			name: '',
			surname: '',
			age: ''
		}
	};

	increment = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	decrement = () => {
		this.setState({
			count: this.state.count - 1
		});
	};

	handleChange = (e) => {
		e.persist();
		this.setState((prevState) => {
			return {
				...prevState,
				form: {
					...prevState.form,
					[e.target.name]: e.target.value
				}
			};
		});
	};

	render() {
		return (
			<div className='container'>
				<Counter count={this.state.count} increment={this.increment} decrement={this.decrement} />
				<Form form={this.state.form} handleChange={this.handleChange} />
			</div>
		);
	}
}

export default App;
