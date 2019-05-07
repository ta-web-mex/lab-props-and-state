import React, {Component} from 'react';

import './App.css';

import Counter from './components/Counter';

import Form from './components/Form'

class App extends Component  {
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }
incrementCount = e => {
  this.setState({
    count: this.state.count + 1
  });
}

decrementCount = e =>{
  this.setState({
    count: this.state.count - 1
  });
}

handleInput = e => {
  const {form} = this.state
  form[e.target.name] = e.target.value
  this.setState({...form})
  console.log(form)
}

render (){

  const {count,form} = this.state
  
  return (
    <div className="App">
    <h1>Count</h1>
    <h2>{count}</h2>
    <Counter incrementCount={this.incrementCount} decrementCount={this.decrementCount}/>
   <h1>Form</h1>
    <Form  UserInfo={this.UserInfo} handleInput = {this.handleInput}/>
    <p>{form.name}</p>
    <p>{form.surname}</p>
    <p>{form.age}</p>
    </div>
  );
}
}

export default App;
