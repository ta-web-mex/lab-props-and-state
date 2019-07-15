import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

class App extends Component{
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count += 1)
      }
    })
  }

  decrement = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count -= 1)
      }
    })

    if(this.state.count < 1) {
      this.setState({count: 0})
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
       <Counter counter={this.state.count} sum={this.increment} min={this.decrement}/>
       <Form  handleChange={this.handleChange} name={this.state.name} surname={this.state.surname} age={this.state.age}/>
      </div>
    );
  }

}

export default App;
