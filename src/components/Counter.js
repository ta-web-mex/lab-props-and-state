import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  sum = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count += 1)
      };
    });
  };

  min = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count -= 1)
      };
    });

    if (this.state.count < 1) {
      this.setState(prevState => {
        return {
          count: 0
        };
      });
    }
  };
  render() {
    return (
      <div>
        <h2>
          <p> {this.state.count} </p>
        </h2>
        <button onClick={this.min}>-</button>
        <button onClick={this.sum}>+</button>
      </div>
    );
  }
}
