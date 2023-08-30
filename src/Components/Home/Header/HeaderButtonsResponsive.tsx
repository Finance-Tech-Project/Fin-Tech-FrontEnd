import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Logo from './Logo';
import { HeaderButtonsResponsiveContainer, HeaderButtonsStyle, HeaderMenuIconButton, HeaderMenuIconStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Box, Collapse, Menu, MenuItem, Modal } from '@mui/material'
import { headerButtons, headerButtonsLogin } from '../../../Constants/ProjectConstants/headerConstants';
import { theme } from '../../../Constants/MaterialConstants/theme'
import HeaderResponsive from './HeaderResponsive';
import { Link } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';

interface SizeProps {
	displaySize: number
}

const HeaderButtonsResponsive = ({ displaySize }: SizeProps) => {
	const [isCklicked, setIsClicked] = useState(true);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsClicked(Boolean(event.currentTarget.value));
		setIsClicked(!isCklicked);
	};

	useEffect(() => {
		window.addEventListener('click', (event) => {
			console.log(event.target)
		})
	}, [isCklicked]);

	return (
		<Box width="100%">
			<HeaderButtonsResponsiveContainer>
				<Grid container width="100%" display={'flex'} alignItems={'center'} sx={{
					[theme.breakpoints.up('mobileS')]: {
						display: 'flex',
						justifyContent: 'center'
					},
				}}>
					<Grid
						mobileL={4} mobileLOffset={0.5}
						tablet={4} tabletOffset={1}
					>
						<Link to={`/home`}>
							<HeaderButtonsStyle disableRipple>
								<Logo />
							</HeaderButtonsStyle>
						</Link>
					</Grid>

					<Grid width="100%" container display={'flex'} alignItems={'center'} sx={{
						[theme.breakpoints.up('mobileS')]: {
							display: 'flex',
							justifyContent: 'space-around'
						},
					}}
						mobileL={6} mobileLOffset={1.5}
						tablet={4} tabletOffset={2.5}
					>
						{headerButtonsLogin.map((button) => {
							return (
								<>
									{
										button.route === 'signIn' &&
										<Grid key={button.title}
											mobileMOffset={1}
										>
											<Link key={button.title} to={`/${button.route}`}>
												<HeaderButtonsStyle key={button.title} disableRipple>{button.title}</HeaderButtonsStyle>
											</Link>
										</Grid>
									}
								</>

							);
						})}
						<Grid
							mobileMOffset={0.5}
							mobileLOffset={0.5}
							tabletOffset={1}
						>
							<HeaderAvatar />
						</Grid>


						<Grid display={'flex'} alignItems={'center'}
							mobileLOffset={0}
							tabletOffset={0.5}
						>
							<HeaderMenuIconButton disableRipple onClick={handleClick}>
								<HeaderMenuIconStyle />
							</HeaderMenuIconButton>
						</Grid>
					</Grid>
				</Grid>
			</HeaderButtonsResponsiveContainer>

			<Collapse in={!isCklicked} timeout="auto">
				<HeaderResponsive isCklicked={isCklicked} handleClick={handleClick}></HeaderResponsive>
			</Collapse>
		</Box>
	)
}

export default HeaderButtonsResponsive