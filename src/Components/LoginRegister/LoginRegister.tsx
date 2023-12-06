import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import Header from '../Home/Header/Header'
import Login from './Login'
import { LoginRegisterBlackoutContainer, LoginRegisterContainer, LoginRegisterWrapperShadow } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle'
import Register from './Register';
import { theme } from '../../Constants/MaterialConstants/theme'
import Footer from '../Footer/Footer'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

interface Props {
	pathRoute: string
}

const LoginRegister = ({ pathRoute }: Props) => {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ width: '100%' }}>
				<Header />
				<LoginRegisterContainer>
					<LoginRegisterBlackoutContainer>
						<Grid container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<Grid
								mobileS={12}
								laptop={6} laptopOffset={4.5}
								laptopL={5.5} laptopLOffset={5}
								desktop={5} desktopOffset={5.5}
							>
								<LoginRegisterWrapperShadow>
									{pathRoute === 'signIn' ? <Login /> : <Register />}
								</LoginRegisterWrapperShadow>
							</Grid>
						</Grid>
					</LoginRegisterBlackoutContainer>
				</LoginRegisterContainer>
				<Footer />
			</Box>
		</ThemeProvider>
	)
}

export default LoginRegister