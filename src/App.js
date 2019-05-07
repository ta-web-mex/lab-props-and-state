import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    count: 0,
    form: {
      name: "",
      surname: "",
      age: ""
    }
  };

  increment = e => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  decrement = e => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };

  handleChange = e => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ ...form });
    console.log(form)
  };

  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Form handleChange={this.handleChange} 
          form={this.state.form}
        />
      </div>
    );
  }
}

export default App;
