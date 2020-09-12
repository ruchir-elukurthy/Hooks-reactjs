import React, { Component } from "react";
import ParentComponent from "./components/DocTitleOne";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
      </div>
    );
  }
}

export default App;
