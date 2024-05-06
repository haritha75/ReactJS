import React from "react";
import { Person, Country } from "./Person";

function App() {
  const getAge = (name: string): number => {
    return 21;
  };
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="haritha@gmail.com"
        age={21}
        isMarried={false}
        friends={["hari", "raj", "jessu"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
