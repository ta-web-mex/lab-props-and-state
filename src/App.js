import logo from './logo.svg'
import './App.css'

import React, { Component } from 'react'
import Counter from './components/Counter'
import Form from './components/Form'

export default class App extends Component {
  state = {
    counter: 0,
    form: {
      text1: '',
      text2: '',
      text3: ''
    }
  }

  increment = () => {
    let { counter } = this.state
    counter++
    this.setState({ counter })
  }

  decrement = () => {
    let { counter } = this.state
    if (counter <= 0) return
    counter--
    this.setState({ counter })
  }

  handleChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div class="container">
        <Counter increment={this.increment} decrement={this.decrement} counter={counter} />

        <Form handleChange={this.handleChange} formData={this.state.form} />
      </div>
    )
  }
}
