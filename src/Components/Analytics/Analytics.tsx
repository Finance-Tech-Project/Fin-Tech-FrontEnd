/* eslint-disable react-hooks/exhaustive-deps */
import { Box, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header'
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader'
import LightWeightChartForAnalytics from '../TradingViewLightWeightChart/LightWeightChartForAnalytics'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes'
import { AnalyticBlackoutContainer, AnalyticContainer } from '../../Styles/AnalyticStyles/AnalyticStyle'
import { StocksChartContainer } from '../../Styles/StocksStyles/StocksChartStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { theme } from '../../Constants/MaterialConstants/theme'
import { createCandlesData, createHistogramLineAreaData } from '../../Functions/dataProcessingFunctions'
import AnalyticChartInteface from './AnalyticChartInteface'
import { getDataForAnalyticChartSimpleIncome, getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions'
import AnalyticOneStockAutocomplete from './AnalyticOneStockAutocomplete'
import AnalyticDateAndIntervalPickers from './AnalyticDateAndItervalPickers'
import { putSeriesName } from '../../Reducers/chartSeriesReducer'
import { ChartSeriesNames, SimpleIncomeDefaultPeriod } from '../../Enums/Enums'
import { getDataInInterval } from '../../Functions/utilsFunctions'
import AnalyticTwoStocksAutocomplete from './AnalyticTwoStocksAutocomplete'
import { putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer'


const Analytics = () => {
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const data = useAppSelector(state => state.historicalDataReducer.dataStock);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const [isClickedToCompare, setIsClickedToCompare] = useState(false);
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const dispatch = useAppDispatch();

	const getDataTicker = () => {
		const symbolDataInInterval: TickerDataType[] = getDataInInterval(data, interval);
		setTickerVolume(createHistogramLineAreaData(symbolDataInInterval));
		setTickerData(createCandlesData(symbolDataInInterval));
	};

	const handleClickTwoStocksCompare = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsClickedToCompare((prev) => prev !== Boolean(event.currentTarget));
		dispatch(putSimpleIncomePeriod(0));
	};

	useEffect(() => {
		if (!isClickedToCompare) {
			dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
		} else {
			dispatch(putSeriesName(ChartSeriesNames.LineSeriesForSimpleIncome));
			dispatch(putSimpleIncomePeriod(0));
			dispatch(getDataForAnalyticChartSimpleIncome(
                symbolName.symbolName, 
                symbolName.symbolNameToCompare, 
                SimpleIncomeDefaultPeriod.Period, 
                currentDateFrom, 
                currentDateTo
            ));
		}
	}, [isClickedToCompare, symbolName.symbolName, symbolName.symbolNameToCompare]);

	useEffect(() => {
		if (getDataInInterval(data, interval).length > 0) {
			getDataTicker();
		}
	}, [symbolName.symbolName, interval, data, getDataInInterval(data, interval).length > 0]);

	useEffect(() => {
		dispatch(getSymbolDataForPeriodRange(symbolName.symbolName, currentDateFrom, currentDateTo));
	}, [symbolName.symbolName, currentDateFrom, currentDateTo]);
	
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
										{!isClickedToCompare ? <AnalyticOneStockAutocomplete /> : <AnalyticTwoStocksAutocomplete />}
										<AnalyticDateAndIntervalPickers
											handleClickTwoStocksCompare={handleClickTwoStocksCompare}
											isClickedToCompare={isClickedToCompare}
										/>
									</Box>
								</Grid>
								<Grid container width="100%">
									<Grid
										desktop={8} desktopOffset={0.5}
										desktopL={8.5} desktopLOffset={0.5}
									>
										<Box>
											<LightWeightChartHeader data={getDataInInterval(data, interval)} />
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
										<AnalyticChartInteface isClickedToCompare={isClickedToCompare} />
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