import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

function App() {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/events" component={Events} exact />
          <Route path="/training" component={Training} exact />
          <Route path="/help" component={Help} exact />
          <Route path="/courses" component={Courses} exact />
          <Route path="/tests" component={Tests} exact />

          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-reset" component={ResetPage} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
