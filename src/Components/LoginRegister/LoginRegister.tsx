import { Box, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header'
import Login from './Login'
import { LoginBG, LoginBgBlackout, LoginRegisterContainer, LoginRegisterWrapper, LoginRegisterWrapperShadow } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle'
import Register from './Register';
import { theme } from '../../Constants/MaterialConstants/theme'
import Footer from '../Footer/Footer'

interface Props {
	pathRoute: string
}

const LoginRegister = ({ pathRoute }: Props) => {
	const [displaySize, setDisplaySize] = useState(window.screen.width);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setDisplaySize(window.screen.width);
		});

	}, [displaySize]);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ width: '100%' }}>
				<Header />
				<LoginRegisterContainer>
					<LoginRegisterWrapper>
						<LoginRegisterWrapperShadow>
							{displaySize > theme.breakpoints.values.laptop - 1 &&
								<LoginBG>
									<LoginBgBlackout></LoginBgBlackout>
								</LoginBG>
							}
							{pathRoute === 'signIn' ? <Login /> : <Register />}
						</LoginRegisterWrapperShadow>
					</LoginRegisterWrapper>
				</LoginRegisterContainer>
				<Footer />
			</Box>
		</ThemeProvider>
	)
}

export default LoginRegister