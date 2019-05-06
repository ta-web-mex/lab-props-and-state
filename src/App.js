import React, { Component } from 'react';

import Counter from './components/Counter';
import Form from './components/Form';

class App extends Component {
  state = {
    counter: 0,
    name: '',
    surname: '',
    age: ''
  };

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { counter, name, surname, age } = this.state;
    const { increment, decrement, handleChange } = this;
    const userInfo = {
      name,
      surname,
      age
    };

    return (
      <>
        <Counter counter={counter} increment={increment} decrement={decrement} />
        <Form userInfo={userInfo} handleChange={handleChange} />
      </>
    );
  }
}

export default App;
