import React, { Component } from "react";
import './App.css';
import Form from './components/Form'
import Counter from './components/Counter'

class App extends Component {
  state = {
    counter: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  mas = () => {
    let {counter} = this.state
    counter++
    this.setState({counter})
  }

  menos = () => {
    let {counter} = this.state
    counter--
    this.setState({counter})
  }

  handleChange = (elem) => {
    let {form} = this.state
    form.name = document.querySelector('.name').value 
    form.surname = document.querySelector('.surname').value
    form.age = document.querySelector('.age').value
    this.setState({form})

  }
  
  render() {
    const {counter} = this.state
    const {form} = this.state
    return (
      <div className="App">
        <Counter mas={this.mas} menos={this.menos} counter={counter}/>
        <Form change={this.handleChange} name={form.name} surname={form.surname} age={form.age}/>
      </div>
    )
  }
}

export default App;
