import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {console.log("Hello")}
      <button onClick={props.increment}>Click</button>
      <p>Count :{props.count}</p>
    </div>
  );
}

export default React.memo(ChildComponent);
