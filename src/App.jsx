import React from 'react';
import Registration from './Registration.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login.jsx';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' Component={Registration}/>
        <Route path='/login' Component={Login}/>
      </Switch>
    </Router>
  );
}

export default App
