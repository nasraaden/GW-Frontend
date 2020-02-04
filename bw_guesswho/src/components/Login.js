import React, { useReducer } from 'react';
import { Form, Input, Button, Label, Div, StyledDiv, StyledDiv2, H2, P, Span1, Span2, Div2 } from '../styles/Styles';
import * as yup from 'yup';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import ErrorMessagesLI from './ErrorMessagesLI';

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.required('Enter an email.')
		.email('Enter an email')
		.min(3, 'You need a longer email.')
		.max(36, 'Your email is too long.'),
	password: yup
		.string()
		.required('Enter a password.')
		.min(4, 'Password is too short.')
		.max(20, 'Password exceeds character limit.')
});

const initialState = {
	email: '',
	password: ''
};

function loginReducer(state, action) {
	return state;
}

export default function Login(props) {
	const { register, handleSubmit, errors } = useForm({ validationSchema: validationSchema });
	const [ state, dispatch ] = useReducer(loginReducer, initialState);

	// email: 1234@gmail.com    password: 1234
	const onSubmit = (data) => {
		dispatch((state.email = data.email), (state.password = data.password));
		console.log('state', state, 'data', data);
		// e.preventDefault();
		axiosWithAuth()
			.post('http://localhost:5000/api/login', state)
			.then((res) => {
				console.log('TOKEN:', res.data.payload);
				localStorage.setItem('token', res.data.payload);
				props.history.push('/home-page');
			})
			.catch((err) => console.log(err));
		document.getElementById('form').reset();
	};

	return (
		<Form id="form" onSubmit={handleSubmit(onSubmit)}>
			<StyledDiv>
				<Div2>
					<Span1>Guess</Span1>
					<Span2>Who?</Span2>
				</Div2>
				<H2>Sign In</H2>
				<StyledDiv2>
					<Div>
						<Label htmlFor="email">Email</Label>
						<Input name="email" type="text" ref={register} />
					</Div>
					<Div>
						<Label htmlFor="name">Password</Label>
						<Input name="password" type="password" ref={register} />
					</Div>
				</StyledDiv2>
				<Div>
					<ErrorMessagesLI errors={errors} />
				</Div>
				<Button type="submit">Sign In</Button>
				<P>
					Don't have an account? <NavLink to="/create-account">Create Account</NavLink>{' '}
				</P>
			</StyledDiv>
		</Form>
	);
}