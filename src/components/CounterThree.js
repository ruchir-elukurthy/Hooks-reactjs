import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return "Wrong choice";
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  //Parameter of dispatch is the action we are seding to the reducer function. the return value of reducer will be stored in count. The state in reducer is count that we are passing in. InitialState is the starting value that we are storing in count.
  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>Count2 : {countTwo}</div>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default CounterThree;
