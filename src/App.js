import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Newplaces from './places/pages/Newplaces'
import Users from './users/pages/Users'

const App = ()=> {
  return (
    <Router>
      <Switch>  
        <Route path="/" exact>
        <Users />  
        </Route>
        <Route path="/places/new" exact>
        <Newplaces />  
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
