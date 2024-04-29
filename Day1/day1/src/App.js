import React from "react"; // Uncomment this line

import "./App.css";
import { User11 } from "./User.js";
// import "./index.js";
// import "./index.css";

function App() {
  const name = <h1>Pedro</h1>;
  const age = <h1>23</h1>;
  const email = <h1>yerukonduharitha@gmail.com</h1>;
  const names = ["haritha", "raj", "neel", "reddi", "hari"];

  const user = [
    { name: "Pedro", age: 21 },
    { name: "Haritha", age: 22 },
    { name: "Jock", age: "45" },
  ];

  return (
    <div className="App">
      {names.map((value) => {
        return <h1>{value}</h1>;
      })}

      {user.map((value) => {
        return <User11 name={value.name} age={value.age} />;
      })}

      <div>
        {name}
        {age}
        {email}
        {/* like this we have to call react component or function */}
        <User />
        <User />
        <User1 name="pedro" age={21} email="haritha@gmail.com" />
        <User1 />
        {age >= 21 ? <h1>Over age</h1> : <h1>under age</h1>}
        <h1 style={{ color: "orange" }}>This Has Color</h1>
      </div>
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h1>Pedro</h1>
      <h1>21</h1>
      <h1>haritha@gmail.com</h1>
    </div>
  );
};

const User1 = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
