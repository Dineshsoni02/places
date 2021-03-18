
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Newplaces from './places/pages/Newplaces'
import Users from './users/pages/Users'
import MainNavigation from './shared/components/Navigation/MainNavigation'

import './App.css';
const App = ()=> {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>  
        <Route path="/" exact>
        <Users />  
        </Route>
        <Route path="/places/new" exact>
        <Newplaces />  
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
