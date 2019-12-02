import React, {
  Component
} from "react";
import './App.css';
import Counter from "./components/Counter"
import Form from "./components/Form"


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {
  state = {
    count: 0,
    form: {
      name: "name",
      surname: "surname",
      age: "age"
    }
  }

  increment = () => {
    const { count } = this.state 
    this.setState({ count: count + 1 })
  }
  decrement = () => {
    const { count } = this.state 
    this.setState({ count: count - 1 })
  }
  handleChange = (e) => {
    const {form} = this.state
    const key = e.target.name;
    form[key] = e.target.value
    this.setState({ form })
  }

  render() {
    return ( 
      <div className="wrapper">
        <Counter count={this.state.count} increment={this.increment} decrement={this.decrement} / >
        <Form form={this.state.form} onChange={this.handleChange} />
      </div>
    )
  }
}

export default App;