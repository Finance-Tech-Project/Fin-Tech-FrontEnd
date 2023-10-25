import React, { useEffect, useState } from 'react'
import { MainTickersTableAndChartBackgroundColor, MainTickersTableAndChartContainer } from '../../../Styles/MainStyles/MainStyles'
import { TickerDataType, TickerDataVolumeType } from '../../../Types/TickersTypes';
import MainTickersTitle from './MainTickerTitle';
import { MainTickersTableContainer, MainTickersTableWrapper, MainTickersTextField } from '../../../Styles/MainStyles/MainFindTickerStyle';
import MainTickersTable from './MainTickersTable';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import LightWeightChartHeader from '../../TradingViewLightWeightChart/LightWeightChartHeader';
import LightWeightChart from '../../TradingViewLightWeightChart/LightWeightChart';
import { putSymbolCompanyName, putSymbolName } from '../../../Reducers/selectedSymbolReducer';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getDataInInterval } from '../../../Functions/utilsFunctions';
import { createCandlesData, createHistogramLineAreaData } from '../../../Functions/dataProcessingFunctions';

const MainTickersTableAndChart = () => {
	const historicalData = useAppSelector(state => state.historicalDataReducer.dataStock);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const [data, setData] = useState('');
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType> | undefined>([]);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();

	const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData(event.target.value)
	};

	const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
		dispatch(putSymbolName(event.currentTarget.childNodes[0].firstChild?.nodeValue!));
		dispatch(putSymbolCompanyName(event.currentTarget.childNodes[1].firstChild?.nodeValue!));
	};

	const setSymbolData = () => {
		const symbolDataInInterval: TickerDataType[] = getDataInInterval(historicalData, interval);
		if (symbolDataInInterval.length > 0) {
			setTickerVolume(createHistogramLineAreaData(symbolDataInInterval));
			setTickerData(createCandlesData(symbolDataInInterval));
		}
	};

	useEffect(() => {
		setIsLoading(true);
		if (getDataInInterval(historicalData, interval).length > 0) {
			setSymbolData();
		}
		return () => setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, data, interval, symbolName, historicalData, getDataInInterval(historicalData, interval).length > 0]);

	return (

		<MainTickersTableAndChartContainer>
			<MainTickersTableAndChartBackgroundColor>
				<Box>
					<MainTickersTitle />
					<MainTickersTableContainer>
						<Grid container width="100%">
							<Grid mobileS={11} mobileSOffset={0.5}>
								<MainTickersTableWrapper>
									<Grid container display={'flex'} width={'100%'} height={'100%'}>
										<Grid mobileS={11} mobileSOffset={0.5}>
											<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
												<MainTickersTextField variant="outlined" onChange={handleChangeData} label="Find your Ticker" />
											</Box>
										</Grid>

										<Grid sx={{ height: '100%' }}
											mobileS={11} mobileSOffset={0.5}
											laptopL={4} laptopLOffset={0.5}
										>
											<MainTickersTable
												data={data}
												handleRowClick={handleRowClick}
											/>
										</Grid>

										<Grid
											mobileS={11} mobileSOffset={0.5}
											laptopL={6.5} laptopLOffset={0.5}
										>
											<LightWeightChartHeader
												data={getDataInInterval(historicalData, interval)}
											/>
											<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume!} />
										</Grid>
									</Grid>
								</MainTickersTableWrapper>

							</Grid>
						</Grid>

					</MainTickersTableContainer>
				</Box>
			</MainTickersTableAndChartBackgroundColor >
		</MainTickersTableAndChartContainer >
	)
}

export default MainTickersTableAndChart