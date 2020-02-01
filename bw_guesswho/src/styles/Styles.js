import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
export const Input = styled.input`
width: 100%;
font-size: 20pt;
text-align: center;
background-color: white;
color: #1B9BEA;
border-radius: 5px;
margin: 2% 0;
padding: 0;
postition: absolute;
left: 90%;
`
export const Button = styled.button`
border-radius: 30px;
height: 20%;
width: 42%;
padding: 15px;
color: white;
box-shadow: none;
border: none;
position: relative;
margin-top: 10%;
background-color: white;
color: #1B9BEA;
:disabled {
    background-color: #AAB8C2;
    color: white;
}
`
export const Label = styled.label`
margin-bottom: -2%;
width: 100%;
color: white;
text-align: left;
font-family: 'Roboto', sans-serif;
`
export const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
position: relative;
`
export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
`
export const StyledDiv2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 75%;
`
export const H2 = styled.h2`
font-size: 20px;
color: white;
margin-bottom: 25%;
`
export const P = styled.p`
color: white;
font-size: 10px;
margin-top: 20%;
`
export const Span1 = styled.span`
font-family: 'Londrina Outline', cursive;
color: white;
font-size: 24px;
margin-right: 1px;
`
export const Span2 = styled.span`
font-family: 'Roboto', sans-serif;
color: white;
font-size: 20px;
`
export const Div2 = styled.div`
display: flex;
align-items: baseline;
position: absolute;
top: 5%;
`
