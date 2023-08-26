import React from 'react'
import { headerButtons, headerButtonsLogin } from '../../../Constants/ProjectConstants/headerConstants';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { HeaderButtonsStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const HeaderButtons = () => {
	
	return (
		<Box sx={{ flexGrow: 1 }}>

			<Grid container columns={{ desktopL: 21.5, desktop: 18.5, laptopL: 16, laptop: 13.25, tablet: 11.5 }} sx={{ width: '100%' }} display={'flex'} alignItems={'center'}>
				<Grid tablet={2} tabletOffset={0.5}
					laptop={2} laptopOffset={0.2}
					laptopL={2} laptopLOffset={0.7}
					desktop={2} desktopOffset={1}
					desktopL={2} desktopLOffset={1.5}
				>
					<Logo />
				</Grid>

				<Grid container columns={{ desktopL: 19, desktop: 16, laptopL: 15, laptop: 15, tablet: 9 }} sx={{ width: '100%' }}
					tablet={4} tabletOffset={0}
					laptop={8} laptopOffset={0.85}
					laptopL={8} laptopLOffset={1.8}
					desktop={8} desktopOffset={2.5}
					desktopL={8} desktopLOffset={3}	
				>
					{headerButtons.map((buttonText) => {
						return (
							<Grid key={buttonText.title} display={'flex'} justifyContent={'center'}
								tabletOffset={0.1}
								laptopOffset={0.3}
								laptopLOffset={0.4}
								desktopOffset={0.75}
								desktopLOffset={1.2}
							>
								<Link id={buttonText.route} to={`/${buttonText.route}`} key={buttonText.title}>
									<HeaderButtonsStyle disableRipple key={buttonText.route} >{buttonText.title}</HeaderButtonsStyle>
								</Link>
							</Grid>
						);
					})}
				</Grid>

				<Grid container columns={{ desktop: 12 }}
					tablet={2} tabletOffset={0.5}
					laptop={2} laptopOffset={0}
					laptopL={2} laptopLOffset={0.8}
					desktop={3} desktopOffset={2}
					desktopL={4} desktopLOffset={3}
				>
					<Box display={'flex'} alignItems={'center'} sx={{ width: '100%' }}>
						{headerButtonsLogin.map((button) => {
							return (
								<Grid key={button} desktopL={4} desktopLOffset={2}
									desktop={4} desktopOffset={2}
									laptopL={4} laptopLOffset={3}
									laptop={4} laptopOffset={1.5}
								>
									<HeaderButtonsStyle key={button} disableRipple>{button}</HeaderButtonsStyle>
								</Grid>
							);
						})}
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default HeaderButtons