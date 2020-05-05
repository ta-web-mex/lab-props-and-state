import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'

class App extends Component {
  state = {
    counter: 0,
    form: {
      name: '',
      surname: '',
      age: '',
    },
  }

  clickHandlerPlus = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  clickHandlerMinus = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  render() {
    return (
      <div className="App">
        <Counter
          counter={this.state.counter}
          clickHandlerMinus={this.clickHandlerMinus}
          clickHandlerPlus={this.clickHandlerPlus}
        />
        <br />
        <br />
        <div className="forma">
          <Form name={this.state.form.name} />
          <Form surname={this.state.form.surname} />
          <Form age={this.state.form.age} />
        </div>
      </div>
    )
  }
}

export default App
