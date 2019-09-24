import React, { Component } from 'react'
import Counter from './components/Counter'
import Form from './components/Form'

export default class App extends Component {

  state = {
    count:0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  increment = () => {
    let {count} = this.state
    count++
    this.setState({count})
  }

  decrement = () => {
    let {count} = this.state
    count > 0 && count--
    this.setState({count})
  }

  handleChange = e => {
    this.setState({
      form: {...this.state.form,[e.target.name]: e.target.value}
    })
  }

  render() {
    const {count, form} = this.state
    return (
      <div className="col m-auto">
      <div className="row" height="100vh">
          <Counter count={count} increment={this.increment} decrement={this.decrement}/>

          <Form form={form} handleChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}
