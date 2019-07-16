import React, {Component} from 'react'

class Form extends Component {
    inputChange = event => {
        this.setState({
            text: event.target.value
        })
    }
    inputChangeT=event => {
        this.setState({
            text: event.target.value
        })
    }
    render(){
        return(
            <div>
                <input 
                type="text"
                onChange={this.inputChange}
                value={this.inputChange.text}
                />
                <p>{this.inputChange.text}</p>
                <input
                type="text"
                onChange={this.inputChangeT}
                value={this.inputChangeT.text}
                />
                <p></p>
                <input 
                type="text"
                onChange={this.inputChangeT}
                value={this.inputChangeT.text}/>
                <p></p>
            </div>
        )
    }
}
export default Form