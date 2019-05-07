import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter';


class App extends Component {
  state = {
    form: {
      name: 'Ismael',
      surname: 'Francisco',
      age: 20
    },
    count: 0
  }

  handleChange = e => {
    if(e.target.name==='send') e.preventDefault()
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ ...form })
    console.log(e.target.value)
  }

  increment = e => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  decrement = e => {
    const { count } = this.state
    this.setState({ count: count - 1 })
  }

  render() {
    const { count } = this.state
    const {form} = this.state
    return (
      <div className="App">
        <Counter increment={this.increment} decrement={this.decrement} value={count} />
        <Form handleChange={this.handleChange} inputsValue={form} />
      </div>
    )
  }
}

export default App;
