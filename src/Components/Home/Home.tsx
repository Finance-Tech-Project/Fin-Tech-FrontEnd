import React, { useEffect } from 'react'
import Header from './Header/Header'
import { Box } from '@mui/material'
import TickersCheckbox from '../TickersWithCheckbox/TickersCheckbox'
import Tickers from '../Tickers/Tickers'
import Main from './Main/Main'
import Footer from '../Footer/Footer'

const Home = () => {
	
	return (
		<Box sx={{ width: '100%'}}>
			<Header />
			{/* <TickersCheckbox /> */}
			{/* <Tickers /> */}
			<Main />
			<Footer />
		</Box>
	)
}

export default Home