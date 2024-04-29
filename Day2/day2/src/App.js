import React, { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

  const increaseAge = () => {
    setAge(age + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleTextVisibility = () => {
    setShowText(!showText);
  };

  const toggleTextColor = () => {
    setTextColor(textColor === "black" ? "red" : "black");
  };
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const descrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <input type="text" onChange={handleInputChange} />
      {inputValue}

      <button onClick={toggleTextVisibility}>Show/Hide Text</button>
      {showText && <h1>Hi My Name Is Haritha</h1>}

      <button onClick={toggleTextColor}>Toggle Text Color</button>
      <h1 style={{ color: textColor }}>Hi My Name Is Haritha</h1>

      <button onClick={increase}>Increase</button>
      <button onClick={descrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
      {count}
    </div>
  );
}

export default App;
