import React, { useEffect, useMemo, useState } from 'react'
import { StocksChartContainer, StocksChartSearchTickerContainer, StocksAutocomplete } from '../../Styles/StocksStyles/StocksChartStyle';
import { Box, Button, CircularProgress, Divider, FormControl, Paper, TextField, Typography, createFilterOptions } from '@mui/material';
import { TickerDataType, TickerDataVolumeType, TickerType } from '../../Types/TickersTypes';
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader';
import LightWeightChart from '../TradingViewLightWeightChart/LightWeightChart';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';
import { getSeacrhedSymbols } from '../../Actions/fetchActions';
import { putSymbolCompanyName, putSymbolName } from '../../Reducers/selectedSymbolReducer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createCandleData, createHistogramAreaData, findMaxMinPrice, getDataInInterval } from '../../Functions/dataProcessingFunctions';
import { MAIN_DATA, VOLUME_DATA } from '../../Constants/fetchConstants';
import { makeStyles, createStyles } from '@mui/styles';

interface AutocompleteOption {
	name: string,
	companyName: string
}

interface Props {
	handleClickStatistics: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StocksChart = ({ handleClickStatistics }: Props) => {
	const data = useAppSelector(state => state.historicalDataReducer.dataStock);
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const [autocompleteTickers, setAutocompleteTickers] = useState<AutocompleteOption[]>([]);
	const dispatch = useAppDispatch();
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const [letters, setLetters] = useState<string>('');

	const getTickers = async () => {
		const allTickers: Array<TickerType> | undefined = await getSeacrhedSymbols(letters);
		if (allTickers) {
			const res: AutocompleteOption[] | undefined = allTickers?.map((ticker) => {
				const autocompleteTickers: AutocompleteOption = {
					name: ticker.name,
					companyName: ticker.companyName
				}
				return autocompleteTickers;
			});
			setAutocompleteTickers(res!);
		} else {
			const res: AutocompleteOption[] | undefined = [];
			setAutocompleteTickers(res!);
		}
	};

	const handleChangeTickerValue = (event: React.SyntheticEvent<Element, Event>) => {
		if (event.currentTarget.childNodes[0].childNodes[0].textContent !== null && event.currentTarget.childNodes[0].childNodes[0].textContent !== '') {
			dispatch(putSymbolName(event.currentTarget.childNodes[0].childNodes[0].textContent));
		}
		if (!event.currentTarget.childNodes[0].childNodes[0].textContent) {
			dispatch(putSymbolName("AAPL"));
			dispatch(putSymbolCompanyName("Apple Inc."));
		}
		autocompleteTickers.forEach((ticker) => {
			if (ticker.name === event.currentTarget.childNodes[0].childNodes[0].textContent) {
				dispatch(putSymbolCompanyName(ticker.companyName));
			}
		})
	};

	const getDataTicker = () => {
		const symbolDataInInterval: TickerDataType[] = getDataInInterval(data, interval);
		setTickerVolume(createHistogramAreaData(VOLUME_DATA, symbolDataInInterval));
		setTickerData(createCandleData(MAIN_DATA, symbolDataInInterval));
	};

	useMemo(() => {
		getTickers();
	}, [letters]);

	useEffect(() => {
		if (getDataInInterval(data, interval).length > 0) {
			getDataTicker();
		}
	}, [symbolName, interval, data, getDataInInterval(data, interval).length > 0]);

	return (
		<StocksChartContainer>
			<StocksChartSearchTickerContainer>
				<StocksAutocomplete
					filterOptions={(options: any) => options}
					ListboxProps={{
						style: {
							overflow: 'hidden',
							maxHeight: '100%',
						}
					}}
					disableListWrap={true}
					onChange={(event) => handleChangeTickerValue(event)}
					inputValue={letters}
					onInputChange={(event, newValue) => setLetters(newValue)}
					PaperComponent={Paper}
					componentsProps={{
						paper: {
							sx: {
								bgcolor: "rgba(44, 9, 81, 1)",
								color: 'white'
							}
						}
					}}
					disablePortal={true}
					getOptionLabel={(option: any) => (option.name || option.companyName) ?? option}
					isOptionEqualToValue={(option: any) => option.name || option.companyName}
					options={autocompleteTickers}
					noOptionsText={<Typography sx={{ color: 'white' }}>No tickers found</Typography>}
					renderOption={(props, option: any) => (
						<Box component="li" sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} {...props} key={option.name}>
							<Box sx={{ width: '100%', paddingBottom: '10px' }} >
								<Typography>{option.name}</Typography>
								<Typography>{option.companyName}</Typography>
								<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '1px', marginTop: '5px' }} />
							</Box>
						</Box>
					)}
					renderInput={(params) =>
						<TextField {...params} key={params.id} label="Tickers"
							InputProps={{ ...params.InputProps }}
						/>
					}
				/>
				<Box>
					<MainButton onClick={handleClickStatistics} marginTop sx={{ marginRight: '30px' }}>Get Statistics</MainButton>
					<MainButton marginTop>Add to portfolio</MainButton>
				</Box>

			</StocksChartSearchTickerContainer>

			<LightWeightChartHeader data={getDataInInterval(data, interval)} />
			<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume} />
		</StocksChartContainer>
	)
}

export default StocksChart