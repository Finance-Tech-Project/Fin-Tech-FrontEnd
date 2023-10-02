/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, ThemeProvider } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import Header from '../Home/Header/Header'
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader'
import LightWeightChartForAnalytics from '../TradingViewLightWeightChart/LightWeightChartForAnalytics'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getDataForAnalyticChartAvg, getDataForAnalyticChartSimpleIncome } from '../../Actions/fetchActions'
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes'
import { AnalyticBlackoutContainer, AnalyticContainer } from '../../Styles/AnalyticStyles/AnalyticStyle'
import { StocksChartContainer } from '../../Styles/StocksStyles/StocksChartStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { theme } from '../../Constants/MaterialConstants/theme'
import { createCandlesData, createHistogramLineAreaData } from '../../Functions/dataProcessingFunctions'
import AnalyticChartInteface from './AnalyticChartInteface'
import { AnalyticInterface } from '../../Types/AnalyticTypes'
import { getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions'
import AnalyticOneStockAutocomplete from './AnalyticOneStockAutocomplete'
import AnalyticDateAndIntervalPickers from './AnalyticDateAndItervalPickers'
import { putSeriesName } from '../../Reducers/chartSeriesReducer'
import { ChartSeriesNames } from '../../Enums/Enums'
import { getDataInInterval } from '../../Functions/utilsFunctions'

const Analytics = () => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const data = useAppSelector(state => state.historicalDataReducer.dataStock);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const interval = useAppSelector(state => state.intervalDataReducer);

	
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const dispatch = useAppDispatch();

	const getDataTicker = () => {
		const symbolDataInInterval: TickerDataType[] = getDataInInterval(data, interval);
		setTickerVolume(createHistogramLineAreaData(symbolDataInInterval));
		setTickerData(createCandlesData(symbolDataInInterval));
	};

	useMemo(() => {
		dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
	}, [dispatch]);

	useEffect(() => {
		if (getDataInInterval(data, interval).length > 0) {
			getDataTicker();
		}
	}, [symbolName, interval, data, getDataInInterval(data, interval).length > 0]);

	useEffect(() => {
		dispatch(getSymbolDataForPeriodRange(symbolName, currentDateFrom, currentDateTo, 1));
	}, [symbolName, currentDateFrom, currentDateTo]);

	return (
		<ThemeProvider theme={theme}>
			<AnalyticContainer>
				<AnalyticBlackoutContainer>
					<Header />
					<Grid container>
						<Grid
							desktop={11} desktopOffset={0.5}
							desktopL={11} desktopLOffset={0.5}
						>
							<StocksChartContainer>
								<Grid
									desktop={11} desktopOffset={0.5}
									desktopL={11} desktopLOffset={0.5}
								>
									<Box sx={{ paddingBottom: '50px', display: 'flex', justifyContent: 'space-between' }}>
										<AnalyticOneStockAutocomplete />
										<AnalyticDateAndIntervalPickers />
									</Box>
								</Grid>
								<Grid container width="100%">
									<Grid
										desktop={8} desktopOffset={0.5}
										desktopL={8.5} desktopLOffset={0.5}
									>
									
											<Box>
												<LightWeightChartHeader data={getDataInInterval(data, interval)}/>
												<LightWeightChartForAnalytics
													tickerData={tickerData}
													tickerVolume={tickerVolume}
												/>
											</Box>
									
									</Grid>

									<Grid 
										desktop={3} 
										desktopL={2.5} 
									>
										<AnalyticChartInteface />
									</Grid>
								</Grid>

							</StocksChartContainer>

						</Grid>
					</Grid>
				</AnalyticBlackoutContainer>
			</AnalyticContainer>
		</ThemeProvider>
	)
}

export default Analytics