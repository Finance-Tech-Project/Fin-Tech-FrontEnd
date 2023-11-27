import {  ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  HeaderContainer } from '../../../Styles/HeaderStyles/HeaderStyles'
import HeaderButtons from './HeaderButtons'
import { theme } from '../../../Constants/MaterialConstants/theme'
import HeaderButtonsResponsive from './HeaderButtonsResponsive'
import { useAppSelector } from '../../../app/hooks'

const Header = () => {
	const displaySize = useAppSelector(state => state.displaySizeReducer);
	
	return (
		<ThemeProvider theme={theme}>
			<HeaderContainer>
				{ displaySize > theme.breakpoints.values.laptop - 1 ? <HeaderButtons /> 
					: <HeaderButtonsResponsive /> }
			</HeaderContainer>
		</ThemeProvider>
	)
}

export default Header