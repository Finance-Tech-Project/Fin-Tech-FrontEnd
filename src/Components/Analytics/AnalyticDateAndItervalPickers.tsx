import React, { useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { getMinDateForHistory } from '../../Functions/getPeriod';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { GeneralDatePicker, GeneralDatePickerStyle, SelectStyle } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { theme } from '../../Constants/MaterialConstants/theme';
import { putDataInterval } from '../../Reducers/intervalDataReducer';
import { getDataForAnalyticChartSimpleIncome, getDataForAnalyticChartVolatility, getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions';
import { DefaultPeriods, IntervalsAbbreviation, IntervalsFullName } from '../../Enums/Enums';

interface Props {
    handleClickTwoStocksCompare: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    isClickedToCompare: boolean
}

const AnalyticDateAndIntervalPickers = ({ handleClickTwoStocksCompare, isClickedToCompare }: Props) => {
    const symbolName = useAppSelector(state => state.selectedSymbolReducer);
    const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility = useAppSelector(state => state.analyticInterfaceReducer.volatility);
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
    const [dateFrom, setDateFrom] = React.useState<Dayjs | null | unknown>(dayjs(''));
    const [dateTo, setDateTo] = React.useState<Dayjs | null | unknown>(dayjs(''));
    const [period, setPeriod] = React.useState('');
    const dispatch = useAppDispatch();

    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
        const interval = event.target.value === IntervalsFullName.Dayily
            ? IntervalsAbbreviation.Dayily : event.target.value === IntervalsFullName.Weekly
                ? IntervalsAbbreviation.Weekly : event.target.value === IntervalsFullName.Monthly
                    ? IntervalsAbbreviation.Monthly : event.target.value === IntervalsFullName.Yearly
                        ? IntervalsAbbreviation.Yearly : IntervalsAbbreviation.Dayily;
        dispatch(putDataInterval(interval as string))
    };

    const handleClickOnApplyButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const from = new Date(dateFrom as string).toISOString().split("T").splice(0, 1)[0];
        const to = new Date(dateTo as string).toISOString().split("T").splice(0, 1)[0];
        if (Boolean(!event.currentTarget.value)) {
            dispatch(putCurrentDateFrom(from));
            dispatch(putCurrentDateTo(to));
            dispatch(getSymbolDataForPeriodRange(symbolName.symbolName, from, to));
        }
    };

    const handleClickOnCompare = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (Boolean(!event.currentTarget.value) && symbolName.symbolName && symbolName.symbolNameToCompare) {
            if (simpleIncome.period === 0) {
                dispatch(getDataForAnalyticChartSimpleIncome(
                    symbolName.symbolName,
                    symbolName.symbolNameToCompare,
                    DefaultPeriods.SimpleIncomeDefaultPeriod,
                    currentDateFrom,
                    currentDateTo
                ));
            } else {
                dispatch(getDataForAnalyticChartSimpleIncome(
                    symbolName.symbolName,
                    symbolName.symbolNameToCompare,
                    simpleIncome.period,
                    currentDateFrom,
                    currentDateTo
                ));
            }
            if (volatility.period === 0) {
                dispatch(getDataForAnalyticChartVolatility(
                    symbolName.symbolName,
                    symbolName.symbolNameToCompare,
                    DefaultPeriods.VolatilityDefaultPeriod,
                    currentDateFrom,
                    currentDateTo
                ));
            } else {
                dispatch(getDataForAnalyticChartVolatility(
                    symbolName.symbolName,
                    symbolName.symbolNameToCompare,
                    volatility.period,
                    currentDateFrom,
                    currentDateTo
                ));
            }
        }
    };

    useEffect(() => {
        setDateFrom(currentDateFrom);
        setDateTo(currentDateTo);
    }, [currentDateFrom, currentDateTo, symbolName.symbolName, symbolName.symbolNameToCompare]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {!isClickedToCompare && (
                <React.Fragment>
                    <GeneralDatePicker
                        slotProps={{ layout: { sx: () => GeneralDatePickerStyle(theme) } }}
                        label="Date from"
                        minDate={dayjs(getMinDateForHistory())}
                        value={dayjs(dateFrom as string, 'YYYY-MM-DD')}
                        onChange={(newDate) => setDateFrom(newDate)}
                    />

                    <GeneralDatePicker
                        slotProps={{ layout: { sx: () => GeneralDatePickerStyle(theme) } }}
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
                </React.Fragment>
            )}

            {!isClickedToCompare ? (
                <Box>
                    <MainButton onClick={handleClickOnApplyButton} marginTop sx={{ marginRight: '20px' }}>Apply</MainButton>
                    <MainButton onClick={handleClickTwoStocksCompare} marginTop>Compare two stocks</MainButton>
                </Box>

            ) : (
                <Box>
                    <MainButton onClick={handleClickOnCompare} marginTop sx={{ marginRight: '20px' }}>Compare</MainButton>
                    <MainButton onClick={handleClickTwoStocksCompare} marginTop>Analytic Chart</MainButton>
                </Box>
            )}
        </LocalizationProvider>
    )
}

export default AnalyticDateAndIntervalPickers