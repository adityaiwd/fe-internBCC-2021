import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
