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
    if (event.target.name === "name") {
      let value = event.target.value;
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          name: value
        }
      }));
    } else if (event.target.name === "surname") {
      let value = event.target.value;

      this.setState(prevState => {
        return {
          form: {
            ...prevState.form,
            surname: value
          }
        };
      });
    } else if (event.target.name === "age") {
      let value = event.target.value;

      this.setState(prevState => {
        return {
          form: {
            ...prevState.form,
            age: value
          }
        };
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Testing app</h1>
          <p> {this.state.count} </p>
          <Counter increase={this.increase} decrease={this.decrease} />
        </div>

        <Form inputChange={this.inputChange} form={this.state.form} />
      </div>
    );
  }
}

export default App;
