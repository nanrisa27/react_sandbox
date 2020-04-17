import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends Component {
  state = {
    likes: 0,
  };

  addHandler = () => {
    console.log("addHandler clicked");
    this.setState({ likes: this.state.likes + 1 });
  };

  removeHandler = () => {
    console.log("removeHandler clicked");
    this.setState({ likes: this.state.likes - 1 });
  };

  resetHandler = () => {
    console.log("resetHandler clicked");
    this.setState({ likes: 0 });
  };

  render() {
    let circleClass = [];

    if (this.state.likes === 0) {
      circleClass = "likes";
    } else if (this.state.likes % 2 === 0) {
      circleClass = "likes even";
    } else {
      circleClass = "likes odd";
    }

    return (
      <div>
        <Header />
        <main>
          <h1 className={circleClass}>Total likes: {this.state.likes}</h1>
          <div className="button-group">
            <button onClick={this.addHandler}>Add like</button>
            <button onClick={this.removeHandler}>Remove like</button>
            <button onClick={this.resetHandler}>Reset likes</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
