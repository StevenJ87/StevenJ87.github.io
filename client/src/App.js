import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Projects from "./pages/Projects";
import './App.css';
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Books/>
            </Route>
          <Route exact path="/projects">
          <Projects/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
