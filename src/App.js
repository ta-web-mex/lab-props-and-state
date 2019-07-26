import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./componets/Counter";
import Form from "./componets/Form";

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
      return { count: prevState.count + 1 };
    });
  };
  decrease = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  };
  camabioforma = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Counter
          value={this.state.count}
          increase={this.increase}
          decrease={this.decrease}
        />
        <Form
          camabioforma={this.camabioforma}
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
      </div>
    );
  }
}

export default App;
