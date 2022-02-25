<<<<<<< HEAD
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../src/styles/global.scss"
import Events from "./page/events/Events";
import Help from "./page/help/Help";
import Profile from "./page/profile/Profile";
import Training from "./page/training/Training";
import mainPage from "./page/mainPage/mainPage";


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={mainPage} exact/> 
          <Route path="/profile" component={Profile} exact/> 
          <Route path="/events" component={Events} exact/> 
          <Route path="/training" component={Training} exact/> 
          <Route path="/help" component={Help} exact/> 
        </Switch>
     
    </BrowserRouter>
=======
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
>>>>>>> origin/abror
  );
}

export default App;
