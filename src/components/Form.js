import React, { Component } from "react";

class Form extends Component {
  state = {
    form: {
      name: "",
      surname: "",
      age: ""
    }
  };
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h3>Form</h3>

        <input type="text" name="name" onChange={this.inputChange} />
        <p>{this.state.name}</p>

        <input type="text" onChange={this.inputChange} name="surname" />
        <p>{this.state.surname}</p>
        <input type="text" name="age" onChange={this.inputChange} />
        <p>{this.state.age}</p>
      </div>
    );
  }
}

export default Form;
