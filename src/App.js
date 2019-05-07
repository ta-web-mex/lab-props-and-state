import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter';
import Form from './components/Form';

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
    let count = this.state.count
    this.setState({count: count += 1})
  }

  decrement = e => {
    let counter = this.state.count
    this.setState({count: counter -=1})
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({...form})
  }

  render (){
    const counter = this.state.count
    const name = this.state.form.name
    const surname = this.state.form.surname
    const age = this.state.form.age
    return(
      <div className="App">
      <Counter increment={this.increment} decrement={this.decrement} />
      <p className="p__counter">{counter}</p>
      <Form  handleChange={this.handleChange}/>
        <div className="p__container">
          <p className="p__item">{name}</p>
          <p className="p__item">{surname}</p>
          <p className="p__item">{age}</p>
        </div>
      </div>
    )
  } 
}

export default App
