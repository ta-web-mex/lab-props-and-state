import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter';

class App extends Component {

  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState(prevState => {
      return {
        ...prevState,
        form: {
          ...prevState.form,
          [name]: value
        }
      }
    })
  }

  render() {
    let {count, form: {name, surname, age}} = this.state

    return (<div className="App">
    <Counter
      counter={count}
      incremento={this.increment}
      decremento={this.decrement}
    />
      <Form
      name={name}
      surname={surname}
      age={age}
      handleChange={this.handleChange}
      />
    </div>)
  }
}

export default App;
