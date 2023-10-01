/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { putSymbolCompanyName, putSymbolName } from '../../Reducers/selectedSymbolReducer';
import { TickerType } from '../../Types/TickersTypes';
import { getSeacrhedSymbols } from '../../Actions/fetchActions';
import { Box, Divider, Paper, TextField, Typography } from '@mui/material';
import { GeneralAutocomplete } from '../../Styles/AreCommonStyles/AreCommonStyles';

interface AutocompleteOption {
    name: string,
    companyName: string
}

const AnalyticOneStockAutocomplete = () => {
    const dispatch = useAppDispatch();
    const [autocompleteTickers, setAutocompleteTickers] = useState<AutocompleteOption[]>([]);
    const [letters, setLetters] = useState<string>('');
    
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

    useMemo(() => {
        getTickers();
    }, [letters]);

    return (
        <GeneralAutocomplete
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
                <TextField {...params} key={params.id} label="Find symbol"
                    InputProps={{ ...params.InputProps }}
                />
            }
        />
    )
}

export default AnalyticOneStockAutocomplete