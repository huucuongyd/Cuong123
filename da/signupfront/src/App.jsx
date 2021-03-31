import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarTogglerDemo02"
            ></div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
            </Switch>
          </div>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;