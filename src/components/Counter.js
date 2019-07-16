import React,{Component} from 'react'

class Counter extends Component{
    state={
        count: 0
    }

    clickAdd = () => {
        this.setState({
            count: this.state.count+1
        })//el metodo setSate actualiza el estado en el DOM
    }
    clickSubstract = () => {
        if(this.state.count>0){this.setState({
            count: this.state.count-1
        })}
    }
    render(){
        return(
            <div>
                <h2>Counter</h2>
                <h2>{this.state.count}</h2>
                <button onClick={this.clickAdd}>+</button>
                <button onClick={this.clickSubstract}>-</button>
            </div>
        )
    }
} 

export default Counter