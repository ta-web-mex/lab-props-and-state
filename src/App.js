import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'
import Form from './Form'

export default class App extends Component {
  state = {
    counter: 0,
    left: '',
    center: '',
    right: ''
  }
  add = () => {
    this.setState(prevState => {
      return {
        counter: (prevState.counter += 1)
      }
    })
  }
  sub = () => {
    this.setState(prevState => {
      if (prevState.counter > 0) {
        return {
          counter: (prevState.counter -= 1)
        }
      }
    })
  }

  inputChange = e => {
    const {
      target: { name, value }
    } = e
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <Counter counter={this.state.counter} add={this.add} sub={this.sub} />)
        <Form
          left={this.state.left}
          right={this.state.right}
          center={this.state.center}
          inputChange={this.inputChange}
        />
      </div>
    )
  }
}
