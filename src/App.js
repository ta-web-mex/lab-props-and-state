import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'

class App extends Component {
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  plus = () => {
    let { count } = this.state
    count++
    this.setState({ count })
  }

  minus = () => {
    let { count } = this.state
    count--
    this.setState({ count })
  }

  handleChange = () => {
    let { form } = this.state
    form.name = document.querySelector('#name').value
    form.surname = document.querySelector('#surname').value
    form.age = document.querySelector('#age').value
    this.setState({ form })
  }

  render() {
    const { count } = this.state
    const { form } = this.state
    return (
      <div className="App">
        <Counter plus={this.plus} minus={this.minus} count={count} />
        <Form name={form.name} surname={form.surname} age={form.age} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App