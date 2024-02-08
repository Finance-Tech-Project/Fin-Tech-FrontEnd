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
import { transformPassword, validationEmail } from '../../Functions/utilsFunctions';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Register = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [emailFocus, setEmailFocus] = useState(false); 
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSignUp = () => {
		if (login !== "" && email !== "" && password !== "") {
			dispatch(registerUser({ login, password, firstName, lastName, email }, transformPassword(password), navigate));
		}
	};

	const handleClear = () => {
		setLogin('');
		setPassword('');
		setFirstName('');
		setLastName('');
		setEmail('');
	};

	const handleEmailFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (validationEmail(email)) {
			console.log('valid')
		}
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
							fullWidth
							id="firstName"
							label="First Name"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value.trim())}
						/>

						<LoginRegisterTextField
							marginBottom
							variant="outlined"
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
							validationColor={login !== "" ? false : true}
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
							validationColor={login !== "" ? false : true}
							marginBottom
							variant="outlined"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							type="email"
							onBlur={handleEmailFocus}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value.trim())}
						/>
					</RegisterContainerTextField>
				</Grid>

				<Grid sx={{ width: '100%' }}>
					<LoginRegisterTextField
						validationColor={login !== "" ? false : true}
						marginTop
						variant='outlined'
						fullWidth label="Password"
						autoComplete="Password"
						required
						type="password"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value.trim())}
					/>

					<Box sx={{paddingTop: '20px'}}>
						<Typography color="whitesmoke">Fields with symbol * are mandatory</Typography>
					</Box>
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