import React from 'react';
import User from './components/User';
import Info from './components/Info';
import Navbar from './components/Navbar';
import {GithubProvider} from './context/context';
//import {mockUser} from './context/mockData.js/mockUser.js';

import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClonedCard from './components/ClonedCard';


function App() {
  
 
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact={true}>
        <Dashboard>
        </Dashboard>

        </Route>
        <Route path="/info">
        <Info>  
        </Info>
        </Route>
      
      <Route path="/login" > 
      <Login />
      </Route>

      <Route path="/user">
      <GithubProvider />
      </Route>
      
      <Route path="/cloned" >
      <ClonedCard />
      </Route>

      <Route path="*">
      <Error />
      </Route>
      
      
    </Switch>
      </Router>

    </div>
  );
}

export default App;
