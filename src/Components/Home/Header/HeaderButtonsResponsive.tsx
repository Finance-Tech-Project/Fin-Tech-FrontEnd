import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Logo from './Logo';
import { HeaderButtonsStyle, HeaderMenuIconButton, HeaderMenuIconStyle, HeaderMenuResponsiveContainer } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Box, Collapse } from '@mui/material'
import { headerButtons, headerButtonsLogin } from '../../../Constants/ProjectConstants/headerConstants';
import { theme } from '../../../Constants/MaterialConstants/theme'
import HeaderResponsive from './HeaderResponsive';
import { Link } from 'react-router-dom';

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
			<Box width="100%">
				<Grid container width="100%" columns={{ tablet: 13, mobileL: 11 }} display={'flex'} alignItems={'center'} >
					<Grid tablet={2} tabletOffset={1}
						mobileL={2} mobileLOffset={1}
						mobileMOffset={2.5}
					>
						<Logo />
					</Grid>
					<Grid width="100%" container display={'flex'} alignItems={'center'} 
						tablet={3} tabletOffset={6.5}
						mobileL={4} mobileLOffset={4}
						mobileMOffset={1.4}
					>
						{headerButtonsLogin.map((button) => {
							return (
								<Grid key={button}
									tabletOffset={2}
									mobileLOffset={0.5}
									mobileMOffset={1}
								>
									<HeaderButtonsStyle key={button} disableRipple>{button}</HeaderButtonsStyle>
								</Grid>
							);
						})}
						<Grid display={'flex'} alignItems={'center'}
								mobileLOffset={1}
								mobileMOffset={3}
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
							<Grid key={buttonText.route} tabletOffset={1.65}>
								
									<HeaderButtonsStyle disableRipple key={buttonText.route} >{buttonText.title}</HeaderButtonsStyle>
							
								
							</Grid>
						);
					})}
				</Grid>
			</Box>
			<Collapse  in={!isCklicked} timeout="auto">
				<HeaderResponsive isCklicked={isCklicked} handleClick={handleClick}></HeaderResponsive>
			</Collapse>
		</Box>
	)
}

export default HeaderButtonsResponsive