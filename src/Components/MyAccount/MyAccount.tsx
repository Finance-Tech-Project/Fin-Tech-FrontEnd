import React from 'react'
import { Box, ThemeProvider, Typography } from '@mui/material'
import MyAccountHeader from './MyAccountHeader'
import { theme } from '../../Constants/MaterialConstants/theme'
import { MyAccountBlackoutContainer, MyAccountContainer } from '../../Styles/MyAccountStyles/MyAccountStyle'
import MyAccountFooter from './MyAccountFooter'

const MyAccount = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box width={'100%'} height={'100%'}>
				<MyAccountHeader />
				<MyAccountContainer>
					<MyAccountBlackoutContainer>
						<Typography variant='h1'>MyAccount</Typography>
					</MyAccountBlackoutContainer>
				</MyAccountContainer>
				<MyAccountFooter />
			</Box>
		</ThemeProvider>
	)
}

export default MyAccount