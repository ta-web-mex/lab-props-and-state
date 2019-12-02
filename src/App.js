import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class App extends Component {
  state = {
    count: 0,
    form: {
      name: "Pepo",
      surname: "Pepex",
      age: "25"
    }
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <Counter
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          count={this.state.count}
        />
        <br />
        <Form
          handleInput={this.handleInput}
          nameValue={this.state.name}
          surnameValue={this.state.surname}
          ageValue={this.state.age}
        />
      </div>
    );
  }
}

export default App;
