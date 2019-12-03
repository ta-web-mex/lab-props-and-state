import React, { Component } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
import "./App.css";

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
    this.setState({
      count: this.state.count - 1
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          count={this.state.count}
        />
        <br />
        <Form
          handleChange={this.handleChange}
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
        <br />
      </div>
    );
  }
}

export default App;
