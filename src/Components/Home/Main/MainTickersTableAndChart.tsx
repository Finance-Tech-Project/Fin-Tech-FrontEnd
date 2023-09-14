import React, { useEffect, useMemo, useState } from 'react'
import { MainTickersTableAndChartBackgroundColor, MainTickersTableAndChartContainer } from '../../../Styles/MainStyles/MainStyles'
import { TickerDataType, TickerDataVolumeType } from '../../../Types/TickersTypes';
import { createCandleData, createColumns, createHistogramAreaData } from '../../../Functions/dataProcessingFunctions';
import MainTickersTitle from './MainTickerTitle';
import { MainTickersTableContainer, MainTickersTableWrapper, MainTickersTextField } from '../../../Styles/MainStyles/MainFindTickerStyle';
import MainTickersTable from './MainTickersTable';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import LightWeightChartHeader from '../../TradingViewLightWeightChart/LightWeightChartHeader';
import LightWeightChart from '../../TradingViewLightWeightChart/LightWeightChart';
import { MAIN_DATA, VOLUME_DATA } from '../../../Constants/fetchConstants';
import { putSymbolCompanyName, putSymbolName } from '../../../Reducers/selectedSymbolReducer';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const MainTickersTableAndChart = () => {
	const { dailyData, weeklyData, monthlyData, yearlyData } = useAppSelector(state => state.historicalDataReducer);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const [data, setData] = useState('');
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType> | undefined>([]);
	const [dateFrom, setDateFrom] = useState<string>('Loading...');
	const [dateTo, setDateTo] = useState<string>('Loading...');
	const [maxPrice, setMaxPrice] = useState<string | number>('Loading...');
	const [minPrice, setMinPrice] = useState<string | number>('Loading...');
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
		const symbolDataInInterval: TickerDataType[] = getDataInInterval();
		if (symbolDataInInterval.length > 0) {
			setTickerVolume(createHistogramAreaData(VOLUME_DATA, symbolDataInInterval));
			setTickerData(createCandleData(MAIN_DATA, symbolDataInInterval));

			setDateFrom(symbolDataInInterval[0].time);
			setDateTo(symbolDataInInterval[symbolDataInInterval.length - 1].time);

			setMaxPrice(symbolDataInInterval[symbolDataInInterval.length - 1].high.toFixed(2));
			setMinPrice(symbolDataInInterval[symbolDataInInterval.length - 1].low.toFixed(2));
		}
	};

	const getDataInInterval = () => {
		return interval === "1D" ? dailyData : interval === "1W" ? weeklyData : interval === "1M" ? monthlyData : interval === "1Y" ? yearlyData : dailyData;
	};

	useEffect(() => {
		setIsLoading(true);
		
		if (getDataInInterval().length > 0) {
			setSymbolData();
		}

		return () => setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, data, interval, symbolName, dailyData, getDataInInterval().length > 0]);

	return (

		<MainTickersTableAndChartContainer>
			<MainTickersTableAndChartBackgroundColor>

				<Box>
					<MainTickersTitle />
					<MainTickersTableContainer>
						<MainTickersTableWrapper>
							<Grid container display={'flex'} width={'100%'} height={'100%'}>
								<Grid sx={{ width: '100%' }}
									tablet={11} tabletOffset={0.5}
								>
									<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
										<MainTickersTextField variant="outlined" onChange={handleChangeData} label="Find your Ticker" />
									</Box>
								</Grid>

								<Grid sx={{ height: '100%' }}
									tablet={11} tabletOffset={0.5}
									laptopL={4} laptopLOffset={0.5}
								>
									<MainTickersTable
										data={data}
										handleRowClick={handleRowClick}
									/>
								</Grid>

								<Grid
									tablet={11} tabletOffset={0.5}
									laptopL={6.5} laptopLOffset={0.5}
								>
									<LightWeightChartHeader
										dateFrom={dateFrom}
										dateTo={dateTo}
										maxPrice={maxPrice}
										minPrice={minPrice}
									/>

									<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume!} />


								</Grid>
							</Grid>
						</MainTickersTableWrapper>
					</MainTickersTableContainer>
				</Box>

			</MainTickersTableAndChartBackgroundColor >
		</MainTickersTableAndChartContainer >
	)
}

export default MainTickersTableAndChart