import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import Counter from "./components/Counter"

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
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleChange = (e) => {
    const {target:{name, value}} = e
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      } 
    })
  }

  render() {
    return (
      <div id="container">
        <Counter count={this.state.count} increment={this.increment} decrement={this.decrement}/>
        <Form 
          handleChange={this.handleChange} 
          input1={this.state.form.name}
          input2={this.state.form.surname}
          input3={this.state.form.age}
          />
      </div>
    );
  }
}

export default App;
