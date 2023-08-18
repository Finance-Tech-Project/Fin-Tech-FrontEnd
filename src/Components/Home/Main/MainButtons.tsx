import React from 'react'
import { Box, Container } from '@mui/material';
import { mainButtons } from '../../../Constants/ProjectConstants/mainButtonsConstants';
import { MainButtonsLink, MainButtonsLinkIconNumberContainer, MainButtonsLinkTextContainer, MainButtonsLinkTextDescr, MainButtonsLinkTextHeader } from '../../../Styles/MainStyles/MainContextStyle';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Constants/MaterialConstants/theme';
import { DisplaySizeProps } from '../../../Types/MainComponentTypes/MainTypes';

const MainButtons = () => {
	return (
		<Box sx={{ width: '100%', paddingTop: '167px' }}>
			<Grid container columns={{ desktopL: 15, desktop: 15, laptopL: 15, laptop: 13.5, tablet: 10 }} sx={{ width: '100%', display: 'flex' }}>
				{mainButtons.map((button) => {
					return (
						<Grid key={button.description}
							desktopL={4} desktopLOffset={1}
							desktop={4} desktopOffset={1}
							laptopL={4} laptopLOffset={0.92}
							laptop={4} laptopOffset={0.45}
							tablet={3} tabletOffset={0.33}
						>
							<MainButtonsLink key={button.description}>
								<MainButtonsLinkTextContainer >
									<MainButtonsLinkTextDescr>
										{button.description}
									</MainButtonsLinkTextDescr>
									<MainButtonsLinkTextHeader>
										{button.header}
									</MainButtonsLinkTextHeader>
								</MainButtonsLinkTextContainer>
								<MainButtonsLinkIconNumberContainer>
									<button.icon />
								</MainButtonsLinkIconNumberContainer>
							</MainButtonsLink>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	)
}

export default MainButtons