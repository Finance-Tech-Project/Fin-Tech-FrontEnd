import React from 'react'
import { Box, Container } from '@mui/material';
import { mainButtons } from '../../../Constants/ProjectConstants/mainButtonsConstants';
import { MainButtonsLink, MainButtonsLinkTextDescr, MainButtonsLinkTextHeader } from '../../../Styles/MainStyles/MainContextStyle';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Constants/MaterialConstants/theme';

const MainButtons = () => {
	return (
		<Box sx={{ width: '100%', paddingTop: '167px' }}>
			<Grid container columns={{ desktopL: 15, desktop: 15, laptopL: 15, laptop: 14 }} sx={{ width: '100%', display: 'flex' }}>
				{mainButtons.map((button) => {
					return (
						<Grid key={button.description} 
							desktopL={4} desktopLOffset={1}
							desktop={4} desktopOffset={1}
							laptopL={4} laptopLOffset={0.92} 
							laptop={4} laptopOffset={0.45}
						>
							<MainButtonsLink key={button.description}>
								<Box >
									<MainButtonsLinkTextDescr>
										{button.description}
									</MainButtonsLinkTextDescr>
									<MainButtonsLinkTextHeader>
										{button.header}
									</MainButtonsLinkTextHeader>
								</Box>
								<Box sx={{ position: 'absolute', right: '28px', top: '20px' }}>
									<button.icon />
								</Box>
							</MainButtonsLink>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	)
}

export default MainButtons