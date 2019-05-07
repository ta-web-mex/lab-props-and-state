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

  increase = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  decrease = () => {
    const { count } = this.state
    count >0 ? this.setState({ count: count - 1 }) : this.setState({ count: 0})
    
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
        <Counter count={count} increase={this.increase} decrease={this.decrease} />
        <Form name={name} surname={surname} age={age} handleInput={this.handleInput} />
      </>
    );
  }
}
export default App;
