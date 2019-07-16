import React, {Component} from 'react'
import Form from './components/Form'
import Counter from './components/Counter'
import './App.css';



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
      this.setState(prevState =>{
      return {
        count:(prevState.count +=1)
      }
      })
  }


  decrement =() =>{
      this.setState(prevState =>{
       return{
        count:(prevState.count -=1)
       }
      })

      if(this.state.count <= 0){
        this.setState({count: 0})
      }
  }

  handleChange= event =>{
    const {
       target: {name,value}
    } = event
    this.setState({
        [name]: value 
    })
}

render(){
 return( 
  <div>
  <Counter count= {this.state.count} inc={this.increment} dec={this.decrement}/>
  <Form change = {this.handleChange} name={this.state.name}  surname={this.state.surname}
  age={this.state.age}
  />
</div>
)
}
}




export default App;
