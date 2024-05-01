import { useState } from "react";

export const useToggle = (intialVal = false) => {
  const [state, setState] = useState(intialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

// prev represents the previous value of the state before the toggle operation. It is used within an arrow function to toggle the state value.
//  If the previous state was true, it becomes false, and if it was false, it becomes true.
