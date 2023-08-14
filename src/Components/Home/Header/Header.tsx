import { Box, Button, ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { HeaderButtonsStyle, HeaderContainer } from '../../../Styles/HeaderStyles/HeaderStyles'
import Logo from './Logo'
import HeaderButtons from './HeaderButtons'
import { theme } from '../../../Constants/MaterialConstants/theme'

const Header = () => {
	return (
		<ThemeProvider theme={theme}>
			<HeaderContainer>
				<Grid container sx={{ width: '100%' }} display={'flex'} alignItems={'center'}>
					<Logo />


					<HeaderButtons />

					<Box display={'flex'} alignItems={'center'} sx={{paddingLeft: '200px'}}>
						<HeaderButtonsStyle disableRipple>Login</HeaderButtonsStyle>
						<HeaderButtonsStyle disableRipple>Register</HeaderButtonsStyle>
					</Box>
				</Grid>



			</HeaderContainer>
		</ThemeProvider>
	)
}

export default Header