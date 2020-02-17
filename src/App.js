import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

class App extends Component {
  state = {
    count: 0,
    form:{
      name: '',
      surname: '',
      age: ''
    }
  }

  increment= () => {
    this.setState({count: this.state.count + 1})
  }

  decrement= () => {
    this.setState({count: this.state.count - 1})
  }

  handleInputs = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => {
      return{
        ...prevState,
        form:{
          ...prevState.form,
          [name]:value
        }
      }
    })
  }

  render(){
    const {name, surname, age}= this.state.form;
    return (
      <main className='App'>
        <Counter 
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />

      <Form 
        handleInputs={this.handleInputs}
        name={name}
        surname={surname}
        age={age}
      />
      </main>
    )
  }
}

export default App;
