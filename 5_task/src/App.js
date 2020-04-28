import React, { Component } from "react";
import "./App.css";
import catsound from "./sounds/cat.mp3";
import Circle from "./Circle/Circle";
import GameOver from "./GameOver/GameOver";

/**
 * Method for random number, check https://www.w3schools.com/js/js_random.asp
 */

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
    endMessage: "",
  };

  /**
   * Setting up the speed and timer
   */
  pace = 1500;
  timer = undefined;

  /**
   * finding a random number
   */
  next = () => {
    let audio = new Audio(catsound);

    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    audio.play();

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    console.log("this is active circle", this.state.current);
  };

  /**
   *
   */

  clickHandler = (circleID) => {
    console.log("Clicked ", circleID);

    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };
  /**
   * Starting the game, and running the next() function
   */
  startHandler = () => {
    this.next();
  };

  /**
   * See step:8 - Ending the game by using clearTimeout()
   */
  endHandler = () => {
    let endScore = undefined;

    if (this.state.score <= 5) {
      endScore = "Your score is less than 5, you can do better!";
    }
    if (this.state.score <= 10) {
      endScore = "Your score is less than 10, you can do better!";
    }
    if (this.state.score >= 11) {
      endScore = "Your score is less than 10, you can do better!";
    }

    this.setState({
      endMessage: endScore,
    });

    clearTimeout(this.timer);

    this.setState({
      showGameOver: true,
    });
  };

  render() {
    return (
      <div>
        <h1>Speedtest</h1>
        <p>Your score: {this.state.score}</p>
        <main>
          <Circle
            active={this.state.current === 1}
            mydefaultcolor="yellow"
            click={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            mydefaultcolor="green"
            click={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            mydefaultcolor="red"
            click={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            mydefaultcolor="blue"
            click={this.clickHandler.bind(this, 4)}
          />
        </main>
        <div>
          <button onClick={this.startHandler}>Start test</button>
          <button onClick={this.endHandler}>End test</button>
        </div>
        {this.state.showGameOver && (
          <GameOver
            score={this.state.score}
            endMessage={this.state.endMessage}
          />
        )}
      </div>
    );
  }
}

export default App;
