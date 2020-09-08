import React, { Component } from "react";

export class ClassCounter extends Component {
  state = {
    count: 0,
  };

  export const UserCOntext = React.createContext();
  export const ChannelContext = React.createContext();

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="">
        <button onClick={this.incrementCount}>
          Count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
