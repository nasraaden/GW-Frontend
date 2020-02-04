import React, {useState} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';

import ErrorMessagesSU from './ErrorMessagesSU';
import {Form, StyledDiv, Span2, Span3, Div2, Span1, H2, StyledDiv2, Div, Label, Input, Button, P} from '../styles/Styles';

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
    username: yup
    .string().required('Enter a username.')
    .min(3, 'You need a longer username.')
    .max(16, 'Username is too long.'),
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
                            <Label htmlFor='username'>Username</Label>
                            <Input name='username' type='text' ref={register} />
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