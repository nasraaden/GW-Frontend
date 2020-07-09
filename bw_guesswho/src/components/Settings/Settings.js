import React from 'react';

import Menu from '../Nav/Menu';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {
  DeleteButton,
  DeleteDiv,
  DeleteP,
  MenuDiv2,
  Div2,
  Span1,
  Span2,
} from '../../styles/Styles';

export default function Settings(props) {
  const Delete = () => {
    axiosWithAuth().delete(`/api/users/${localStorage.id}`);
    props.history.push('/login');
    localStorage.clear();
  };
  return (
    <>
      <MenuDiv2>
        <Div2>
          <Span2>Guess</Span2>
          <Span1>Who?</Span1>
        </Div2>
        <Menu />
      </MenuDiv2>
      <DeleteDiv>
        <DeleteP>Warning! You are about to delete your account!</DeleteP>
        <DeleteButton onClick={Delete}>Delete Account</DeleteButton>
      </DeleteDiv>
    </>
  );
}
