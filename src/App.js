import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'

class App extends Component {
  state = {
    count: 0,
    counter: '',
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.form)
  }
  handleInput = e => {
    const { name, value } = e.target
    const form = { ...this.state.form, [name]: value }
    this.setState({form})
  }

  handleSum = e => {
    const count = this.state.count + 1
    this.setState({count})
  }
  handleMinus = e => {
    let { count } = this.state
    count = this.state.count - 1
    this.setState({count})
    
  }
  
  render(){
    return (
      <div className="App">
      <Counter count = { this.state.count } handleSum = {this.handleSum} handleMinus = { this.handleMinus }/>
      <Form 
        name        = { this.state.form.name }
        surname     = { this.state.form.surname }
        age         = { this.state.form.age }
        handleInput = { this.handleSubmit }
      />
    </div>
  )
}
}

export default App;
