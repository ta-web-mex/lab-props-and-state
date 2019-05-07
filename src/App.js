import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

class App extends Component {
  state = {
    counter: 0,
    form: {
      inputOne: '',
      inputTwo: '',
      inputThree: ''
    }
  }

  handleClick = e => {
    if(e.target.name === 'minus' && this.state.counter > 0) this.setState(e => ({ counter: e.counter - 1 }))
    if(e.target.name === 'plus' && this.state.counter < 10) this.setState(e => ({ counter: e.counter + 1 }))
  }

  handleInput = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ ...form })
    console.log(form)
  }

  render() {
    const { counter, form } = this.state
    const { inputOne, inputTwo, inputThree } = form
    return(
      <div className="App">
        <Counter 
          handleClick={this.handleClick}
          counter={counter}
        />
        <Form 
          handleInput={this.handleInput} 
          inputOne={inputOne} 
          inputTwo={inputTwo} 
          inputThree={inputThree}
        />
      </div>
    )
  }
}

export default App;
