import React, {useState} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    margin: 3em;
    width: 75%;
    font-size: 20pt;
    text-align: center;
    background-color: white;
    color: #1B9BEA;
`
const Button = styled.button`
    border-radius: 25px;
    height: 20%;
    width: 50%;
    padding: 15px;
    background-color: lightblue;
`
const Label = styled.label`
    color: white;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

const validationSchema = yup.object().shape({
    name: yup
    .string().required('You need a username.')
    .min(3,'You need a longer username.')
    .max(12, 'Your username is too long.'),
    password: yup
    .string().required('You need a password.')
    .min(6, 'Password is too short.')
    .max(16, 'Password exceeds character limit.')
});


export default function Login() {
    const {register, handleSubmit, errors} = useForm({validationSchema: validationSchema});
    const [error, setError] = useState({name:{message: '', type: ''}, password:{message:'', type:''}})
    const onSubmit = () => {console.log('This is error.name')};
    return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Div>
                    <Label htmlFor='username'>Username</Label>
                    <Input name='username' type='text'  ref={register} />
                </Div>
                <Div>
                <Label htmlFor='name'>Password</Label>
                <Input name='password' type='password' ref={register} />
                </Div>
                <div style={{color: 'red'}}>
                    <pre>
                        { errors.name !== undefined && errors.password !== undefined && (
                            <>
                                <p><label>{Object.values(errors.name)[0]}</label></p>
                                <p><label>{Object.values(errors.password)[0]}</label></p>
                            </>
                        )|| errors.password !== undefined && (
                            <>
                                <p><label>{Object.values(errors.password)[0]}</label></p>
                            </>
                        )|| errors.name !== undefined && (
                            <>
                                <p><label>{Object.values(errors.name)[0]}</label></p>
                            </>
                        )}
                    </pre>
                </div>
                <Button type='submit'>Log In</Button>
        </Form>
    )
}