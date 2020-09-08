import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <h2>{name.firstName}</h2>
      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <div>{name.lastName}</div>
    </div>
  );
}

export default HookCounterThree;
