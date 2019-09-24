
import React, { Component } from "react";
// import './App.css';

import Counter from "./components/Counter";
import Form from "./components/Form";

class App extends Component {
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }


  increment = () => {
    let { count } = this.state;
    count++;
    this.setState({ count });
  };

  decrement = () => {
    let { count } = this.state;
    if (count <= 0) return;
    count--;
    this.setState({ count });
  };


  handleChange = e => {
    this.setState({
      form: { ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const { count, form } = this.state;
    return (
      <div className="columns is-desktop is-centered">
        <div className="column is-10">
        <div className="App">
        <Counter decrement={this.decrement} increment={this.increment} counter={count} />
        <Form  handleChange={ this.handleChange } form={ form } />
      </div>
        </div>
      </div>
    );
  }
}


export default App;


