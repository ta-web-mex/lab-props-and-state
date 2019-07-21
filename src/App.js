import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";

class App extends Component {
  state = {
    count: 0,
    form: {
      name: "",
      surname: "",
      age: ""
    }
  };

  increase = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  decrease = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  };

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Testing app</h1>
          <p> {this.state.count} </p>
          <Counter increase={this.increase} decrease={this.decrease} />
        </div>

        <Form
          inputChange={this.inputChange}
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
      </div>
    );
  }
}

export default App;
