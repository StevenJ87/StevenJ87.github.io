import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import './App.css';
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Books} />
          <Route path="/projects" component={Detail} />
          <Route path="/about" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
