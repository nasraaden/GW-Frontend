import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './styles/App.css';
<<<<<<< HEAD
import { H1, AppDiv} from './styles/Styles';
=======
import {AppDiv} from './styles/Styles';
>>>>>>> origin/thomas-shottsjr

import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/home-page/HomePage';
<<<<<<< HEAD

=======
>>>>>>> origin/thomas-shottsjr
function App() {
  return (
    <AppDiv className="App">
        <Switch>  
            <PrivateRoute exact path="/home-page" component={HomePage} />
            <Route path='/create-account' render={props => <SignUp {...props} />} />
            <Route path='/' render={(props)=><Login {...props} />}/>
        </Switch>
    </AppDiv>
    
  );
}

export default App;

