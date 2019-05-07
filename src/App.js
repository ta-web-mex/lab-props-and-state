import React, { Component } from "react";
//import logo from "./logo.svg";
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

  handleInput = e => {
    const { name, value } = e.target;
    const form = { ...this.state.form, [name]: value };
    this.setState({ form });
  };

  decrement = () => {
    const count = this.state.count - 1;
    this.setState({ count });
  };

  increment = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  render() {
    return (
      <>
        <Counter
          count={this.state.count}
          decrement={this.decrement}
          increment={this.increment}
        />
        <Form
          name={this.state.form.name}
          surname={this.state.form.surname}
          age={this.state.form.age}
          handleInput={this.handleInput}
        />
      </>
    );
  }
}

export default App;
