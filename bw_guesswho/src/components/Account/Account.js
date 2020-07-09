import React, { useEffect, useState } from 'react';

import Menu from '../Nav/Menu';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { AccountDiv, MenuDiv2, Div2, Span1, Span2 } from '../../styles/Styles';

function Account(props) {
  const id = localStorage.id;
  const [email, setEmail] = useState();
  const [points, setPoints] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then((res) => {
        setEmail(res.data.email);
        setPoints(res.data.points);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <MenuDiv2>
        <Div2>
          <Span2>Guess</Span2>
          <Span1>Who?</Span1>
        </Div2>
        <Menu />
      </MenuDiv2>
      <AccountDiv>
        <h1>Email: {email}</h1>
        <h1>Score: {points}</h1>
      </AccountDiv>
    </>
  );
}

export default Account;
