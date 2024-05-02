import { useState } from "react";

export const useCount = (intial = 0) => {
  const [count, setCount] = useState(intial);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  return { count, increase, decrease, restart };
};
