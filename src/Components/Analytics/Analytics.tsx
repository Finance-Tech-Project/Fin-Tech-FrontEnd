/* eslint-disable react-hooks/exhaustive-deps */
import { Box, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header'
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader'
import LightWeightChartForAnalytics from '../TradingViewLightWeightChart/LightWeightChartForAnalytics'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes'
import { AnalyticBlackoutContainer, AnalyticChartContainer, AnalyticContainer } from '../../Styles/AnalyticStyles/AnalyticStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { theme } from '../../Constants/MaterialConstants/theme'
import { createCandlesData, createHistogramLineAreaData } from '../../Functions/dataProcessingFunctions'
import AnalyticChartInteface from './AnalyticChartInteface'
import { getDataForAnalyticChartSimpleIncome, getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions'
import AnalyticDateAndIntervalPickers from './AnalyticDateAndItervalPickers'
import { putSeriesName } from '../../Reducers/chartSeriesReducer'
import { ChartSeriesNames, DefaultPeriods } from '../../Enums/Enums'
import { getDataInInterval } from '../../Functions/utilsFunctions'
import { 
	putMovAvgData, 
	putMovAvgPeriod, 
	putSimpleIncomeData, 
	putSimpleIncomeDataToCompare, 
	putSimpleIncomePeriod, 
	putVolatilityData, 
	putVolatilityDataToCompare, 
	putVolatilityPeriod 
} from '../../Reducers/analyticIterfaceReducer'
import { putSymbolNameToCompare } from '../../Reducers/selectedSymbolReducer'

const Analytics = () => {
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const movAvg = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
	const data = useAppSelector(state => state.historicalDataReducer.dataStock);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const [isClickedToCompare, setIsClickedToCompare] = useState(false);
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const [displaySize, setDisplaySize] = useState(window.screen.width);
	const dispatch = useAppDispatch();

	const getDataTicker = () => {
		const symbolDataInInterval: TickerDataType[] = getDataInInterval(data, interval);
		setTickerVolume(createHistogramLineAreaData(symbolDataInInterval));
		setTickerData(createCandlesData(symbolDataInInterval));
	};

	const handleClickTwoStocksCompare = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsClickedToCompare((prev) => prev !== Boolean(event.currentTarget));
		dispatch(putSimpleIncomePeriod(0));
		dispatch(putVolatilityPeriod(0));
		dispatch(putSimpleIncomeData([]));
		dispatch(putSimpleIncomeDataToCompare([]));
		dispatch(putVolatilityData([]));
		dispatch(putVolatilityDataToCompare([]));	
		dispatch(putSymbolNameToCompare(''));
		dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
		if (movAvg.period > 0) {
			dispatch(putMovAvgData([]));
			dispatch(putMovAvgPeriod(0));
		}
	};

	useEffect(() => {
		if (!isClickedToCompare) {
			dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
		} else {
			dispatch(putSeriesName(ChartSeriesNames.LineSeriesForSimpleIncome));
			dispatch(putSimpleIncomePeriod(0));
			if (symbolName.symbolName && !symbolName.symbolNameToCompare) {
				dispatch(getDataForAnalyticChartSimpleIncome(
					symbolName.symbolName,
					symbolName.symbolNameToCompare,
					DefaultPeriods.SimpleIncomeDefaultPeriod,
					currentDateFrom,
					currentDateTo
				));
			}	
		}
	}, [isClickedToCompare, symbolName.symbolName]);

	useEffect(() => {
		if (getDataInInterval(data, interval).length > 0) {
			getDataTicker();
		}
	}, [symbolName.symbolName, interval, data, getDataInInterval(data, interval).length > 0]);

	useEffect(() => {
		dispatch(getSymbolDataForPeriodRange(symbolName.symbolName, currentDateFrom, currentDateTo));
	}, [symbolName.symbolName, currentDateFrom, currentDateTo]);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setDisplaySize(window.screen.width);
		});
	}, [displaySize]);

	return (
		<ThemeProvider theme={theme}>
			<AnalyticContainer>
				<AnalyticBlackoutContainer>
					<Header />
					<Grid container>
						<Grid
							laptop={11} laptopOffset={0.5}
							laptopL={11} laptopLOffset={0.5}
						>
							<AnalyticChartContainer>
								<Grid
									laptop={11} laptopOffset={0.5}
									laptopL={11} laptopLOffset={0.5}
								>
									<Box sx={{ 
										[theme.breakpoints.up('laptopL')]: {
											paddingBottom: '20px', 
										},
										[theme.breakpoints.up('desktop')]: {
											paddingBottom: '50px', 
										},
										display: 'flex', 
										justifyContent: 'space-between' 
									}}>
										<AnalyticDateAndIntervalPickers
											handleClickTwoStocksCompare={handleClickTwoStocksCompare}
											isClickedToCompare={isClickedToCompare}
										/>
									</Box>
								</Grid>
								<Grid container width="100%">
									<Grid
										laptop={11} laptopOffset={0.5}
										laptopL={8} laptopLOffset={0.5}
										desktop={8} desktopOffset={0.5}
										desktopL={8.5} desktopLOffset={0.5}
									>
										<Box>
											<LightWeightChartHeader isClickedToCompare={isClickedToCompare} data={getDataInInterval(data, interval)} />
											{displaySize < theme.breakpoints.values.laptopL - 1 && <AnalyticChartInteface isClickedToCompare={isClickedToCompare} />}
											<LightWeightChartForAnalytics
												tickerData={tickerData}
												tickerVolume={tickerVolume}
												isClickedToCompare={isClickedToCompare}
											/>
										</Box>
									</Grid>

									{displaySize > theme.breakpoints.values.laptopL - 1 &&
									 <Grid
										laptopL={3}
										desktop={3}
										desktopL={2.5}
									>
										<AnalyticChartInteface isClickedToCompare={isClickedToCompare} />
									</Grid>}
								</Grid>
							</AnalyticChartContainer>
						</Grid>
					</Grid>
				</AnalyticBlackoutContainer>
			</AnalyticContainer>
		</ThemeProvider>
	)
}

export default Analytics