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
import { createCandleData, createHistogramAreaData, getDataInInterval } from '../../Functions/dataProcessingFunctions'
import { MAIN_DATA, VOLUME_DATA } from '../../Constants/fetchConstants'
import AnalyticChartInteface from './AnalyticChartInteface'
import { AnalyticInterface } from '../../Types/AnalyticTypes'
import { getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions'
import AnalyticOneStockAutocomplete from './AnalyticOneStockAutocomplete'
import AnalyticDateAndIntervalPickers from './AnalyticDateAndItervalPickers'

const Analytics = () => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const data = useAppSelector(state => state.historicalDataReducer.dataStock);
	const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
	const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const interval = useAppSelector(state => state.intervalDataReducer);

	const [analyticChartData, setAnalyticChartData] = useState<any[]>([]);
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const dispatch = useAppDispatch();

	const getDataTicker = () => {
		const symbolDataInInterval: TickerDataType[] = getDataInInterval(data, interval);
		setTickerVolume(createHistogramAreaData(VOLUME_DATA, symbolDataInInterval));
		setTickerData(createCandleData(MAIN_DATA, symbolDataInInterval));
	};

	const getData = async () => {

		const data = await getDataForAnalyticChartAvg(symbolName, movAvg.period, currentDateFrom, currentDateTo);
		data && setAnalyticChartData(data);

		if (simpleIncome.period > 0) {
			const data = await getDataForAnalyticChartSimpleIncome(symbolName, simpleIncome.period, currentDateFrom, currentDateTo);
			data && setAnalyticChartData(data);
		}
	};

	useMemo(() => {
		getData();
	}, [symbolName, movAvg.period, currentDateFrom, currentDateTo, simpleIncome.period]);

	useEffect(() => {
		if (getDataInInterval(data, interval).length > 0) {
			getDataTicker();
		}
	}, [symbolName, interval, data, getDataInInterval(data, interval).length > 0, movAvg.period]);

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
							desktopL={11} desktopLOffset={0.5}
						>
							<StocksChartContainer>
								<Box sx={{ paddingBottom: '50px', display: 'flex', justifyContent: 'space-between' }}>
									<AnalyticOneStockAutocomplete />
									<AnalyticDateAndIntervalPickers />
								</Box>
								{analyticChartData.length === 0 ? (
									<Box sx={{ display: 'flex', width: '100%', height: '640px', justifyContent: 'center', alignItems: 'center' }}>
										<CircularProgress sx={{ color: 'white' }} size={60} />
									</Box>
								) : (
									<React.Fragment>
										<LightWeightChartHeader data={getDataInInterval(data, interval)} />
										<Box sx={{ display: 'flex' }}>
											<LightWeightChartForAnalytics
												data={analyticChartData}
												tickerData={tickerData}
												tickerVolume={tickerVolume}
											/>
											<AnalyticChartInteface  />
										</Box>
									</React.Fragment>
								)}
							</StocksChartContainer>
						</Grid>
					</Grid>
				</AnalyticBlackoutContainer>
			</AnalyticContainer>
		</ThemeProvider>
	)
}

export default Analytics