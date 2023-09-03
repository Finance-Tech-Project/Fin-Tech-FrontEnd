import React, { useEffect, useState } from 'react'
import { StocksChartContainer, StocksChartSearchTickerContainer, StocksAutocomplete } from '../../Styles/StocksStyles/StocksChartStyle';
import { CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { TickerDataType, TickerDataVolumeType, TickerType } from '../../Types/TickersTypes';
import { createCandleData, createHistogramAreaData } from '../../FetchActions/dataProcessingFunctions';
import { MAIN_DATA, VOLUME_DATA } from '../../Constants/fetchConstants';
import { getAllTickers, getTickerData } from '../../FetchActions/fetchActions';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader';
import LightWeightChart from '../TradingViewLightWeightChart/LightWeightChart';

interface AutocompleteOption {
	symbol: string,
	company: string
}

const StocksChart = () => {
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const [selectedTicker, setSelectedTicker] = useState<string | null | undefined>('AAPL');
	const [isLoading, setIsLoading] = useState(false);
	const [selectedTickerName, setSelectedTickerName] = useState<string | null | undefined>('Apple Inc.');
	const [autocompleteTickers, setAutocompleteTickers] = useState<AutocompleteOption[]>([]);
	const [open, setOpen] = useState(false);
	const loading = open && autocompleteTickers.length === 0;

	const getDataTicker = async () => {
		if (selectedTicker) {
			const dataTicker: Array<TickerDataType> | undefined = await getTickerData(selectedTicker!);
			setTickerVolume(createHistogramAreaData(VOLUME_DATA, dataTicker!));
			setTickerData(createCandleData(MAIN_DATA, dataTicker!));
		}
	}

	const getTickers = async () => {
		const allTickers: Array<TickerType> | undefined = await getAllTickers();
		const res: AutocompleteOption[] | undefined = allTickers?.map((ticker) => {
			const autocompleteTickers: AutocompleteOption = {
				symbol: ticker.symbol,
				company: ticker.name
			}
			return autocompleteTickers;
		});
		setAutocompleteTickers(res!);
	};

	const handleChangeTickerValue = (event: React.SyntheticEvent<Element, Event>) => {
		setSelectedTicker(event.currentTarget.childNodes[0].nodeValue!);
		if (!event.currentTarget.childNodes[0].nodeValue!) {
			setSelectedTicker('AAPL');
			setSelectedTickerName('Apple Inc.');
		}
		autocompleteTickers.forEach((ticker) => {
			if (ticker.symbol === event.currentTarget.childNodes[0].nodeValue!) {
				setSelectedTickerName(ticker.company);
			}
		})
	};

	useEffect(() => {
		setIsLoading(true);
		isLoading && getTickers();
		getDataTicker();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, selectedTicker, selectedTickerName]);

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
					getOptionLabel={(option: any) => (option.symbol || option.company) ?? option}
					isOptionEqualToValue={(option: any) => option.symbol}
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

			<LightWeightChartHeader selectedTicker={selectedTicker} selectedTickerName={selectedTickerName} tickerData={tickerData} />
			<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume} />
		</StocksChartContainer>
	)
}

export default StocksChart