import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// pages
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="selected">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
