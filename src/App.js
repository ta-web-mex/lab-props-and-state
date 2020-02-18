import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Contador from './components/Counter'
import Form from './components/Form'

class App extends Component{



  state ={
   contador:0,
   form:{
     name:'',
     surname:'',
     age:''
   }
 }

incremento = () => {
  this.setState({ contador: this.state.contador + 1 })
}
decremento = () => {
  this.setState({ contador: this.state.contador - 1 })
}

manejadoDeInputs = event=>{
  const {name,value}= event.target
  this.setState(prevState =>{
    return {
      ...prevState,
      form:{
        ...prevState.form,
        [name]:value
      }

      
      
    }
  })
}
  
  render (){
    return (
      <div>
      <Contador contador= {this.state.contador}
                incremento={this.incremento}
                decremento= {this.decremento} />
      <Form name={this.state.form.name}
            surname={this.state.form.surname}
            age={this.state.form.age}
            manejadoDeInputs ={this.manejadoDeInputs} />
        
      </div>

    )
  }
  
}
export default App;