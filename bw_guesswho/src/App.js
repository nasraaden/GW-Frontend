import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.css';
import { AppDiv, Div2, Span1, Span2, H2 } from './styles/Styles';

import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/home-page/HomePage';
import Game from './components/home-page/game/Game';
import Account from './components/Account/Account';
import Settings from './components/Settings/Settings';

import { ThemeProvider } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider>
      <AppDiv className='App'>
        <Switch>
          <PrivateRoute exact path='/home-page' component={HomePage} />
          <Route path='/account' component={Account} />
          <Route path='/settings' render={(props) => <Settings {...props} />} />
          <Route exact path='/game' render={(props) => <Game {...props} />} />
          <Route
            path='/create-account'
            render={(props) => <SignUp {...props} />}
          />
          <Route path='/' render={(props) => <Login {...props} />} />
        </Switch>
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
