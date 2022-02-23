import MainLayout from "./components/MainLayout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={MainLayout} exact/> 
        </Switch>
    </BrowserRouter>
  );
}

export default App;
