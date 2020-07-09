import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { MenuDiv2, Div2, Span4, Span5 } from '../../styles/Styles';

import { AiFillApple } from 'react-icons/ai';

import '../../styles/App.css';

import iphone from './images/iphone.png';

const Landing = () => {
  return (
    <div className='landing'>
      <MenuDiv2>
        <Div2>
          <Span5>Guess</Span5>
          <Span4>Who?</Span4>
        </Div2>
        <div>
          <NavLink to='/' className='home-link'>
            Home
          </NavLink>
          <NavLink to='/login' className='home-link'>
            Login
          </NavLink>
        </div>
      </MenuDiv2>
      <div className='landing-top-container'>
        <div className='left'>
          <h2>How well do you know the people in your world?</h2>
          <h4>Have fun testing your knowledge with Guess Who!</h4>
          <div className='buttons'>
            <Link to='/login'>
              <button className='play-button'>Play</button>
            </Link>
            <div className='app-store'>
              <AiFillApple className='apple-icon' />
              <div>
                <p className='download'>Download on the</p>
                <p className='apple'>Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={iphone} alt='iphone mockup of guess who app' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
