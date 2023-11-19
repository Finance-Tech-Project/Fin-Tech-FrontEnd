/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import Header from './Header/Header'
import { Box } from '@mui/material'
// import TickersCheckbox from '../TickersWithCheckbox/TickersCheckbox'
import Main from './Main/Main'
import Footer from '../Footer/Footer'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getSymbolDataForDefaultPeriod } from '../../Actions/fetchDispatchActions'

const Home = () => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const dispatch = useAppDispatch();

	useMemo(() => {
		dispatch(getSymbolDataForDefaultPeriod(symbolName));
	}, [symbolName, currentDateFrom, currentDateTo]);

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