import { headerButtons, headerButtonsLogin } from '../../../Constants/ProjectConstants/headerConstants';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { HeaderButtonsStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';

const HeaderButtons = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container  sx={{ width: '100%' }} display={'flex'} alignItems={'center'}>
				<Grid 
					laptop={0.5} laptopOffset={0.5}
					laptopL={0.5} laptopLOffset={0.5}
					desktopL={0.5} desktopLOffset={0.5}
				>
					<Link to={`/home`}>
						<HeaderButtonsStyle disableRipple>
							<Logo />
						</HeaderButtonsStyle>
					</Link>
				</Grid>

				<Grid container  sx={{ width: '100%' }}
						laptop={7} laptopOffset={1.8}
						laptopL={6} laptopLOffset={2.5}
						desktopL={6} desktopLOffset={2}
				>
					{headerButtons.map((buttonText) => {
						return (
							<Grid key={buttonText.route} display={'flex'} justifyContent={'center'}
								laptopOffset={0.2}
								laptopLOffset={0.3}
								desktopOffset={0.5}
								desktopLOffset={1}
							>
								<Link id={buttonText.route} to={`/${buttonText.route}`} key={buttonText.title}>
									<HeaderButtonsStyle disableRipple key={buttonText.route} >{buttonText.title}</HeaderButtonsStyle>
								</Link>
							</Grid>
						);
					})}
				</Grid>

				<Grid container 
					laptop={1} laptopOffset={0.3}
					laptopL={1.5} laptopLOffset={0.5}
					desktopL={1.5} desktopLOffset={1.5}
				>
					<Box display={'flex'} alignItems={'center'} sx={{ width: '100%' }}>
						{headerButtonsLogin.map((button) => {
							return (
								<>
									{
										button.route === 'signIn' &&
										<Grid key={button.route}>
											<Link to={`/${button.route}`}>
												<HeaderButtonsStyle key={button.title} disableRipple>{button.title}</HeaderButtonsStyle>
											</Link>
										</Grid>
									}
								</>
							);
						})}
						<Grid 
							laptopOffset={9}
							laptopLOffset={3}
						>
							<HeaderAvatar />
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default HeaderButtons