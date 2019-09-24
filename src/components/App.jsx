import React, { Component } from 'react'
import Counter from './Counter'
import Form from './Form'

export default class App extends Component {
  //------- Initial state
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: undefined
    }
  }

  //-------- Methods

  increment = () => {
    //Extrayendo count del state
    let { count } = this.state
    //Sumando 1 al state
    count++
    //Metiendo count al state de nuevo
    this.setState({ count })
  }

  decrement = () => {
    let { count } = this.state
    if (count <= 0) {
      return count
    } else {
      count--
    }
    this.setState({ count })
  }

  handleChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    })
  }

  render() {
    const { count, form } = this.state

    return (
      <div>
        <Counter count={count} increment={this.increment} decrement={this.decrement} />
        <Form handleChange={this.handleChange} form={form} />
      </div>
    )
  }
}
