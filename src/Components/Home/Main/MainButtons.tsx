import { mainButtons } from '../../../Constants/ProjectConstants/mainButtonsConstants';
import { MainButtonsContainer, MainButtonsLink, MainButtonsLinkIconNumberContainer, MainButtonsLinkTextContainer, MainButtonsLinkTextDescr, MainButtonsLinkTextHeader } from '../../../Styles/MainStyles/MainContextStyle';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const MainButtons = () => {
	return (
		<MainButtonsContainer>
			<Grid container columns={{ desktopL: 16.5, desktop: 15, laptopL: 15, laptop: 13.5, tablet: 10 }} sx={{ width: '100%', display: 'flex' }}>
				{mainButtons.map((button) => {
					return (
						<Grid key={button.description}
							laptop={4} laptopOffset={0.5}
							laptopL={4} laptopLOffset={0.93}
							desktop={4} desktopOffset={1}
							desktopL={4} desktopLOffset={1.45}
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
		</MainButtonsContainer>
	)
}

export default MainButtons