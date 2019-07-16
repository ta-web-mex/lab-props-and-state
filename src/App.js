import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'

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
    this.setState(prevState => {
      return {
        count: (prevState.count += 1)
      }
    })
  }

  decrement = () => {
    if(this.state.count > 0){
      this.setState(prevState => {
        return {
          count: (prevState.count -= 1)
        }
      })
    } else {
      return
    }
  }

  handleChange = (change) => {
      if(change.target.name === 'name'){
        this.setState({
        name: change.target.value
        })
      }
      if(change.target.name === 'surname'){
        this.setState({
        surname: change.target.value
        })
      }
      if(change.target.name === 'age'){
        this.setState({
        age: change.target.value
        })
      }
  }

  render(){
    return (
      <div className = "App">
        <Counter counter={this.state.count} inc={this.increment} dec={this.decrement}/>
        <Form handleChange={this.handleChange} name={this.state.name} surname={this.state.surname} age={this.state.age}/>
      </div>
    )
  }
}

export default App;
