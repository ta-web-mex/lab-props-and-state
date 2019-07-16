import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  decrement = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count -= 1)
      };
    });
  };

  increment = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count += 1)
      };
    });
  };
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
