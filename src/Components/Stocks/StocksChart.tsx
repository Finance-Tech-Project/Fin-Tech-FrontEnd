import React, { useState } from 'react'
import { StocksChartContainer, StocksChartSearchTickerContainer, StocksAutocomplete } from '../../Styles/StocksStyles/StocksChartStyle';
import { CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader';
import LightWeightChart from '../TradingViewLightWeightChart/LightWeightChart';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';

interface AutocompleteOption {
	symbol: string,
	company: string
}

interface Props {
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>,
	selectedTicker: string | null | undefined,
	selectedTickerName: string | null | undefined,
	autocompleteTickers: AutocompleteOption[],
	handleChangeTickerValue: (event: React.SyntheticEvent<Element, Event>) => void
}

const StocksChart = ({tickerData, tickerVolume, selectedTicker, selectedTickerName, handleChangeTickerValue, autocompleteTickers}: Props) => {
	const [open, setOpen] = useState(false);
	const loading = open && autocompleteTickers.length === 0;

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