import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <h3>fname : {name.firstName}</h3>
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>lname : {name.lastName}</h3>
    </div>
  );
}

export default HookCounterThree;
