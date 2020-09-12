import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay((mydisplay) => !mydisplay)}>
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
