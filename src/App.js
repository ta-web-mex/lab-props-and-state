import React, {Component} from 'react';
//import './App.css';

import Counter from './components/Counter';
import Form from './components/Form';
import { thisTypeAnnotation } from '@babel/types';

class App extends Component{
  
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }

  handleIncrement = () => {

/*     const {count} = this.state */

    this.setState({count: this.state.count +1})
    console.log(this.state.count)
  }

  handleDecrement = () => {

/*     const {count} = this.state */

    this.setState({count: this.state.count -1})
    console.log(this.state.count)
  }

  /* intenté deconstruir y fallé épicamente */

  handleInput=(e)=>{
    const {form} = this.state /* aquí me basé en lo que hicimos en clase, pero no me salió deconstruir sola */

    form[e.target.name] = e.target.value
    console.log(form)

    this.setState({...form})
  }

render(){

  /* aquí si me sale la deconstrucción pero no sé porqué aquí si y arriba no */
  const {count} = this.state

  return(
    <div className="App"> {/* me faltó poner this.handleIncrement, etc, por eso no me salía OJO! */}
      <Counter count = {count} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}/>
      <Form handleInput={this.handleInput} form={this.state.form}/>

    </div>
  )
}

}

export default App;
