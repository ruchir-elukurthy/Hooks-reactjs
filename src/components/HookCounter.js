import React, { useState } from "react";

function HookCounter() {
  /* 
        For this example we use useState tyope of hook, which allows us to use state that we use in class with a functional component to increase the speed of execution of code.
    */
  const [count, setCount] = useState(0); //the first var in [is set as 0 in RHS which is the field that we use in state and the second var is the method in case we can to increment it.]

  //state value is neveer used on rerenders. When set count is called, it takes in an argument coiunt is increment , the setCOunt will cause the component to rerender.
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

//only use hooks at the top level and not in loops, conditons and nested functions and call them in react functional components and not ant regular js fuction.
export default HookCounter;
