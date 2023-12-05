import { Box, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header'
import Login from './Login'
import { LoginBG, LoginBgBlackout, LoginRegisterBlackoutContainer, LoginRegisterContainer, LoginRegisterWrapperShadow } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle'
import Register from './Register';
import { theme } from '../../Constants/MaterialConstants/theme'
import Footer from '../Footer/Footer'
import { useAppSelector } from '../../app/hooks'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

interface Props {
	pathRoute: string
}

const LoginRegister = ({ pathRoute }: Props) => {
	const displaySize = useAppSelector(state => state.generalAppReducer.displaySize);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ width: '100%' }}>
				<Header />
				<LoginRegisterContainer>
					<LoginRegisterBlackoutContainer>
						<Grid container sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<Grid
								tablet={10} tabletOffset={0.5}
								laptop={6} laptopOffset={4.5}
								laptopL={5.5} laptopLOffset={5}
								desktop={5} desktopOffset={5.5}
								desktopL={5} desktopLOffset={5.5}
							>
								<LoginRegisterWrapperShadow>
									{/* {
								displaySize > theme.breakpoints.values.laptop - 1 &&
								<LoginBG>
									<LoginBgBlackout></LoginBgBlackout>
								</LoginBG>
							} */}
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