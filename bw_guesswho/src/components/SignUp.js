import React, {useState} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';

import ErrorMessagesSU from './ErrorMessagesSU';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const Input = styled.input`
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
const Button = styled.button`
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
const Label = styled.label`
    margin-bottom: -2%;
    width: 100%;
    color: white;
    text-align: left;
    font-family: 'Roboto', sans-serif;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    position: relative;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
`
const StyledDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
`
const H2 = styled.h2`
    font-size: 20px;
    color: white;
    margin-top: 32%;
    margin-bottom: 25%;
`
const P = styled.p`
    color: white;
    font-size: 10px;
    margin-top: 20%;
`
const Span1 = styled.span`
    font-family: 'Londrina Outline', cursive;
    color: white;
    font-size: 24px;
    margin-right: 1px;
`
const Span2 = styled.span`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 20px;
`
const Div2 = styled.div`
    display: flex;
    align-items: baseline;
    position: absolute;
    top: 5%;
`
const StyledP = styled.p`
    margin: 0;
`
const Span3 = styled.span`
    color: white;
    position: absolute;
    left: 2%;
    top: 5%;
    text-decoration: none;
    font-size: 50px;
    font-weight: 100;
`
const Img = styled.img`
    height: 40px;
    width: 40px;
`

function equalTo(ref: any, msg: any) {
    return yup.mixed().test({
        name: 'equalTo',
        exclusive: false,
        message: msg || '${path} must be the same as ${reference}',
        params: {
          reference: ref.path,
        },
        test: function(value: any) {
          return value === this.resolve(ref);
        },
      });
    }
    yup.addMethod(yup.string, 'equalTo', equalTo);
    
const validationSchema = yup.object().shape({
    name: yup
    .string().required('Enter a name.')
    .min(3, 'You need a longer name.')
    .max(16, 'Name is too long.'),
    email: yup
    .string().required('Enter an email.')
    .email('Enter an email.')
    .min(3,'You need a longer email.')
    .max(36, 'Your email is too long.'),
    password: yup
    .string().required('Enter a password.')
    .min(6, 'Password is too short.')
    .max(16, 'Password exceeds character limit.'),
    passwordConfirm: yup.string()
    .equalTo(yup.ref('password'), 'Passwords must match.')
});


export default function SignUp() {
    const {register, handleSubmit, errors} = useForm({validationSchema: validationSchema});
    const onSubmit = () => {document.getElementById('form').reset()};
    {console.log(errors)}
        return (
            <Form id='form' onSubmit={handleSubmit(onSubmit)}>
                <StyledDiv>
                    <Span3 className='backButton'><NavLink to='/'>{`<`}</NavLink></Span3>
                    <Div2><Span1>Guess</Span1><Span2>Who?</Span2></Div2>
                    <H2>Create your account</H2>
                    <StyledDiv2>
                        <Div>
                            <Label htmlFor='name'>Name</Label>
                            <Input name='name' type='text' ref={register} />
                        </Div>
                        <Div>
                            <Label htmlFor='email'>Email</Label>
                            <Input name='email' type='text' ref={register} />
                        </Div>
                        <Div>
                            <Label htmlFor='name'>Password</Label>
                            <Input name='password' type='password' ref={register} />
                        </Div>
                        <Div>
                            <Label htmlFor='passwordConfirm'>Confirm Password</Label>
                            <Input name='passwordConfirm' type='password' ref={register} />
                        </Div>
                    </StyledDiv2>
                    <Div>
                        <ErrorMessagesSU errors={errors}/>
                    </Div>
                    <Button id='submit' type='submit'>Sign Up</Button>
                    <P>Already have an account? <NavLink to='/'>Log In</NavLink></P>
                </StyledDiv>
        </Form>
    )
}