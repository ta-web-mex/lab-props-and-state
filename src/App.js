import React, {Component} from 'react';
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
  }

  increment = () => {
    let { count } = this.state;
    count++;
    this.setState({ count });
  };

  decrement = () => {
    let { count } = this.state;
    if (count <= 0) return;
    count--;
    this.setState({ count });
  };

  displayInput = () => {
    const name = document.querySelector('#name').value
    const surname = document.querySelector('#surname').value
    const age = document.querySelector('#age').value
    this.setState({name, surname, age})
  }

  render(){
    return (
      <div className="App">
        <Counter menos={this.decrement} mas={this.increment} count={this.state.count} />
        <Form inputDisplay={this.displayInput} name={this.state.name} surname={this.state.surname} age={this.state.age} />
      </div>
    );
  }
}

export default App;
