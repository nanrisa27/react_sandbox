import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Margit", age: 39 },
      { name: "Criselle", age: 20 },
      { name: "Karin", age: 42 }
    ]
  };
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
