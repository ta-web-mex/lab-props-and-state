import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import Counter from  "./components/Counter"
class App extends Component {
    state ={
        count:0,
        form: {
          name: '',
          surname: '',
          age: ''
        }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    increment = () => {
        let {count} = this.state
        count++
        this.setState({count})
    }

    decrement = ()=> {
        let {count} = this.state
        if(count<=0) return
        count --
        this.setState({count})
    }


  render() { 
      const {count} = this.state
return(
        <div className="App">
          <div className="counter">
            <Counter decrement = {this.decrement} increment ={this.increment} count = {count}/>
            </div>
            <h1>Form</h1>
            <Form handleChange = {this.handleChange} name={this.state.name} surname={this.state.surname} age={this.state.age}/>
        </div>
    )
  }
}

export default App;