import {  ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  HeaderContainer } from '../../../Styles/HeaderStyles/HeaderStyles'
import HeaderButtons from './HeaderButtons'
import { theme } from '../../../Constants/MaterialConstants/theme'
import HeaderButtonsResponsive from './HeaderButtonsResponsive'

const Header = () => {
	const [displaySize, setDisplaySize] = useState(window.screen.width);
	
	useEffect(() => {
		window.addEventListener('resize', () => {
			setDisplaySize(window.screen.width);
		});

		
	}, [displaySize]);
	
	return (
		<ThemeProvider theme={theme}>
			<HeaderContainer>
				{ displaySize > theme.breakpoints.values.laptop - 1 ? <HeaderButtons /> : <HeaderButtonsResponsive displaySize={displaySize}/> }
			</HeaderContainer>
		</ThemeProvider>
	)
}

export default Header