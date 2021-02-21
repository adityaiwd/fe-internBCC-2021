import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./config/PrivateRoute";
import { AuthContext } from "./config/Auth";

const App = () => {
  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);

  const setTokens = (data) => {
    localStorage.setItem("tokens",JSON.stringify(data));
    setAuthTokens(data)
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
