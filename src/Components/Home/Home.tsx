import React from 'react'
import Header from './Header/Header'
import { Box } from '@mui/material'
import TickersCheckbox from '../Statistics/TickersWithCheckbox/TickersCheckbox'
import Tickers from '../Statistics/Tickers/Tickers'
import Main from './Main/Main'

const Home = () => {
	
	return (
		<Box sx={{ width: '100%', height: '96px'}}>
			<Header />
			{/* <TickersCheckbox /> */}
			{/* <Tickers /> */}
			<Main />
		</Box>
	)
}

export default Home