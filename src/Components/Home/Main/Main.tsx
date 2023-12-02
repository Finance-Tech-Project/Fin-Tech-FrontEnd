import React, { useEffect, useMemo, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MainBackgroundColor, MainContainer } from '../../../Styles/MainStyles/MainStyles';
import MainContext from './MainContext';
import { ThemeProvider } from '@mui/material';
import MainButtons from './MainButtons';
import { theme } from '../../../Constants/MaterialConstants/theme';
import MainTickersTableAndChart from './MainTickersTableAndChart';
import { putSeriesName } from '../../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../../Enums/Enums';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const Main = () => {
	const displaySize = useAppSelector(state => state.generalAppReducer.displaySize);
	const dispatch = useAppDispatch();
	
	useMemo(() => {
		dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<Grid container>
				<MainContainer>
					<MainBackgroundColor>
						<MainContext />
						{displaySize > theme.breakpoints.values.laptop - 1 && <MainButtons />}
					</MainBackgroundColor>
				</MainContainer>
				<MainTickersTableAndChart />
			</Grid>
		</ThemeProvider>
	)
}

export default Main