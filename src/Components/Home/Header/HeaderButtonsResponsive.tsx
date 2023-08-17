import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Logo from './Logo';
import { HeaderButtonsStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Box } from '@mui/material'
import { headerButtons } from '../../../Constants/ProjectConstants/headerConstants';

const HeaderButtonsResponsive = () => {
	return (
		<Box width="100%">
			<Grid container width="100%">
				<Grid tabletOffset={1}>
					<Logo />
				</Grid>
				<Grid container tabletOffset={6}>
					<Grid>
						<HeaderButtonsStyle disableRipple>Login</HeaderButtonsStyle>
					</Grid>
					<Grid>
						<HeaderButtonsStyle disableRipple>Register</HeaderButtonsStyle>
					</Grid>
				</Grid>
			</Grid>
			<Grid container>
				{headerButtons.map((buttonText) => {
					return (
						<Grid key={buttonText} >
							<HeaderButtonsStyle disableRipple key={buttonText} >{buttonText}</HeaderButtonsStyle>
						</Grid>
					);
				})}
			</Grid>
		</Box>

	)
}

export default HeaderButtonsResponsive