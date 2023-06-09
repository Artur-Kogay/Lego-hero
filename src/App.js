import { Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Events from './page/events/Events'
import Help from './page/help/Help'
import Profile from './page/profile/Profile'
import Training from './page/training/Training'
import MainPage from './page/mainPage/MainPage'
import Courses from './page/Courses/Courses'
import Login from './page/AuthPages/LoginPage'
import ResetPage from './page/AuthPages/PasswordResetPage'
import RegisterPage from './page/AuthPages/RegisterPage'
import Welcome from './page/AuthPages/Welcome'
import Tests from './page/tests/Test'
import { StylesProvider } from '@mui/styles'
import './styles/global.scss'
import './App.css'
import { history } from './helpers/history'
import RouteGuard from './components/RouteGuard'
import ActivatePage from './page/AuthPages/ActivatePage'
import CompletePage from './page/AuthPages/CompletePage'

const Context = React.createContext()

// const getUser = async(email) =>{
//   try{
//     await $api.get('/accounts/auth/users/me/').then(response=>console.log(response))
//   }catch(e){
//     console.log(e);
//   }
// }
// getUser()
function App() {
  return (
    <StylesProvider>
      <Router history={history}>
        <Switch>
          <RouteGuard path="/" component={MainPage} exact />
          <RouteGuard path="/profile" component={Profile} exact />
          <RouteGuard path="/events" component={Events} exact />
          <RouteGuard path="/training" component={Training} exact />
          <RouteGuard path="/help" component={Help} exact />
          <RouteGuard path="/courses" component={Courses} exact />
          <RouteGuard path="/tests/:id" component={Tests} exact />

          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-reset" component={ResetPage} />
          <Route exact path="/complete" component={CompletePage} />
          <Route path="/auth/activate">
            <ActivatePage />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  )
}

export default App
