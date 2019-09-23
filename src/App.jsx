import React, { Component } from 'react'
import Counter from './components/Counter'
import Form from './components/Form'

export default class App extends Component {
  // React Initial State Definition
  state = {
    count: 0,
    form: {
      name: undefined,
      lastName: undefined,
      age: undefined
    }
  }

  /******************************/
  /****** COUNTER METHODS ******/
  /****************************/
  increment = () => {
    let { count } = this.state
    count++
    this.setState({ count })
  }

  decrement = () => {
    let { count } = this.state
    count > 0 && count--
    this.setState({ count })
  }

  /******************************/
  /******* FORM METHODS ********/
  /****************************/
  handleChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    })
  }

  // Component View
  render() {
    // Destructuring the elements from the state
    const { count, form } = this.state
    // View itself
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center my-5'>
            <Counter counter={count} increment={this.increment} decrement={this.decrement} />
          </div>
          <div className='col-12 text-center my-5'>
            <Form handleChange={this.handleChange} formData={form} />
          </div>
        </div>
      </div>
    )
  }
}
