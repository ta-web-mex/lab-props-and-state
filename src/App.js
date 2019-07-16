import React, {Component} from 'react';
import Counter from './components/Counter'
import Form from './components/Form'
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  add = () => {
    this.setState(prevState => {
      return {counter:(prevState.counter + 1)}
    })
  }

  sub = () => {
    this.setState(prevState => {
      return {counter: (prevState.counter - 1)}
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <Counter counter={this.state.counter} add={this.add} sub={this.sub}/>
          <Form handleChange={this.handleChange} name={this.state.name} surname={this.state.surname} age={this.state.age}/>
        </div>
      </div>
    )
  }
}

export default App;
