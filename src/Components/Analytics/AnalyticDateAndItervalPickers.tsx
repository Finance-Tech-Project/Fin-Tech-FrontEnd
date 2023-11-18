import React, { useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { getMinDateForHistory } from '../../Functions/getPeriod';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { GeneralDatePicker, GeneralDatePickerStyle, SelectStyle } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { theme } from '../../Constants/MaterialConstants/theme';
import { putDataInterval } from '../../Reducers/intervalDataReducer';
import { getDataForAnalyticChartSharpRatio, getDataForAnalyticChartSimpleIncome, getDataForAnalyticChartVolatility, getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions';
import { ChartSeriesNames, DefaultPeriods, IntervalsAbbreviation, IntervalsFullName } from '../../Enums/Enums';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import AnalyticOneStockAutocomplete from './AnalyticOneStockAutocomplete';
import AnalyticTwoStocksAutocomplete from './AnalyticTwoStocksAutocomplete';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { Symbols } from '../../Types/DataReducerTypes';
import { AnalyticButtons } from '../../Styles/AnalyticStyles/AnalyticStyle';

interface Props {
    handleClickTwoStocksCompare: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    handleClickAnalyticChart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    isClickedToCompare: boolean
}

const AnalyticDateAndIntervalPickers = ({ handleClickTwoStocksCompare, handleClickAnalyticChart, isClickedToCompare }: Props) => {
    const seriesName: ChartSeriesNames = useAppSelector(state => state.chartSeriesReducer.seriesName);
    const symbolName: Symbols = useAppSelector(state => state.selectedSymbolReducer);
    const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility);
    const sharpRatio: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.sharpRatio);
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
            switch (seriesName) {
                case ChartSeriesNames.LineSeriesForSimpleIncome:
                    return dispatch(getDataForAnalyticChartSimpleIncome(
                        symbolName.symbolName,
                        symbolName.symbolNameToCompare,
                        simpleIncome.period === 0 ? DefaultPeriods.SimpleIncomeDefaultPeriod : simpleIncome.period,
                        currentDateFrom,
                        currentDateTo
                    ));
                case ChartSeriesNames.LineSeriesForVolatility:
                    return dispatch(getDataForAnalyticChartVolatility(
                        symbolName.symbolName,
                        symbolName.symbolNameToCompare,
                        volatility.period,
                        currentDateFrom,
                        currentDateTo
                    ));
                case ChartSeriesNames.LineSeriesForSharpRatio:
                    return dispatch(getDataForAnalyticChartSharpRatio(
                        symbolName.symbolName,
                        symbolName.symbolNameToCompare,
                        sharpRatio.period,
                        currentDateFrom,
                        currentDateTo
                    ));
            }
        }
    };

    useEffect(() => {
        setDateFrom(currentDateFrom);
        setDateTo(currentDateTo);
    }, [currentDateFrom, currentDateTo, symbolName.symbolName, symbolName.symbolNameToCompare, simpleIncome.period]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container sx={{ width: '100%' }} columns={{ laptop: 11.5 }}>

                {!isClickedToCompare ?
                    <Grid
                        mobileS={12}
                        laptop={3.5} laptopOffset={0}
                        laptopL={1.5}
                        desktop={1.5}
                    >
                        <AnalyticOneStockAutocomplete />
                    </Grid>
                    :
                    <Grid
                        mobileS={12}
                        laptop={12} laptopOffset={0}
                        laptopL={6}
                        desktop={6}
                    >
                        <AnalyticTwoStocksAutocomplete />
                    </Grid>
                }


                {!isClickedToCompare &&
                    <Grid
                        mobileS={12}
                        laptop={3.5} laptopOffset={0.5}
                        laptopL={1.5} laptopLOffset={0.5}
                        desktop={1.5} desktopOffset={0.5}
                    >

                        <GeneralDatePicker
                            slotProps={{ layout: { sx: () => GeneralDatePickerStyle(theme) } }}
                            label="Date from"
                            minDate={dayjs(getMinDateForHistory())}
                            value={dayjs(dateFrom as string, 'YYYY-MM-DD')}
                            onChange={(newDate) => setDateFrom(newDate)}
                        />
                    </Grid>
                }

                {!isClickedToCompare &&
                    <Grid
                        mobileS={12}
                        laptop={3.5} laptopOffset={0.5}
                        laptopL={1.5} laptopLOffset={0.5}
                        desktop={1.5} desktopOffset={0.5}
                    >
                        <GeneralDatePicker
                            slotProps={{ layout: { sx: () => GeneralDatePickerStyle(theme) } }}
                            label="Date to"
                            value={dayjs(dateTo as string, 'YYYY-MM-DD')}
                            onChange={(newDate) => setDateTo(newDate)}
                        />

                    </Grid>
                }

                {!isClickedToCompare &&
                    <Grid
                        mobileS={12}
                        laptop={3.5} laptopOffset={0}
                        laptopL={1.5} laptopLOffset={0.5}
                        desktop={1.5} desktopOffset={0.5}
                    >
                        <FormControl sx={{
                            width: '100%',
                            [theme.breakpoints.up('mobileS')]: {
                                marginTop: '20px',
                                marginBottom: '20px'
                            },
                            [theme.breakpoints.up('laptop')]: {
                                marginBottom: '20px'
                            },
                            [theme.breakpoints.up('laptopL')]: {
                                marginTop: '0px',
                                marginBottom: '0px',
                            }
                        }}>
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
                    </Grid>
                }

                {!isClickedToCompare ?
                    <React.Fragment>
                        <Grid
                            mobileS={12}
                            laptop={3.5} laptopOffset={0.5}
                            laptopL={1.5} laptopLOffset={0.5}
                            desktop={1.5} desktopOffset={0.5}
                        >
                            <AnalyticButtons onClick={handleClickOnApplyButton} >Apply</AnalyticButtons>
                        </Grid>

                        <Grid
                            mobileS={12}
                            laptop={3.5} laptopOffset={0.5}
                            laptopL={1.5} laptopLOffset={0.5}
                            desktop={1.5} desktopOffset={0.5}
                        >
                            <AnalyticButtons onClick={handleClickTwoStocksCompare} >Compare two stocks</AnalyticButtons>
                        </Grid>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Grid
                            mobileS={12}
                            laptop={5.25} laptopOffset={0}
                            laptopL={2.25} laptopLOffset={0.5}
                            desktop={1.5} desktopOffset={2}
                        >
                            <AnalyticButtons marginTopForTwoStocksButtons onClick={handleClickOnCompare} >Compare</AnalyticButtons>

                        </Grid>

                        <Grid
                            mobileS={12}
                            laptop={5.25} laptopOffset={1}
                            laptopL={2.25} laptopLOffset={0.5}
                            desktop={1.5} desktopOffset={0.5}
                        >
                            <AnalyticButtons onClick={handleClickAnalyticChart} >Analytic Chart</AnalyticButtons>
                        </Grid>
                    </React.Fragment>
                }
            </Grid>
        </LocalizationProvider>
    )
}

export default AnalyticDateAndIntervalPickers