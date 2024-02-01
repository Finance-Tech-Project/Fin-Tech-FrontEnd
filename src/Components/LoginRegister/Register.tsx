import React, { useEffect, useState } from 'react'
import { LoginGridLinksContainerStyle } from '../../Styles/LoginRegisterStyles/LoginStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
	LoginAndRegisterContainer,
	LoginRegisterAvatar,
	LoginRegisterAvatarIcon,
	LoginRegisterButton,
	LoginRegisterGridContainerStyle,
	LoginRegisterGridStyle,
	LoginRegisterLink,
	LoginRegisterTextField,
	LoginRegisterTypography
} from '../../Styles/LoginRegisterStyles/LoginRegisterStyle';
import { theme } from '../../Constants/MaterialConstants/theme';
import { RegisterContainerTextField } from '../../Styles/LoginRegisterStyles/RegisterStyle';
import { registerUser } from '../../Actions/fetchLoginRegisterActions';
import { useAppDispatch } from '../../app/hooks';
import LoginExceptionModal from './LoginExceptionModal';
import { transformPassword } from '../../Functions/utilsFunctions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSignUp = () => {
		dispatch(registerUser({ login, password, firstName, lastName, email}, transformPassword(password), navigate));
	};

	const handleClear = () => {
		setLogin('');
		setPassword('');
		setFirstName('');
		setLastName('');
		setEmail('');
	};

	useEffect(() => {
		return () => handleClear();
	}, []);

	return (
		<LoginAndRegisterContainer>
			<LoginExceptionModal />
			<Grid container sx={() => LoginRegisterGridContainerStyle(theme)}>
				<Grid sx={() => LoginRegisterGridStyle(theme)}>
					<LoginRegisterAvatar>
						<LoginRegisterAvatarIcon />
					</LoginRegisterAvatar>

					<LoginRegisterTypography>
						Sign Up
					</LoginRegisterTypography>

					<RegisterContainerTextField>
						<LoginRegisterTextField
							marginRight
							marginBottom
							autoComplete="fname"
							name="firstName"
							variant="outlined"
							required
							fullWidth
							id="firstName"
							label="First Name"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value.trim())}
						/>

						<LoginRegisterTextField
							marginBottom
							variant="outlined"
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							autoComplete="lname"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value.trim())}
						/>
					</RegisterContainerTextField>

					<RegisterContainerTextField>
						<LoginRegisterTextField
							marginRight
							marginBottom
							autoComplete="login"
							name="login"
							variant="outlined"
							required
							fullWidth
							id="login"
							label="Login"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value.trim())}
						/>

						<LoginRegisterTextField
							marginBottom
							variant="outlined"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							type="email"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value.trim())}
						/>
					</RegisterContainerTextField>
				</Grid>

				<Grid sx={{ width: '100%' }}>
					<LoginRegisterTextField
						marginTop
						variant='outlined'
						fullWidth label="Password"
						autoComplete="Password"
						required
						type="password"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value.trim())}
					/>
				</Grid>

				<Grid sx={{ width: '100%' }}>
					<LoginRegisterButton
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSignUp}
					>
						Sign Up
					</LoginRegisterButton>
				</Grid>

				<Grid container sx={() => LoginGridLinksContainerStyle(theme)}>
					<Grid>
						<LoginRegisterLink href="/signIn" variant="body2">
							{" Already have an account? Sign in"}
						</LoginRegisterLink>
					</Grid>
				</Grid>
			</Grid>
		</LoginAndRegisterContainer>
	)
}

export default Register