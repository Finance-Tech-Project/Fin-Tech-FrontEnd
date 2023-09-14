import React, { useEffect, useMemo, useState } from 'react'
import { StocksChartContainer, StocksChartSearchTickerContainer, StocksAutocomplete } from '../../Styles/StocksStyles/StocksChartStyle';
import { CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { TickerDataType, TickerDataVolumeType, TickerType } from '../../Types/TickersTypes';
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader';
import LightWeightChart from '../TradingViewLightWeightChart/LightWeightChart';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';

import { getAllTickers } from '../../Actions/fetchActions';
import { putSymbolCompanyName, putSymbolName } from '../../Reducers/selectedSymbolReducer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createCandleData, createHistogramAreaData } from '../../Functions/dataProcessingFunctions';
import { MAIN_DATA, VOLUME_DATA } from '../../Constants/fetchConstants';


interface AutocompleteOption {
	name: string,
	companyName: string
}

const StocksChart = () => {
	const { dailyData, weeklyData, monthlyData, yearlyData } = useAppSelector(state => state.historicalDataReducer);
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const [open, setOpen] = useState(false);
	const [autocompleteTickers, setAutocompleteTickers] = useState<AutocompleteOption[]>([]);
	const loading = open && autocompleteTickers.length === 0;
	const dispatch = useAppDispatch();
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const [dateFrom, setDateFrom] = useState<string>('Loading...');
	const [dateTo, setDateTo] = useState<string>('Loading...');
	const [maxPrice, setMaxPrice] = useState<string | number>('Loading...');
	const [minPrice, setMinPrice] = useState<string | number>('Loading...');

	const getTickers = async () => {
		const allTickers: Array<TickerType> | undefined = await getAllTickers();
		const res: AutocompleteOption[] | undefined = allTickers?.map((ticker) => {
			const autocompleteTickers: AutocompleteOption = {
				name: ticker.name,
				companyName: ticker.companyName
			}
			return autocompleteTickers;
		});
		setAutocompleteTickers(res!);
	};

	const handleChangeTickerValue = (event: React.SyntheticEvent<Element, Event>) => {
		dispatch(putSymbolName(event.currentTarget.childNodes[0].nodeValue!));
		if (!event.currentTarget.childNodes[0].nodeValue!) {
			dispatch(putSymbolName("AAPL"));
			dispatch(putSymbolCompanyName("Apple Inc."));
		}
		autocompleteTickers.forEach((ticker) => {
			console.log(event.currentTarget.childNodes	)
			if (ticker.name === event.currentTarget.childNodes[0].nodeValue!) {
				dispatch(putSymbolCompanyName(ticker.companyName));
			}
		})
	};

	const getDataTicker = () => {
		const symbolDataInInterval: TickerDataType[] = getDataInInterval();
		setTickerVolume(createHistogramAreaData(VOLUME_DATA, getDataInInterval()));
		setTickerData(createCandleData(MAIN_DATA, getDataInInterval()));

		setDateFrom(symbolDataInInterval[0].time);
		setDateTo(symbolDataInInterval[symbolDataInInterval.length - 1].time);

		setMaxPrice(symbolDataInInterval[symbolDataInInterval.length - 1].high.toFixed(2));
		setMinPrice(symbolDataInInterval[symbolDataInInterval.length - 1].low.toFixed(2));
	};

	const getDataInInterval = () => {
		return interval === "1D" ? dailyData : interval === "1W" ? weeklyData : interval === "1M" ? monthlyData : interval === "1Y" ? yearlyData : dailyData;
	};

	useMemo(() => {
		return getTickers();
	}, []);

	useEffect(() => {
		if (getDataInInterval().length > 0) {
			getDataTicker();
		}

	}, [symbolName, interval, dailyData, getDataInInterval().length > 0]);

	return (
		<StocksChartContainer>
			<StocksChartSearchTickerContainer>
				<StocksAutocomplete
					onChange={(event) => handleChangeTickerValue(event)}
					PaperComponent={Paper}
					componentsProps={{
						paper: {
							sx: {
								bgcolor: "rgba(44, 9, 81, 1)",
								color: 'white'
							}
						}
					}}
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
					loading={loading}
					disablePortal
					getOptionLabel={(option: any) => (option.name || option.companyName) ?? option}
					isOptionEqualToValue={(option: any) => option.name}
					options={autocompleteTickers}
					noOptionsText={<Typography sx={{ color: 'white' }}>No tickers found</Typography>}
					loadingText={<Typography sx={{ color: 'white' }}>Loading...</Typography>}
					renderInput={(params) =>
						<TextField {...params} key={params.id} label="Tickers"
							InputProps={{
								...params.InputProps,
								endAdornment: (
									<React.Fragment>
										{loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : null}
										{params.InputProps.endAdornment}
									</React.Fragment>
								)
							}}
						/>
					}
				/>
				<MainButton marginTop>Add to portfolio</MainButton>
			</StocksChartSearchTickerContainer>

			<LightWeightChartHeader dateFrom={dateFrom} dateTo={dateTo} maxPrice={maxPrice} minPrice={minPrice} />
			<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume} />
		</StocksChartContainer>
	)
}

export default StocksChart