import React, { Component } from "react";
import CounterOne from "./components/DataFetchingTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterOne />
      </div>
    );
  }
}

export default App;

//  { <UserContext.Provider value={"Ruchir"}>
//     <ChannelContext.Provider value={"Elukurthy"}>
//       <UseContext />
//     </ChannelContext.Provider>
//   </UserContext.Provider>
