import './App.css'
import React, { Component } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";

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
      this.setState({
        count: this.state.count + 1
      });
    };
  
    decrement = () => {
      this.setState({
        count: this.state.count - 1
      });
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    render() {
      return(
        <>

          <Counter 
          increment={this.increment}
          decrement={this.decrement}
          count={this.state.count} />
        <br/>
        <br/>
        <h2>Form:</h2>

        <input
          className="name"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          type="text"
          value={this.state.name}
        />
        
        <input
          className="surname"
          name="surname"
          placeholder="Surname"
          onChange={this.handleChange}
          type="text"
          value={this.state.surname}
        />
      
        <input
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
          type="text"
          value={this.state.age}
        />

        <br/>

        <Form handleChange={this.state.name}/>
        <Form handleChange={this.state.surname}/>
        <Form handleChange={this.state.age}/>


      </>
    
      )
  }

  };

export default App;
