import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'

class App extends React.Component{
  state = { 
    counter: 0,
    form: {
      name: '',
      surname: '',
      age: '',
    }
  }
  more = () => {
    let{counter} = this.state;
    counter++;
    this.setState({counter})
  }
  //en arrow function, el this.state toma el this padre y no el this de la función
  //en function normal this.state, toma el this interno y no el del papá
  less = () => {
    let{counter} = this.state;
    if (counter<=0) return; 
    counter--;
    this.setState({counter})
  }
  handleChange = () => {
    const name = document.querySelector('#name').value
    const surname = document.querySelector('#surname').value
    const age = document.querySelector('#age').value

    const form = {name, surname, age}
    this.setState({form})
  }
  /* jsx */
  render(){
    return(
      <div className='App'>
        <Counter less={this.less} more={this.more} counter={this.state.counter}/>
        <Form name={this.state.form.name} surname={this.state.form.surname} age={this.state.form.age} handleChange={this.handleChange}/>
      </div>

    )
  }
}

export default App;
/* App() {
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
} */


