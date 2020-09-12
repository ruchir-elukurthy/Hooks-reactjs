import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect"); //This is only called once because our 2nd parameter of useEffect is [], so it runs the useEffect only once as it is not dependant on anything else.
    window.addEventListener("mouseover", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mouseover", logMousePosition);
    };
  }, []); //empty array means that it will call useEffect only one, or it does not depend on any variable.
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
