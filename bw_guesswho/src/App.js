import React from 'react';
import './App.css';
import Login from './components/Login'
import styled from 'styled-components';

const H1 = styled.h1`
    color: white;
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
`
function App() {
  return (
    <div className="App">
      <H1>Guess Who</H1>
      <Login />
    </div>
  );
}

export default App;

