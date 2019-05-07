import React, {Component} from 'react';
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
  increment = e => {
    this.setState({count: this.state.count+1})
  }
  decrement = e => {
    this.setState({count: this.state.count-1})
  }
  handleInput = e => {
  const {form} = this.state
  form[e.target.name] = e.target.value
  this.setState({...form})
  console.log(form)
  }
  render(){
    return (
      <div className="App">
        <Counter count={this.state.count} increment={this.increment} decrement={this.decrement}/>
        <Form form={this.state.form} handleInput={this.handleInput}/>
      </div>

    )
  }
}

export default App;
