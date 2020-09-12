import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";
import ChildComponentTwo from "./ChildComponentTwo";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);

  const updateCount = useCallback(() => {
    setCount((mycount) => mycount + 1);
  }, [count]);

  const updateAge = useCallback(() => {
    setAge((myage) => myage - 1);
  }, [age]);

  return (
    <div>
      <ChildComponent count={count} increment={updateCount} />
      <ChildComponentTwo age={age} decrement={updateAge} />
    </div>
  );
}

export default React.memo(ParentComponent);
