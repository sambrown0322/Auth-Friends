import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Login /> */}
          {/* </Route> */}

          <PrivateRoute path="/protected" component={FriendsList} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
