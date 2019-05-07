import React, { Component } from 'react';
import Counter from './components/Counter'
import Form from './components/Form'
import './App.css'

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
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  decrement = () => {
    const { count } = this.state
    this.setState({ count: count - 1 })
  }

  handleInput = (e) => {
    const { form } = this.state
    const { name, value } = e.target
    form[name] = value
    this.setState({ form })
  }

  render() {
    const { count } = this.state
    const { name, surname, age } = this.state.form

    return (
      <>
        <Counter count={count} increment={this.increment} decrement={this.decrement} />
        <Form name={name} surname={surname} age={age} handleInput={this.handleInput} />
      </>
    );
  }
}
export default App;
