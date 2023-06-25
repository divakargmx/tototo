import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact component={LoginPage} />
      <Route path="/Dashboard" component={Dashboard} />
    </Routes>
  );
};

export default App;
