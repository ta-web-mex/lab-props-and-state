import React, { Component } from 'react'
import Counter from './components/Counter'
import Form from './components/Form'
import { directive } from '@babel/types'

export default class App extends Component {

    ///////ESTADO INICIAL////////
    state = {
        count: 0,
        form: {
            firstName: '',
            surname: '',
            age: ''
        }
    }


    ///////METODOS///////////////
    increment = () => {
        //Extrayendo el count del state
        let { count } = this.state
        //Sumando 1 al state
        count++
        //Agregando count al state nuevo
        this.setState({ count })
    }

    decrement = () => {
        //Extrayendo el count del state
        let { count } = this.state
        //Restando 1 al state, poniedo una condicional
        if(count<=0){
            return 
        } else {
            count--
        }
        //Agregando count al state nuevo
        this.setState({ count })
    }

    handleChange = e => {
        this.setState({
            //Usamos una copia del state para que los datos no se borren
            form: {...this.state.form, [e.target.name]: e.target.value}
        })
    }

    //////////VIEW///////////////
    render() {
        const { count, form } = this.state
        return (
            <div className='columns is-centered'>
                <div className='column is-6'>
                <Counter count = {count} increment={this.increment} decrement= {this.decrement}/>
                <Form handleChange = {this.handleChange} form={form}/>
            </div>
            </div>
        )
    }
}
