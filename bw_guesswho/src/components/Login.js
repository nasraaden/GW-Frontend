import React, { useState, useReducer } from 'react';
import { Form, Input, Button, Label, Div, StyledDiv, StyledDiv2, H2, P, Span1, Span2, Div2 } from '../styles/Styles';
import * as yup from 'yup';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';


const validationSchema = yup.object().shape({
    email: yup
    .string().required('Enter an email.')
    .min(3,'You need a longer email.')
    .max(36, 'Your email is too long.'),
    password: yup
    .string().required('Enter a password.')
    .min(4, 'Password is too short.')
    .max(20, 'Password exceeds character limit.')
});


export default function Login() {
    const {register, handleSubmit, errors} = useForm({validationSchema: validationSchema});
    const [ state, setState ] = useReducer((state, newState) => ({...state, newState}), {
        email: '1234@gmail.com',
        password: '1234'
    });

// email: 1234@gmail.com    password: 1234
    const onSubmit = e => {
        // e.preventDefault();
		axios
        .post('http://localhost:5000/api/login', state)
        .then((res) => {
            console.log('TOKEN:', res);
            // localStorage.setItem('token', res.data.payload);
            // this.props.history.push('/bubble-page');
        })
        .catch((err) => console.log(err));
        document.getElementById('form').reset();
    }

    return (
            <Form id='form' onSubmit={handleSubmit(onSubmit)}>
                <StyledDiv>
                    <Div2><Span1>Guess</Span1><Span2>Who?</Span2></Div2>
                    <H2>Sign In</H2>
                    <StyledDiv2>
                        <Div>
                            <Label htmlFor='email'>Email</Label>
                            <Input name='email' type='email' ref={register} />
                        </Div>
                        <Div>
                            <Label htmlFor='name'>Password</Label>
                            <Input name='password' type='password' ref={register} />
                        </Div>
                    </StyledDiv2>
                    <Div>
                        <pre>
                            { errors.email !== undefined && errors.password !== undefined && (
                                <>
                                    <p><Label>{Object.values(errors.email)[0]}</Label></p>
                                    <p><Label>{Object.values(errors.password)[0]}</Label></p>
                                </>
                            )|| errors.password !== undefined && (
                                <>
                                    <p><Label>{Object.values(errors.password)[0]}</Label></p>
                                </>
                            )|| errors.email !== undefined && (
                                <>
                                    <p><Label>{Object.values(errors.email)[0]}</Label></p>
                                </>
                            )}
                        </pre>
                    </Div>
                    <Button type='submit'>Sign In</Button>
                    <P>Don't have an account? <NavLink to='/create-account'>Create Account</NavLink> </P>
                </StyledDiv>
        </Form>
    )
}