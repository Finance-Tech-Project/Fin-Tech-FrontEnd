import React from 'react'
import { headerButtons } from '../../../Constants/ProjectConstants/headerConstants';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { HeaderButtonsStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import Logo from './Logo';

const HeaderButtons = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>

		<Grid container columns={{ desktopL: 20, desktop: 17.5, laptopL: 14, laptop: 12.25, tablet: 11.5 }} sx={{ width: '100%' }} display={'flex'} alignItems={'center'}>
			<Grid desktopL={2} desktopLOffset={1}
					desktop={2} desktopOffset={0.5}
					laptopL={2} laptopLOffset={0.5}
					laptop={2} laptopOffset={0.5}
					tablet={2} tabletOffset={0.5}
			>
				<Logo />
			</Grid>

			<Grid container columns={{ desktopL: 16, desktop: 15.75, laptopL: 13, laptop: 11, tablet: 9 }} sx={{ width: '100%' }}
					desktopL={8} desktopLOffset={3} 
					desktop={8} desktopOffset={2}
					laptopL={6} laptopLOffset={1.5}
					laptop={6} laptopOffset={0.75}
					tablet={4} tabletOffset={1.5}
			>
				{headerButtons.map((buttonText) => {
					return (
						<Grid key={buttonText} display={'flex'} justifyContent={'center'} 
								desktopLOffset={1}
								desktopOffset={0.75}
								laptopLOffset={0.4}
								laptopOffset={0.3}
								tabletOffset={0.1}
						>
							<HeaderButtonsStyle disableRipple key={buttonText} >{buttonText}</HeaderButtonsStyle>
						</Grid>
					);
				})}
			</Grid>

			<Grid container columns={{ desktop: 12 }}
					desktopL={4} desktopLOffset={2}
					desktop={3} desktopOffset={2}
					laptopL={2} laptopLOffset={1.5}
					laptop={2} laptopOffset={1}
					tablet={2} tabletOffset={0.5}
			>
				<Box display={'flex'} alignItems={'center'} sx={{ width: '100%' }}>
					<Grid desktopL={4} desktopLOffset={2}
							desktop={4} desktopOffset={2}
							laptopL={4} laptopLOffset={2}
							laptop={4} laptopOffset={1}
					>
						<HeaderButtonsStyle disableRipple>Login</HeaderButtonsStyle>
					</Grid>
					<Grid desktopL={4} desktopLOffset={2}
							desktop={4} desktopOffset={2}
							laptopL={4} laptopLOffset={2}
							laptop={4} laptopOffset={0.7}
					>
						<HeaderButtonsStyle disableRipple>Register</HeaderButtonsStyle>
					</Grid>
				</Box>
			</Grid>
		</Grid>
		</Box>
	)
}

export default HeaderButtons