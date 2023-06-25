import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
