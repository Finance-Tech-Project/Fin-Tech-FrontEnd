import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Logo from './Logo';
import { HeaderButtonsResponsiveContainer, HeaderButtonsStyle, HeaderMenuIconButton, HeaderMenuIconStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Box, Collapse } from '@mui/material'
import { headerButtons, headerButtonsLogin } from '../../../Constants/ProjectConstants/headerConstants';
import { theme } from '../../../Constants/MaterialConstants/theme'
import HeaderResponsive from './HeaderResponsive';

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

	}, [isCklicked]);

	return (
		<Box width="100%">
			<HeaderButtonsResponsiveContainer>
				<Grid container width="100%" columns={{ tablet: 13, mobileL: 8 }} display={'flex'} alignItems={'center'} >
					<Grid mobileSOffset={2}
						mobileMOffset={1.75}
						mobileL={2} mobileLOffset={1.5}
						tablet={5} tabletOffset={0.65}
					>
						<Logo />
					</Grid>
					<Grid width="100%" container display={'flex'} alignItems={'center'} columns={{tablet: 10, mobileL: 15 }}
						mobileMOffset={0.5}
						mobileL={8} mobileLOffset={0.82}
						tablet={4} tabletOffset={2.6}
					>
						{headerButtonsLogin.map((button) => {
							return (
								<Grid key={button}
									mobileSOffset={1.65}
									mobileMOffset={1}
									mobileLOffset={1.2}
									tabletOffset={2}
								>
									<HeaderButtonsStyle key={button} disableRipple>{button}</HeaderButtonsStyle>
								</Grid>
							);
						})}
						<Grid display={'flex'} alignItems={'center'}
							mobileSOffset={0.7}
							mobileMOffset={3}
							mobileL={2} mobileLOffset={4.5}
						>
							{displaySize < theme.breakpoints.values.tablet &&
								<HeaderMenuIconButton disableRipple onClick={handleClick}>
									<HeaderMenuIconStyle />
								</HeaderMenuIconButton>}
						</Grid>
					</Grid>

				</Grid>
				<Grid container columns={{ tablet: 25 }} paddingTop={1}>
					{displaySize > theme.breakpoints.values.tablet - 1 && headerButtons.map((buttonText) => {
						return (
							<Grid key={buttonText.route} 
								tabletOffset={1}
							>
								<HeaderButtonsStyle disableRipple key={buttonText.route} >{buttonText.title}</HeaderButtonsStyle>
							</Grid>
						);
					})}
				</Grid>
			</HeaderButtonsResponsiveContainer>
			<Collapse in={!isCklicked} timeout="auto">
				<HeaderResponsive isCklicked={isCklicked} handleClick={handleClick}></HeaderResponsive>
			</Collapse>
		</Box>
	)
}

export default HeaderButtonsResponsive