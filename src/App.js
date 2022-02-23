import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationPage from './components/RegistrationPage/Index'
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/register"
            component={RegistrationPage}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
