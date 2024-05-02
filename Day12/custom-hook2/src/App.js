import React from "react";
import "./App.css";
import { useCount } from "./useCount";

function App() {
  const { count, increase, decrease, restart } = useCount();

  return (
    <div className="App">
      {count}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>
    </div>
  );
}

export default App;
