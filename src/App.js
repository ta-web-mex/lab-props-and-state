import Counter from "./components/Counter";
import Form from "./components/Form";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    form: {
      name: "",
      surname: "",
      age: ""
    }
  };
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Counter
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          count={this.state.count}
        />
        <br />
        <Form
          handleChange={this.handleChange}
          name={this.state.form.name}
          surname={this.state.form.surname}
          age={this.state.form.age}
        />
      </>
    );
  }
}

export default App;
