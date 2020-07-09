import React from 'react';

import Tweet from './Tweet';
import Menu from '../../Nav/Menu';
import { Div2, Span1, Span2, GameDiv, MenuDiv2 } from '../../../styles/Styles';

const Game = (props) => {
  return (
    <>
      <MenuDiv2>
        <Div2>
          <Span2>Guess</Span2>
          <Span1>Who?</Span1>
        </Div2>
        <Menu />
      </MenuDiv2>
      <GameDiv className='game'>
        <Tweet />
      </GameDiv>
    </>
  );
};

export default Game;
