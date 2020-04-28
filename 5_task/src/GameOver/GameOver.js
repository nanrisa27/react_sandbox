import React from "react";
import "./GameOver.css";

const closeHandler = () => {
  window.location.reload();
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameoverbox">
        <div>
          <h2>Game over</h2>
          <p>
            Your score was: <span> {props.score} </span>
            {props.endMessage}
          </p>
        </div>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
};

export default GameOver;
