import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationPage from './components/RegistrationPage/Index'
import LoginPage from './components/LoginPage/Index'
import PasswordResetPage from './components/PasswordResetPage/Index'
import WelcomePage from './components/WelcomePage/Index'
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route
            exact
            path="/welcome"
            component={WelcomePage}
          />
          <Route
            exact
            path="/register"
            component={RegistrationPage}
          />
          <Route
            exact
            path="/login"
            component={LoginPage}
          />
          <Route
            exact
            path="/password-reset"
            component={PasswordResetPage}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
