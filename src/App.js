import React, { Component } from 'react'
import Counter from './components/Counter'
import Form from './components/Form'
import { thisTypeAnnotation, forInStatement, forStatement } from '@babel/types'

class App extends Component {
  /*-------------------------------------*/
  /*------------Initial State------------*/
  /*-------------------------------------*/
  state = {
    count: 0,
    form: {
      firstname: '',
      surname: '',
      age: undefined
    }
  }

  /*-------------------------------------*/
  /*------------Methods------------*/
  /*-------------------------------------*/

  //Funcion para incrementrar
  increment = () => {
    //Obtener el count del state
    let { count } = this.state
    //Para sumar el número en el contador
    count++
    //volverlo a meter en el state
    this.setState({ count })
  }

  //Funcion para decremento
  decrease = () => {
    //Obtener el count del state
    let { count } = this.state
    //Para restar el número en el contador

    if (count <= 0) {
      return count
    } else {
      count--
    }
    //volverlo a meter en el state
    this.setState({ count })
  }

  handleChange = e => {
    this.setState({
      //Guarda una copia del state, lo actualiza
      form: { ...this.state.form, [e.target.name]: e.target.value }
    })
  }

  render() {
    const { count, form } = this.state

    return (
      <div>
        <div>
          <Counter count={count} increment={this.increment} decrease={this.decrease} />
        </div>
        <div>
          <Form handleChange={this.handleChange} form={form} />
        </div>
      </div>
    )
  }
}

export default App
