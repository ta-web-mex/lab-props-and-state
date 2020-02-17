import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form'


class App extends Component{
  state = {
    count: 0,
    form: {
      name:'',
      surname:'',
      age:''
    }
  }

  handleCounter = (value)=>{
    this.setState({count: this.state.count + value})
  }

  handleInput = (e) => {
const {name, value} = e.target
this.setState(prevState => {
 return{ 
   ...prevState, 
  form:{
    ...prevState.form,
    [name]: value
  }
}
})
  }
  render() {
    const {form} = this.state
    const {name, surname, age} = form
    return (
      <div class='card'>
        <Counter counter={this.state.count} handleCounter={this.handleCounter} />
        <Form 
        name={name} 
        surname={surname}
        age= {age}
        handleInput = {this.handleInput}
        />
      </div>
    )
  }
}

export default App;
