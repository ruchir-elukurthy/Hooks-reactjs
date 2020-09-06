import React, { useState } from "react";

function HookCounterfour() {
  const [item, setItem] = useState([]);
  const addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Click</button>
      <ul>
        {item.map((items) => (
          <li>{items.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterfour;
