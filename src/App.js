import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'
import Form from './components/Form'

class App extends Component {
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  };

  handleIncrement = () => {
    this.setState(current => ({ ...current, count: current.count + 1 }))
  };

  handleDecrement = () => {
    this.setState(current => ({ ...current, count: current.count - 1 }))
  };

  handleFieldChange = (field) => (event) => {
    const value = event.target.value;

    this.setState(current => ({
      ...current,
      form: {
        ...current.form,
        [field]: value
      }
    }))
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter props={{
          count: this.state.count,
          handleIncrement: this.handleIncrement,
          handleDecrement: this.handleDecrement
        }} />

        <Form props={{
          form: this.state.form,
          handleFieldChange: this.handleFieldChange
        }}/>
      </div>
    );
  }
}

export default App;
