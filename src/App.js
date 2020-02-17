import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'
// import { render } from 'react-dom';

class App extends Component{
  state={
    count:0,
    form: {
      name:'',
      surname:'',
      age:''
    }
  }

  increment = () => { 
    this.setState({count:this.state.count+1})
  }

  decrement = () => {
    this.setState({count:this.state.count-1})
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState(prevState => {
      return {
        ...prevState,
        form: {
          ...prevState.form,
          [name]: value
        }
      }
    })
  }


  render(){
    const {form}=this.state
    const {name,surname,age}=form
    return (
      <main className = "container">
        <Counter
        count={this.state.count} 
        increment={this.increment}
        decrement={this.decrement}
       
        />
        <Form
          name={name}
          surname={surname}
          age={age}
          handleChange={this.handleChange}
        />
      </main>
    )
  }
}

export default App;
