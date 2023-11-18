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
	putSharpRatioData,
	putSharpRatioDataToCompare,
	putSharpRatioPeriod,
	putSimpleIncomeData,
	putSimpleIncomeDataToCompare,
	putSimpleIncomePeriod,
	putVolatilityData,
	putVolatilityDataToCompare,
	putVolatilityPeriod
} from '../../Reducers/analyticIterfaceReducer'
import { putSymbolNameToCompare } from '../../Reducers/selectedSymbolReducer'
import { Symbols } from '../../Types/DataReducerTypes'
import { AnalyticInterface } from '../../Types/AnalyticTypes'
import Footer from '../Footer/Footer'

const Analytics = () => {
	const seriesName: ChartSeriesNames = useAppSelector(state => state.chartSeriesReducer.seriesName);
	const symbolName: Symbols = useAppSelector(state => state.selectedSymbolReducer);
	const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
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
	// On click compare two stocks is rendered analytic chart with two simbols to compare.
	const handleClickTwoStocksCompare = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		// We sets to switcher button value to reverse.
		setIsClickedToCompare((prev) => prev !== Boolean(event.currentTarget));
		// If do not set series name, we set is series name to default(simple income series)
		// and give fetch to data simple income with default period(2 years).
		if (seriesName === ChartSeriesNames.CandlesSeries) {
			dispatch(putSimpleIncomePeriod(DefaultPeriods.SimpleIncomeDefaultPeriod));
			dispatch(getDataForAnalyticChartSimpleIncome(
				symbolName.symbolName,
				symbolName.symbolNameToCompare,
				DefaultPeriods.SimpleIncomeDefaultPeriod,
				currentDateFrom,
				currentDateTo
			));
		}
		// If during the transition, we have move average data is not empty or period not zero, 
		// we set data to empty and period to zero for move average.
		if (movAvg.period > 0) {
			dispatch(putMovAvgData([]));
			dispatch(putMovAvgPeriod(0));
		}
	};
	// On click analytic chart, we during the transition back to analytic chart with one symbol and
	// sets all data calculations to empty and all periods to zero and for symbol name to compare set to empty string.	
	const handleClickAnalyticChart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		// We sets to switcher button value to reverse.
		setIsClickedToCompare((prev) => prev !== Boolean(event.currentTarget));
		dispatch(putSimpleIncomePeriod(0));
		dispatch(putVolatilityPeriod(0));
		dispatch(putSharpRatioPeriod(0));
		dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
		dispatch(putSymbolNameToCompare(''));
		dispatch(putSimpleIncomeData([]));
		dispatch(putSimpleIncomeDataToCompare([]));
		dispatch(putVolatilityData([]));
		dispatch(putVolatilityDataToCompare([]));
		dispatch(putSharpRatioData([]));
		dispatch(putSharpRatioDataToCompare([]));
	};

	useEffect(() => {
		if (!isClickedToCompare) {
			dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
		} else {
			if (seriesName === ChartSeriesNames.CandlesSeries) {
				dispatch(putSeriesName(ChartSeriesNames.LineSeriesForSimpleIncome));
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
				<Header />
				<AnalyticBlackoutContainer>
					<Grid container sx={{width: '100%'}}>
						<Grid
							mobileS={11} mobileSOffset={0.5}
							laptop={11} laptopOffset={0.5}
							laptopL={11} laptopLOffset={0.5}
						>
							<AnalyticChartContainer>
								<Grid
									laptop={11} laptopOffset={0.5}
									laptopL={11} laptopLOffset={0.5}
								>
									<Box sx={{
										[theme.breakpoints.up('laptop')]: {
											paddingBottom: '10px',
										},
										[theme.breakpoints.up('laptopL')]: {
											paddingBottom: '50px',
										},
										display: 'flex',
										justifyContent: 'space-between'
									}}>
										<AnalyticDateAndIntervalPickers
											handleClickTwoStocksCompare={handleClickTwoStocksCompare}
											handleClickAnalyticChart={handleClickAnalyticChart}
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
				<Footer />
			</AnalyticContainer>
		</ThemeProvider>
	)
}

export default Analytics