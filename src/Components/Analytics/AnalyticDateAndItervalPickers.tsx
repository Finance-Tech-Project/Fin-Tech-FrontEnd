import React, { useEffect } from 'react'
import { StocksHistoricalTableDatePicker } from '../../Styles/StocksStyles/StocksHistoricalTableStyle'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { getMinDateForHistory } from '../../Functions/getPeriod';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SelectStyle } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { theme } from '../../Constants/MaterialConstants/theme';
import { putDataInterval } from '../../Reducers/intervalDataReducer';
import { getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions';


const AnalyticDateAndIntervalPickers = () => {
    const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
    const [dateFrom, setDateFrom] = React.useState<Dayjs | null | unknown>(dayjs(''));
    const [dateTo, setDateTo] = React.useState<Dayjs | null | unknown>(dayjs(''));
    const [period, setPeriod] = React.useState('');
    const dispatch = useAppDispatch();

    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
        const interval = event.target.value === 'Daily' ? '1D' : event.target.value === 'Weekly' ? '1W' : event.target.value === 'Monthly' ? '1M' : event.target.value === 'Yearly' ? '1Y' : '1D';
        dispatch(putDataInterval(interval as string))
    };

    const handleClickOnApplyButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const from = new Date(dateFrom as string).toISOString().split("T").splice(0, 1)[0];
        const to = new Date(dateTo as string).toISOString().split("T").splice(0, 1)[0];
        if (Boolean(!event.currentTarget.value)) {
            dispatch(putCurrentDateFrom(from));
            dispatch(putCurrentDateTo(to));
            dispatch(getSymbolDataForPeriodRange(symbolName, from, to, 1));
        }
    };

    useEffect(() => {
        setDateFrom(currentDateFrom);
        setDateTo(currentDateTo);
    }, [currentDateFrom, currentDateTo]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StocksHistoricalTableDatePicker
                slotProps={{
                    layout: {
                        sx: {
                            '& .MuiDateCalendar-root': {
                                width: '103%',
                                color: 'white',
                                backgroundColor: '#190033'
                            },
                            '& .MuiButtonBase-root': {
                                color: 'white',
                            },
                            '& .MuiTypography-root': {
                                color: 'white',
                            }
                        }
                    }
                }}
                label="Date from"
                minDate={dayjs(getMinDateForHistory())}
                value={dayjs(dateFrom as string, 'YYYY-MM-DD')}
                onChange={(newDate) => setDateFrom(newDate)}
            />

            <StocksHistoricalTableDatePicker
                slotProps={{
                    layout: {
                        sx: {
                            '& .MuiDateCalendar-root': {
                                width: '103%',
                                color: 'white',
                                backgroundColor: '#190033'
                            },
                            '& .MuiButtonBase-root': {
                                color: 'white',
                            },
                            '& .MuiTypography-root': {
                                color: 'white',
                            }
                        }
                    }
                }}
                label="Date to"
                value={dayjs(dateTo as string, 'YYYY-MM-DD')}
                onChange={(newDate) => setDateTo(newDate)}
            />
            <FormControl sx={{ width: '120px' }}>
                <InputLabel sx={{ color: 'white' }} id="demo-simple-select-label">Frequency</InputLabel>
                <Select
                    MenuProps={{
                        sx: {
                            '& .MuiList-root': {
                                bgcolor: "rgba(44, 9, 81, 1)",
                                color: 'white'
                            }
                        }
                    }}
                    sx={() => SelectStyle(theme)}
                    value={period}
                    label="Frequency"
                    onChange={handleChangePeriod}
                >
                    <MenuItem value={'Daily'}>Daily</MenuItem>
                    <MenuItem value={'Weekly'}>Weekly</MenuItem>
                    <MenuItem value={'Monthly'}>Monthly</MenuItem>
                    <MenuItem value={'Yearly'}>Yearly</MenuItem>
                </Select>
            </FormControl>

            <Box>
                <MainButton onClick={handleClickOnApplyButton} marginTop sx={{marginRight: '20px'}}>Apply</MainButton>
                <MainButton marginTop>Compare two stocks</MainButton>
            </Box>

        </LocalizationProvider>
    )
}

export default AnalyticDateAndIntervalPickers