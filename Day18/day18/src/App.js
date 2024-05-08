import React, { useEffect } from "react";
import { useState } from "react";
export default function App() {
  // use of useState hook is to display the content or modify the content on the screen  use state hook is used to store the data.
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  // useEffect is used to call the function when the page is loaded.

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1> {advice}</h1>
      <button onClick={getAdvice}>Submit</button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> piece of advices.
    </p>
  );
}
