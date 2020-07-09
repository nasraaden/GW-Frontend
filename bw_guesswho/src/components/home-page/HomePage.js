import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { NavLink, Route } from 'react-router-dom';

import Menu from '../Nav/Menu';
import Game from './game/Game';
import PrivateRoute from '../PrivateRoute';
import {
  MenuDiv2,
  LongButton,
  P,
  StyledButton,
  StyledButton2,
  Div2,
  Span1,
  Span2,
  PresButton,
  PlayButton,
} from '../../styles/Styles';

const HomePage = (props) => {
  return (
    <div>
      <MenuDiv2>
        <Div2>
          <Span2>Guess</Span2>
          <Span1>Who?</Span1>
        </Div2>
        <Menu />
      </MenuDiv2>
      <P>Choose Game Mode</P>
      <div>
        <StyledButton selected type='radio' name='singlePlayer'>
          Single Player
        </StyledButton>
        <StyledButton2
          type='radio'
          name='multiPlayer'
          onClick={() => alert('Feature is not yet available.')}
        >
          MultiPlayer
        </StyledButton2>
      </div>
      <P>Choose Tweeters</P>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PresButton selected type='radio'>
          Presidential Candidates
        </PresButton>
        <LongButton
          type='radio'
          onClick={() => alert('Feature is not yet available.')}
        >
          Actors
        </LongButton>
        <LongButton
          type='radio'
          onClick={() => alert('Feature is not yet available.')}
        >
          Comedians
        </LongButton>
        <LongButton
          type='radio'
          onClick={() => alert('Feature is not yet available.')}
        >
          Athletes
        </LongButton>
      </div>

      <NavLink to='/game'>
        <PlayButton>Play</PlayButton>
      </NavLink>
    </div>
  );
};
export default HomePage;
