import React from "react";
import Person from "./Person/Person";

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Person name="Margit" age="39" />
      <Person name="Criselle" age="20" />
      <Person name="Karin" age="42" />
    </div>
  );
};

export default App;
