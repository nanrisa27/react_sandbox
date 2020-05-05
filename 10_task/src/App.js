import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
};

export default App;
