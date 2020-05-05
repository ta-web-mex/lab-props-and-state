import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    message: '',
  }
  changeMessage = (e) => {
    const message = e.target.value

    this.setState({
      message,
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.changeMessage} />
        <p>{this.state.message}</p>
      </div>
    )
  }
}
