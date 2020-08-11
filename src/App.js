import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import {AuthProvider, AuthContext} from './UserAuth';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <Switch>
            <PrivateRoute path="/login" component={LandingPage} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
