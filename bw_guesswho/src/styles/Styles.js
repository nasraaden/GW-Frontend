import styled from 'styled-components';

/* App.js Styling */
export const H1 = styled.h1`
  color: white;
  font-size: 24px;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
`;
export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
`;

/* Sign Up and Login styles below */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 28rem;
  height: 3.5rem;
  font-size: 1.2rem;
  text-align: center;
  background-color: white;
  color: #1b9bea;
  border-radius: 0.5rem;
  margin: 2% 0;
  postition: absolute;
`;
export const Button = styled.button`
  border-radius: 0.5rem;
  font-size: 1.2rem;
  width: 28rem;
  padding: 1.2rem 0;
  cursor: pointer;
  border: none;
  position: relative;
  margin: 1rem;
  background-color: white;
  color: #1b9bea;
  :hover {
    background-color: #1b9bea;
    color: white;
  }
`;
export const Label = styled.label`
  margin-bottom: -2%;
  width: 100%;
  color: white;
  text-align: left;
  font-family: 'Roboto', sans-serif;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
`;
export const H2 = styled.h2`
  font-size: 2rem;
  color: white;
`;
export const P = styled.p`
  color: white;
  font-size: 1rem;
  margin-top: 2rem;
`;
export const Span1 = styled.span`
  font-family: 'Londrina Outline', cursive;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 0.1rem;
`;
export const Span2 = styled.span`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 2rem;
  text-align: center;
  letter-spacing: -0.1rem;
  font-weight: bold;
`;
export const Span4 = styled.span`
  font-family: 'Londrina Outline', cursive;
  color: #1b9bea;
  font-weight: bold;
  font-size: 2rem;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 0.1rem;
`;
export const Span5 = styled.span`
  font-family: 'Roboto', sans-serif;
  color: #1b9bea;
  font-size: 2rem;
  text-align: center;
  letter-spacing: -0.1rem;
  font-weight: bold;
`;

export const StyledP = styled.p`
  margin: 0;
`;

export const Img = styled.img`
  height: 40px;
  width: 40px;

  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 20px;
`;
export const Span3 = styled.span`
  position: absolute;
  top: 5%;
  left: 5%;
`;
export const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Menu styling

export const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;
`;
export const MenuDiv3 = styled.div`
  display: flex;
  color: black;
`;
export const ShowingDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 65%;
  top: 14%;
  background-color: #ffffff;
  padding: 2% 5%;
  border-radius: 0.5rem;
`;
export const DrawerLink = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem;
	text-decoration: none;
	color: black;
	font-family: 'Montserrat', sans-serif;
  }`;
//HomePage styles
export const LongButton = styled.button`
  width: 23rem;
  border-radius: 2.5rem;
  height: 20%;
  padding: 1rem;
  color: white;
  box-shadow: none;
  border: none;
  position: relative;
  margin: 1% 0;
  background-color: white;
  background-color: #aab8c2;
  color: white;
`;
export const PresButton = styled.button`
  width: 23rem;
  border-radius: 2.5rem;
  height: 20%;
  padding: 1rem;
  box-shadow: none;
  border: none;
  position: relative;
  margin: 1% 0;
  background-color: white;
  color: #1b9bea;
`;
export const StyledButton = styled.button`
  width: 23rem;
  border-radius: 3rem;
  height: 20%;
  padding: 1rem 0;
  color: white;
  box-shadow: none;
  border: none;
  position: relative;
  margin: 1rem;
  background-color: white;
  color: #1b9bea;
  :disabled {
    background-color: #aab8c2;
    color: white;
  }
`;
export const PlayButton = styled.button`
  width: 10rem;
  border-radius: 3rem;
  padding: 1rem 0;
  color: #1b9bea;
  margin: 2rem;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #1b9bea;
    color: white;
  }
`;
export const StyledButton2 = styled.button`
  width: 23rem;
  border-radius: 30px;
  height: 20%;
  padding: 15px;
  color: white;
  box-shadow: none;
  border: none;
  position: relative;
  margin: 0;
  background-color: white;
  color: #1b9bea;
  border-right: 1px solid;
  border-left: none;
  border-top: none;
  border-bottom: none;
  background-color: #aab8c2;
  color: white;
`;
//Game Styles
export const Choice = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 18rem;
  border-radius: 0.5rem;
  margin: 1rem auto;
  background-color: white;
  color: black;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #1b9bea;
  }
`;
export const ChoiceDiv = styled.div`
  margin: 0 auto;
`;

export const ChoiceDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const NameP = styled.p`
  margin: 0;
  text-align: start;
  font-weight: bold;
`;
export const HandleP = styled.p`
  margin: 0;
  text-align: start;
  color: #657786;
`;
export const Submit = styled.button`
  color: white;
  width: 50%;
  border-radius: 30px;
  height: 20%;
  padding: 15px;
  color: white;
  box-shadow: none;
  border: none;
  margin: 2% 0%;
  background-color: white;
  color: #1b9bea;
  :active {
    background: #1b9bea;
    color: white;
  }
`;
export const ScoreP = styled.p`
  color: white;
  font-size: 2rem;
`;
export const StyledTweet = styled.p`
  text-align: left;
  margin: 1rem;
  background: white;
  border: 2px solid white;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 25rem;
  margin: auto;
`;
export const TweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
export const ImageDiv = styled.div`
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: space-evenly;
`;
export const Cand = styled.img`
  width: 2px;
  border-radius: 30px;
`;
export const LevelP = styled.p`
  color: white;
  font-size: 2rem;
  margin-left: 0%;
`;
export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: black;
  margin-top: 1rem;
`;
export const GameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const PresCandImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem;
`;
//Setting Styles
export const DeleteButton = styled.button`
  width: 15rem;
  cursor: pointer;
  margin: auto;
  padding: 0.5rem;
  color: white;
  font-size: 1.5rem;
  background-color: red;
  border-radius: 1rem;
  :active {
    color: red;
    background-color: white;
  }
`;
export const DeleteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DeleteP = styled.p`
  color: white;
  font-size: 1.5rem;
`;
//Account Styles
export const AccountDiv = styled.div`
  color: white;
  padding: 2%;
`;
