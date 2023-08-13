import React from 'react'
import Header from './Header/Header'
import { Box } from '@mui/material'
import { HeaderContainer } from '../../Styles/HeaderStyles/HeaderStyles'
import Tickers from '../Statistics/Tickers/Tickers'

const Home = () => {
	return (
		<Box sx={{ width: '100%', height: '96px'}}>
			<Header />
			<Tickers />
		</Box>
		

	)
}

export default Home