import React, { Component } from 'react'
import './App.css'
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

  increment = e => {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
    console.log(this.state.count)
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ ...form })
    console.log(form)
  }

  render() {
    return (
      <>
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Form form={this.state.form} handleChange={this.handleChange} />
      </>
    )
  }
}

export default App
