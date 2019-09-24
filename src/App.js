import React, {Component} from 'react';
import Counter from './components/Counter'
import Form from './components/Form'
import './App.css'

class App extends Component{
  state = {
    counter: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  };
  mas = () => {
    let { counter } = this.state;
    counter++;
    this.setState({ counter });
  };
  menos = () => {
    let { counter } = this.state;
    if (counter <= 0) return;
    counter--;
    this.setState({ counter });
  };
  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render(){
    const { counter } = this.state;
    return (
      <div>
      <Counter menos={this.menos} mas={this.mas} counter={counter}/>
      <Form handleChange={this.handleChange} name={this.state.name} surname={this.state.surname} age={this.state.age}/>
      </div>
    )
  }
}

export default App;
