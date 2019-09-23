import React, { Component } from 'react'
import './App.css'
import Counter from './component/Counter'
import Form from './component/Form'

class App extends Component {
  state = {
    counter: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

  mas = () => {
    let { counter } = this.state
    counter++
    this.setState({ counter })
  }
  menos = () => {
    let { counter } = this.state
    if (counter <= 0) return
    counter--
    this.setState({ counter })
  }

  render() {
    const { counter } = this.state
    return(
    <div>
      <Counter menos={this.menos} mas={this.mas} counter={counter} />
      <h1>Form</h1>
      <Form handleChange = {this.handleChange} name={this.state.name} surname={this.state.surname} age={this.state.age}/>
    </div>
    )
  }
}

export default App
