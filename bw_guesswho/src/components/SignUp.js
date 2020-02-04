import React, { useReducer } from 'react';
import {
	Form,
	Input,
	Button,
	Label,
	Div,
	StyledDiv,
	StyledDiv2,
	H2,
	P,
	Span1,
	Span2,
	Span3,
	Div2
} from '../styles/Styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ErrorMessagesSU from './ErrorMessagesSU';

function equalTo(ref, msg) {
	return yup.mixed().test({
		name: 'equalTo',
		exclusive: false,
		message: msg || '${path} must be the same as ${reference}',
		params: {
			reference: ref.path
		},
		test: function(value) {
			return value === this.resolve(ref);
		}
	});
}
yup.addMethod(yup.string, 'equalTo', equalTo);

const validationSchema = yup.object().shape({
	name: yup.string().required('Enter a name.').min(3, 'You need a longer name.').max(16, 'Name is too long.'),
	email: yup
		.string()
		.required('Enter an email.')
		.email('Enter an email.')
		.min(3, 'You need a longer email.')
		.max(36, 'Your email is too long.'),
	password: yup
		.string()
		.required('Enter a password.')
		.min(6, 'Password is too short.')
		.max(16, 'Password exceeds character limit.'),
	passwordConfirm: yup.string().equalTo(yup.ref('password'), 'Passwords must match.')
});

const initialState = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
};

function loginReducer(state, action) {
	return state;
}

export default function SignUp(props) {
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
				<Span3 className="backButton">
					<NavLink to="/">{`<`}</NavLink>
				</Span3>
				<Div2>
					<Span1>Guess</Span1>
					<Span2>Who?</Span2>
				</Div2>
				<H2>Create your account</H2>
				<StyledDiv2>
					<Div>
						<Label htmlFor="name">Name</Label>
						<Input name="name" type="text" ref={register} />
					</Div>
					<Div>
						<Label htmlFor="email">Email</Label>
						<Input name="email" type="text" ref={register} />
					</Div>
					<Div>
						<Label htmlFor="name">Password</Label>
						<Input name="password" type="password" ref={register} />
					</Div>
					<Div>
						<Label htmlFor="passwordConfirm">Confirm Password</Label>
						<Input name="passwordConfirm" type="password" ref={register} />
					</Div>
				</StyledDiv2>
				<Div>
					<ErrorMessagesSU errors={errors} />
				</Div>
				<Button id="submit" type="submit">
					Sign Up
				</Button>
				<P>
					Already have an account? <NavLink to="/">Log In</NavLink>
				</P>
			</StyledDiv>
		</Form>
	);
}