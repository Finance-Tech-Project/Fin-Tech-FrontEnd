/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Logo from './Logo';
import { HeaderButtonsStyle, HeaderMenuIconButton, HeaderMenuIconStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Box, Collapse } from '@mui/material'
import { theme } from '../../../Constants/MaterialConstants/theme'
import HeaderResponsive from './HeaderResponsive';
import { Link } from 'react-router-dom';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { GridContainerStyle, HeaderButtonsResponsiveContainer } from '../../../Styles/HeaderStyles/HeaderButtonsResponsiveStyle';
import { useAppDispatch } from '../../../app/hooks';
import { userLogout } from '../../../Reducers/userReducer';
import { deleteToken } from '../../../Reducers/tokenReducer';

const HeaderButtonsResponsive = () => {
	const [isClicked, setIsClicked] = useState(true);
	const dispatch = useAppDispatch();

	const handleClickAway = (event: MouseEvent | TouchEvent) => {
		if (event.type === 'click') {
			setIsClicked(true);
		}
	};

	const handleClick = (param: string) => {
		setIsClicked(prev => prev !== isClicked);
		setIsClicked(!isClicked);
		if (param === 'Logout') {
			dispatch(userLogout());
			dispatch(deleteToken());
			sessionStorage.clear();
		}
	};

	useEffect(() => {

	}, [isClicked]);

	return (
		<Box width="100%">
			<HeaderButtonsResponsiveContainer>
				<Grid container sx={() => GridContainerStyle(theme)}>
					<Grid
						mobileS={2} mobileSOffset={1}
					>
						<Link to={`/home`}>
							<HeaderButtonsStyle disableRipple>
								<Logo />
							</HeaderButtonsStyle>
						</Link>
					</Grid>

					<Grid
						mobileS={2} mobileSOffset={6.5}
						tablet={1} tabletOffset={7.5}
					>
						{/* 
							Listener if the click occurs outside of the element and
							call function handleClickAway wich sets the isClicked parameter to true
						*/}
						<ClickAwayListener onClickAway={event => handleClickAway(event)}>
							<HeaderMenuIconButton disableRipple onClick={() => handleClick('')}>
								<HeaderMenuIconStyle />
							</HeaderMenuIconButton>
						</ClickAwayListener>
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