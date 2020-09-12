import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 2);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      ++i;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <div>
        <button onClick={incrementOne}>CountOne : {counterOne}</button>
      </div>
      <span>{isEven ? "Even" : "Odd"}</span>
      <div>
        <button onClick={incrementTwo}>CountTwo : {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
