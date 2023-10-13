/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putCompanyNameToCompare, putSymbolCompanyName, putSymbolName, putSymbolNameToCompare } from '../../Reducers/selectedSymbolReducer';
import { Box, Divider, Paper, TextField, Typography } from '@mui/material';
import { TickerType } from '../../Types/TickersTypes';
import { getSeacrhedSymbols } from '../../Actions/fetchActions';
import { GeneralAutocomplete } from '../../Styles/AreCommonStyles/AreCommonStyles';

interface AutocompleteOption {
	name: string,
	companyName: string
}

const AnalyticTwoStocksAutocomplete = () => {
	const dispatch = useAppDispatch();
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const [autocompleteTickers, setAutocompleteTickers] = useState<AutocompleteOption[]>([]);
	const [lettersFirstSymbol, setLettersFirstSymbol] = useState<string>('');
	const [lettersSecondSymbol, setLettersSecondSymbol] = useState<string>('');
	const [focusedAutocomplete, setFocusedAutocomplete] = useState(false);

	const handleChangeFirstTickerValue = (event: React.SyntheticEvent<Element, Event>) => {
		if (event.currentTarget.childNodes[0] && event.currentTarget.childNodes[0].childNodes[0]) {
			if (event.currentTarget.childNodes[0].childNodes[0].textContent !== null 
				&& event.currentTarget.childNodes[0].childNodes[0].textContent !== '' 
				&& event.currentTarget.childNodes[0].childNodes[0].textContent !== undefined) {
				dispatch(putSymbolName(event.currentTarget.childNodes[0].childNodes[0].textContent));
			}
			autocompleteTickers.forEach((ticker) => {
				if (ticker.name === event.currentTarget.childNodes[0].childNodes[0].textContent) {
					dispatch(putSymbolCompanyName(ticker.companyName));
				}
			})
		}
	};

	const handleChangeSecondTickerValue = (event: React.SyntheticEvent<Element, Event>) => {
		if (event.currentTarget.childNodes[0] && event.currentTarget.childNodes[0].childNodes[0]) {
			if (event.currentTarget.childNodes[0].childNodes[0].textContent !== null || event.currentTarget.childNodes[0].childNodes[0] !== undefined) {
				dispatch(putSymbolNameToCompare(event.currentTarget.childNodes[0].childNodes[0].textContent!));
			}
			autocompleteTickers.forEach((ticker) => {
				if (ticker.name === event.currentTarget.childNodes[0].childNodes[0].textContent) {
					dispatch(putCompanyNameToCompare(ticker.companyName));
				}
			})
		}
	};

	const handleFocus = (event: React.FocusEvent<HTMLDivElement, Element>) => {
		setFocusedAutocomplete(Boolean(event.currentTarget));
		setAutocompleteTickers([]);
	};

	const handleBlur = (event: React.FocusEvent<HTMLDivElement, Element>) => {
		setFocusedAutocomplete(!Boolean(event.currentTarget));
	};

	const checkLetters = () => {
		return lettersFirstSymbol !== '' ? lettersFirstSymbol : lettersSecondSymbol;
	};

	const getTickers = async () => {
		const allTickers: Array<TickerType> | undefined = await getSeacrhedSymbols(checkLetters());
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
			setAutocompleteTickers([]);
		}
	};

	useMemo(() => {
		getTickers();
	}, [lettersFirstSymbol, lettersSecondSymbol]);

	useEffect(() => {
		if (!focusedAutocomplete) {
			setLettersFirstSymbol('')
			setLettersSecondSymbol('')
			setAutocompleteTickers([]);
		}
		if (lettersFirstSymbol && !lettersSecondSymbol) {
			setAutocompleteTickers([]);
		}
	}, [focusedAutocomplete, lettersFirstSymbol, lettersSecondSymbol, symbolName.symbolName]);

	return (
		<React.Fragment>
			<GeneralAutocomplete
				filterOptions={(options: any) => options}
				ListboxProps={{
					style: {
						overflow: 'hidden',
						maxHeight: '100%',
					}
				}}
				onFocus={handleFocus}
				onBlur={handleBlur}
				disableListWrap={true}
				onChange={(event) => handleChangeFirstTickerValue(event)}
				value={symbolName.symbolName}
				// inputValue={lettersFirstSymbol}
				onInputChange={(event, newValue) => setLettersFirstSymbol(newValue)}
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
					<TextField {...params} key={params.id} label="Find symbols"
						InputProps={{ ...params.InputProps }}
					/>
				}
			/>

			<GeneralAutocomplete
				filterOptions={(options: any) => options}
				ListboxProps={{
					style: {
						overflow: 'hidden',
						maxHeight: '100%',
					}
				}}
				disableListWrap={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={symbolName.symbolNameToCompare}
				onChange={(event) => handleChangeSecondTickerValue(event)}
				// inputValue={lettersSecondSymbol}
				onInputChange={(event, newValue) => setLettersSecondSymbol(newValue)}
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
					<TextField {...params} key={params.id} label="Find symbol for compare"
						InputProps={{ ...params.InputProps }}
					/>
				}
			/>
		</React.Fragment>
	)
}

export default AnalyticTwoStocksAutocomplete