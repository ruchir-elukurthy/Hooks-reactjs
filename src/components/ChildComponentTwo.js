import React from "react";

function ChildComponentTwo(props) {
  return (
    <div>
      {console.log("World")}
      <button onClick={props.decrement}>Click</button>
      <p>Age :{props.age}</p>
    </div>
  );
}

export default React.memo(ChildComponentTwo);
