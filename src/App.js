import MainLayout from "./components/MainLayout";
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
  );
}

export default App;
