import { Autocomplete, Box, Button, CircularProgress, Paper, TextField, Typography } from "@mui/material"
import Header from "../Home/Header/Header"
import { StocksAutocomplete, StocksBlackoutContainer, StocksContainer } from "../../Styles/StocksStyles/StocksStyle"
import Footer from "../Footer/Footer"
import StocksTitle from "./StocksTitle"
import LightWeightChart from "../TradingViewLightWeightChart/LightWeightChart"
import { useEffect, useState } from "react"
import { TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from "../../Types/TickersTypes"
import { getAllTickers, getTickerData } from "../../FetchActions/fetchActions"
import { createCandleData, createColumns, createHistogramAreaData } from "../../FetchActions/dataProcessingFunctions"
import { MAIN_DATA, VOLUME_DATA } from "../../Constants/fetchConstants"
import LightWeightChartHeader from "../TradingViewLightWeightChart/LightWeightChartHeader";
import React from "react"
import { MainButton } from "../../Styles/MainStyles/MainContextStyle"

interface AutocompleteOption {
	symbol: string,
	company: string
}

const Stocks = () => {
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
	};

	useEffect(() => {
		setIsLoading(true);
		isLoading && getTickers();
		getDataTicker();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, selectedTicker]);

	return (
		<Box width={'100%'} height={'100%'}>
			<Header />
			<StocksContainer>
				<StocksBlackoutContainer>
					<StocksTitle />

					<Box sx={{ maxWidth: '1200px', paddingTop: '80px' }}>
						<Box sx={{ paddingBottom: '50px', display: 'flex', justifyContent: 'space-between' }}>
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
								getOptionLabel={(option: any) => option.symbol}
								options={autocompleteTickers}
								noOptionsText={<Typography sx={{color: 'white'}}>No tickers found</Typography>}
								loadingText={<Typography sx={{color: 'white'}}>Loading...</Typography>}
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
						</Box>
						<LightWeightChartHeader selectedTicker={selectedTicker} selectedTickerName={selectedTickerName} tickerData={tickerData} />
						<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume} />
					</Box>
				</StocksBlackoutContainer>
			</StocksContainer>
			<Footer />
		</Box>
	)
}

export default Stocks