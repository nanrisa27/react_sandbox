import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="persons-card">
      <p>
        I am {props.name} and I am {props.age} years old.
      </p>
    </div>
  );
};
export default Person;
