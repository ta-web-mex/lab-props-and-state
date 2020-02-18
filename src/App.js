import React, {Component} from 'react';
import './App.css';
import Counter from  './components/Counter'
import Form from './components/Form'

class App extends Component{
  state = {
    counter: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  increment = () =>{
    this.setState({counter: this.state.counter + 1})
  }
  decrement = () =>{
    this.setState({counter: this.state.counter -1})
  }
  handleChange = e =>{
    console.log(e)
    const { name, value } = e.target
    this.setState(prevState =>{
      return {
        ...prevState,
        form:{
          ...prevState.form,
          [name]: value
        }
      }
    })
  }

  render (){
    const {form} = this.state
    const {name, surname, age} = form
    return (
      <main className = "App">
      <div className="Counter">
      <Counter
      counter={this.state.counter}
      increment={this.increment}
      decrement={this.decrement}
      /> 
      </div>
      <h2 className="form">Form</h2>
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
