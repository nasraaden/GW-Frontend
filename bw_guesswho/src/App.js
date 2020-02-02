import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';

const H1 = styled.h1`
    color: white;
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

function App() {
  return (
    <Div className="App">
        <Switch>  
            <Route path='/create-account' render={props => <SignUp {...props} />} />
            <Route path='/' render={(props)=><Login {...props} />}/>
        </Switch>
    </Div>
    
  );
}

export default App;

