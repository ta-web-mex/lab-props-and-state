import React,{Component} from 'react';
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'

class App extends Component{
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }
  more = () =>{
    let{count}=this.state 
    count ++
    this.setState({count})
  }
  less = () => {
    let{count}=this.state 
    if(count > 0)
    count --
    this.setState({count})
  }

  change = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }
 

  render(){
    const count = this.state.count;
  return (
    
    <div className="App" id="main">
      <Counter more={this.more} less={this.less} count = {count}/>
      <Form change={this.change} name={this.state.name} surname={this.state.surname} age={this.state.age}/>
    </div>
  );
}
}

export default App;
