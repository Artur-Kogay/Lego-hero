import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../src/styles/global.scss"
import Events from "./page/events/Events";
import Help from "./page/help/Help";
import Profile from "./page/profile/Profile";
import Training from "./page/training/Training";
import mainPage from "./page/mainPage/mainPage";
import Courses from './page/Courses/Courses'
import Login from './page/AuthPages/LoginPage'
import ResetPage from './page/AuthPages/PasswordResetPage'
import RegisterPage from './page/AuthPages/RegisterPage';
import Welcome from './page/AuthPages/Welcome';

import './App.css'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={mainPage} exact/> 
          <Route path="/profile" component={Profile} exact/> 
          <Route path="/events" component={Events} exact/> 
          <Route path="/training" component={Training} exact/> 
          <Route path="/help" component={Help} exact/> 
          <Route path="/courses" component={Courses} exact/> 

          <Route
            exact
            path="/welcome"
            component={Welcome}
          />
          <Route
            exact
            path="/register"
            component={RegisterPage}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/password-reset"
            component={ResetPage}
          />
        </Switch>
     
    </BrowserRouter>
  );
}

export default App;
