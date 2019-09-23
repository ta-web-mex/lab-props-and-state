import React from 'react';

import Counter from './components/Counter';
import Form from './components/Form';

import './App.css';

class App extends React.Component {
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  };

  displayInput = e => {
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const age = document.querySelector('#age').value;

    const form = {
      name,
      surname,
      age
    };

    this.setState({
      form
    });
  };

  add = () => {
    let { count } = this.state;
    count++;
    this.setState({ count });
  };

  substract = () => {
    let { count } = this.state;
    count--;
    this.setState({ count });
  };

  render = () => (
    <div>
      <Counter count={this.state.count} add={this.add} substract={this.substract} />
      <Form
        name={this.state.form.name}
        surname={this.state.form.surname}
        age={this.state.form.age}
        displayInput={this.displayInput}
      />
    </div>
  );
}

export default App;
