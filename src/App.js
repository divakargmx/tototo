import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact component={LoginPage} />
      <Route path="/dashboard" component={Dashboad} />
    </Routes>
  );
};

export default App;
