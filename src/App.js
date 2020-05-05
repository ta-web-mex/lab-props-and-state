import React, { useState } from 'react'
import logo from './logo.svg'
import Counter from './components/Counter'
import './App.css'
import Form from './components/Form'

class App extends React.Component {
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: '',
    },
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  handleChangeName = (event) => {
    const name = event.target.value
    this.setState({
      name,
    })
  }

  handleChangeSurname = (event) => {
    const surname = event.target.value
    this.setState({
      surname,
    })
  }

  handleChangeAge = (event) => {
    const age = event.target.value
    this.setState({
      age,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="mainCounter">
          <Counter increment={this.increment} decrement={this.decrement} count={this.state.count} />
        </div>
        <div className="mainForm">
          <Form
            handleChangeName={this.handleChangeName}
            name={this.state.name}
            handleChangeSurname={this.handleChangeSurname}
            surname={this.state.surname}
            handleChangeAge={this.handleChangeAge}
            age={this.state.age}
          />
        </div>
      </div>
    )
  }
}

export default App
