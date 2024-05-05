import React from "react";
import "./App.css";
import { Person } from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="haritha@gmail.com"
        age={21}
        isMarried={false}
        friends={["hari", "raj", "jessu"]}
      />
    </div>
  );
}

export default App;
