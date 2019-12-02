import React, { Component } from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
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
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div id="container">
        <div id="counter">
          <Counter
            increment={this.increment}
            decrement={this.decrement}
            count={this.state.count}
          />
        </div>
        <div id="inputs">

          <h2>Form</h2>
          <Form
            handleChange={this.handleChange}
          />
          <div id="outputs">
            <p id="left">{this.state.name}</p>
            <p id="center">{this.state.surname}</p>
            <p id="right">{this.state.age}</p>
          </div>
        </div>

      </div>

    )

    // {/* Here should be magic! (props) */} 
  }
}


// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );


export default App;
