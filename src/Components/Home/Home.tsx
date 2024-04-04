/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Header from './Header/Header'
import { Box } from '@mui/material'
// import TickersCheckbox from '../TickersWithCheckbox/TickersCheckbox'
import Main from './Main/Main'
import Footer from '../Footer/Footer'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getSymbolDataForDefaultPeriod } from '../../Actions/fetchDispatchActions'
import { setDefaultDate } from '../../Reducers/dateDataReducer'

const Home = () => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setDefaultDate());
		dispatch(getSymbolDataForDefaultPeriod(symbolName));
	}, [symbolName, currentDateFrom, currentDateTo]);

	return (
		<Box sx={{ width: '100%' }}>
			<Header />
			<Main />
			<Footer />
		</Box>
	)
}

export default Home