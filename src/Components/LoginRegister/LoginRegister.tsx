import { Box } from '@mui/material'
import React from 'react'
import Header from '../Home/Header/Header'
import Login from './Login'
import { LoginBG, LoginBgBlackout, LoginRegisterContainer } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle'
import Register from './Register';

interface Props {
	pathRoute: string
}

const LoginRegister = ({pathRoute}: Props) => {
	return (
		<Box sx={{ width: '100%' }}>
			<Header />
			<LoginRegisterContainer>
				<Box sx={{ width: '70%', height: '70%', display: 'flex' }}>
					<Box sx={{ width: '100%', boxShadow: '16px 16px 38px 0px rgba(24,61,204,0.87)', display: 'flex' }}>
						<LoginBG>
							<LoginBgBlackout></LoginBgBlackout>
						</LoginBG>
						{pathRoute === 'login' ? <Login /> : <Register />}
					</Box>
				</Box>
			</LoginRegisterContainer>
		</Box>
	)
}

export default LoginRegister