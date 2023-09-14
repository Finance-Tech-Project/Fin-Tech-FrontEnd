import React, { useEffect } from 'react'
import Header from './Header/Header'
import { Box } from '@mui/material'
import TickersCheckbox from '../TickersWithCheckbox/TickersCheckbox'
import Main from './Main/Main'
import Footer from '../Footer/Footer'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { TickerDataType } from '../../Types/TickersTypes'
import { useSelector } from 'react-redux'
import { getSymbolDataForDefaultPeriod } from '../../Actions/fetchDispatchActions'

const Home = () => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSymbolDataForDefaultPeriod(symbolName));
	}, [symbolName]);
	
	return (
		<Box sx={{ width: '100%' }}>

			<Header />
			<Main />
			<Footer />


			{/* <TickersCheckbox /> */}
			{/* <Tickers /> */}


		</Box>
	)
}

export default Home