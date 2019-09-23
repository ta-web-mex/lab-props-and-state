import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Form from "./components/Form"
import './index.css'

class Dad extends Component {
  state = {
    counter: 0,
     form: {
         name: "",
         lastName: "",
         age: ""
     }
  };

  change = () =>{
      const name = document.getElementById('name').value
      const lastName = document.getElementById('lastName').value
      const age = document.getElementById('age').value
      
      const form ={
          name,
          lastName,
          age
      }
      this.setState({
    form
})
  }



  increment = () => {
    let { counter } = this.state;
    counter++;
    this.setState({ counter });
  };

  decrement = () => {
    let { counter } = this.state;
    if (counter <= 0) return;
    counter--;
    this.setState({ counter });
  };

 

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <Counter decrement={this.decrement} increment={this.increment} counter={counter} />
        <Form change={this.change} name={this.state.form.name} lastName={this.state.form.lastName} age={this.state.form.age} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Dad />, rootElement);
