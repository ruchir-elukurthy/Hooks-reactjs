import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initalState = {
  loading: true,
  error: "",
  data: {},
};

const reducer = (state, action) => {
  switch (action.status) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        data: action.type,
      };
    case "FAILURE":
      return {
        loading: false,
        error: "Fetch was not a success",
        data: {},
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => dispatch({ type: response.data, status: "SUCCESS" }))
      .catch((error) => dispatch({ status: "FAILURE" }));
  }, []);
  return (
    <div>
      {state.loading ? "Loading.." : state.data.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
