import React from 'react'
import './App.css'
import Counter from './components/Counter'
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
  min = () => {
    this.setState({ count: this.state.count - 1 })
  }

  plus = () => {
    this.setState({ count: this.state.count + 1 })
  }

  changeInputName = (event) => {
    const name = event.target.value
    this.setState({ name })
  }
  changeInputSurname = (event) => {
    const surname = event.target.value
    this.setState({ surname })
  }

  changeInputAge = (event) => {
    const age = event.target.value
    this.setState({ age })
  }

  render() {
    return (
      <div className="App">
        <Counter min={this.min} plus={this.plus} count={this.state.count} />
        <Form
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
          changeInputName={this.changeInputName}
          changeInputSurname={this.changeInputSurname}
          changeInputAge={this.changeInputAge}
        />
      </div>
    )
  }
}

export default App
