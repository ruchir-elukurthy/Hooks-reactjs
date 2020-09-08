import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect-update");
    document.title = `You have clicked ${count}`;
  }, [count]); //If the value in the array doesnot change between renders then the useEffect is simply noy run. This means that count is like an if statement where if count changes then only run the useEffect. useEffect is a way of using component did mount and component did update in the same function.
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((counter) => counter + 1)}>
        Click {count}
      </button>
    </div>
  );
}

export default HookCounterOne;
