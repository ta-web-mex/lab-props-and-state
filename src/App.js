import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";

class App extends Component {
	state = {
		count: 0,
		form: {
			name: "",
			surname: "",
			age: ""
		}
	};

	increment = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	decrement = () => {
		if (this.state.count > 0)
			this.setState({
				count: this.state.count - 1
			});
	};

	handleChange = event => {
		const form = { ...this.state.form };

		switch (event.target.name) {
			case "name":
				form.name = event.target.value;
				break;
			case "surname":
				form.surname = event.target.value;
				break;
			case "age":
				form.age = event.target.value;
				break;
			default:
				return;
		}
		this.setState({ form });
	};

	render() {
		return (
			<div className="App">
				<Counter count={this.state.count} increment={this.increment} decrement={this.decrement} />
				<Form name={this.state.form.name} surname={this.state.form.surname} age={this.state.form.age} handleChange={this.handleChange} />
			</div>
		);
	}
}

export default App;
