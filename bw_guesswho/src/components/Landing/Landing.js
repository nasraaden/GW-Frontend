import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// styles
import { MenuDiv2, Div2, Span4, Span5 } from '../../styles/Styles';
import '../../styles/App.css';

// icons
import { AiFillApple } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { FaRetweet, FaTwitter } from 'react-icons/fa';
import { RiHeartLine, RiCopyrightLine } from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';
import { IoIosPeople } from 'react-icons/io';

// images
import iphone from './images/iphone.png';
import score from './images/score.png';

const Landing = () => {
  return (
    <>
      <div className='landing-top'>
        <div className='menu-top'>
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
        </div>
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
      <div className='landing-middle-container'>
        <h3>
          Starting Category: <span>Presidential Candidates</span>
        </h3>
        <div className='sample-game'>
          <div className='sample-left'>
            <p className='firstp'>Sample Tweet</p>
            <div className='tweet-div'>
              <FaTwitter className='twitter-icon' />
              <p className='tweetp'>
                Heading to Davos, Switzerland to meet with World and Business
                Leaders and bring Good Policy and additional Hundreds of
                Billions of Dollars back to the United States of America! We are
                now NUMBER ONE in the Universe, by FAR!!
              </p>
              <div className='tweet-bottom'>
                <div className='tweet-icons'>
                  <div className='tweet-icon'>
                    <FiMessageCircle className='actual-icon' />
                    <p>22.4K</p>
                  </div>
                  <div className='tweet-icon'>
                    <FaRetweet className='actual-icon' />
                    <p>10.8K</p>
                  </div>
                  <div className='tweet-icon'>
                    <RiHeartLine className='actual-icon' />
                    <p>115.5K</p>
                  </div>
                </div>
                <p className='date'>20 Jan 2020</p>
              </div>
            </div>
          </div>
          <div className='sample-right'>
            <p className='secondp'>Who said it?</p>
            <div className='candidates'>
              <div className='candidate' style={{ marginBottom: '.6rem' }}>
                <img
                  src={
                    'https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png'
                  }
                  alt='bernie sanders at a podium with the flag behind him'
                />
                <div className='user-text'>
                  <div className='name-check'>
                    <p>Bernie Sanders</p>
                    <GoVerified className='verified-icon' />
                  </div>
                  <p className='name'>@BernieSanders</p>
                </div>
              </div>
              <div className='candidate' style={{ marginBottom: '.6rem' }}>
                <img
                  src={
                    'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/17903454_10158949965035725_3181251005684687258_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_oc=AQkbPTt2-cSfrQMWDXPOVw2Ef_XuMycjc0D1GK7RzWQyv6TWKQ_JsYcdierR9K7Y_bgksQsn_bW2x2_1npaX8-Kd&_nc_ht=scontent-sea1-1.xx&oh=3a4b5a3d2b93eddd64063e03ad8d3f27&oe=5F2DCD43'
                  }
                  alt='close up Donald Trump with a blurry background'
                />
                <div className='user-text'>
                  <div className='name-check'>
                    <p>Donald J. Trump</p>
                    <GoVerified className='verified-icon' />
                  </div>
                  <p className='name'>@realDonaldTrump</p>
                </div>
              </div>
              <div className='candidate'>
                <img
                  src={
                    'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/85009296_10156636790376104_3772302117180538880_o.jpg?_nc_cat=1&_nc_sid=85a577&_nc_oc=AQmtkEqImJrUcQaAC8MWpfXiIeUozaxrm4hzmJXBLIKRccP_9xrJMPTFQBf9e2Pb0F54D_AMOzbj15Y7wgt7NmpB&_nc_ht=scontent-sea1-1.xx&oh=0862fa40ddb9b6236d03eae8fcd5977e&oe=5F2B573D'
                  }
                  alt='Joe Biden with a light blue background'
                />
                <div className='user-text'>
                  <div className='name-check'>
                    <p>Joe Biden</p>
                    <GoVerified className='verified-icon' />
                  </div>
                  <p className='name'>@JoeBiden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='landing-bottom-container'>
        <div className='first-container'>
          <h5>Up your high score</h5>
          <p>It isn't fun if you can't brag!</p>
          <img src={score} alt='score of 25 with a circle around it' />
        </div>
        <div className='second-container'>
          <h5>Tons of fun categories</h5>
          <p className='left-align'>Actors</p>
          <p className='right-align'>Comedians</p>
          <p className='left-align'>Musicians</p>
          <p className='right-align'>Athletes</p>
          <div>And More!</div>
        </div>
        <div className='third-container'>
          <h5>Challenge your friends</h5>
          <p>Winner takes all!</p>
          <IoIosPeople className='people-icon' />
        </div>
      </div>
      <div className='landing-footer'>
        <RiCopyrightLine className='copyright-icon' />
        <p>Guess Who 2020</p>
      </div>
    </>
  );
};

export default Landing;
