/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Logo from './Logo';
import { HeaderButtonsStyle, HeaderMenuIconButton, HeaderMenuIconStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Box, Collapse } from '@mui/material'
import { headerButtonsLogin } from '../../../Constants/ProjectConstants/headerConstants';
import { theme } from '../../../Constants/MaterialConstants/theme'
import HeaderResponsive from './HeaderResponsive';
import { Link } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { GridContainerStyle, GridLoginMenuContainerStyle, HeaderButtonsResponsiveContainer } from '../../../Styles/HeaderStyles/HeaderButtonsResponsiveStyle';

const HeaderButtonsResponsive = () => {
	const [isClicked, setIsClicked] = useState(true);

	const handleClickAway = (event: MouseEvent | TouchEvent) => {
		if (event.type === 'click') {
			setIsClicked(true);
		} 
	};

	const handleClick = () => {
		
		setIsClicked(prev => prev !== isClicked)
		
	};

	useEffect(() => {

	}, [isClicked]);
	// console.log(isClicked);
	return (
		<Box width="100%">
			<HeaderButtonsResponsiveContainer>
				<Grid container sx={() => GridContainerStyle(theme)}>
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

					<Grid container sx={() => GridLoginMenuContainerStyle(theme)}
						mobileL={6} mobileLOffset={1.5}
						tablet={4} tabletOffset={2.5}
					>
						<Grid mobileMOffset={1}>
							<Link to={`/${headerButtonsLogin[0].route}`}>
								<HeaderButtonsStyle disableRipple>{headerButtonsLogin[0].title}</HeaderButtonsStyle>
							</Link>
						</Grid>

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
							{/* 
								Listener if the click occurs outside of the element and
								call function handleClickAway wich sets the isClicked parameter to true
							*/}
							<ClickAwayListener onClickAway={event => handleClickAway(event)}>
								<HeaderMenuIconButton disableRipple onClick={handleClick}>
									<HeaderMenuIconStyle />
								</HeaderMenuIconButton>
							</ClickAwayListener>

						</Grid>
					</Grid>
				</Grid>
			</HeaderButtonsResponsiveContainer>

			{!isClicked && (
				<Collapse in={!isClicked} timeout="auto">
					<HeaderResponsive isClicked={isClicked} handleClick={handleClick}></HeaderResponsive>
				</Collapse>
			)}
		</Box>
	)
}

export default HeaderButtonsResponsive