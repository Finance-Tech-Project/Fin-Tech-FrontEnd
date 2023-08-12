import { Box, Button, ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { HeaderContainer } from '../../../Styles/HeaderStyles/HeaderStyles'
import Logo from './Logo'
import HeaderButtons from './HeaderButtons'
import { theme } from '../../../Constants/MaterialConstants/theme'

const Header = () => {
	return (
		<ThemeProvider theme={theme}>
			<HeaderContainer>
				<Grid container columns={20} sx={{ width: '100%' }} display={'flex'} alignItems={'center'}>
					<Grid desktop={4}>
						<Logo />
					</Grid>
					<Grid desktop={10} desktopOffset={2}>
						<HeaderButtons />
					</Grid>
					<Grid desktop={2} desktopOffset={1}>
						<Box>
							<Button variant="contained">Login</Button>
							<Button variant="contained">Register</Button>
						</Box>
					</Grid>

				</Grid>
			</HeaderContainer>
		</ThemeProvider>


	)
}

export default Header