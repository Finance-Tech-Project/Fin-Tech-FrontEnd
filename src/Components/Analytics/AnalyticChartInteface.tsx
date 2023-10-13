/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putMovAvgData, putMovAvgPeriod, putSimpleIncomeData, putSimpleIncomePeriod, putVolatilityData, putVolatilityPeriod } from '../../Reducers/analyticIterfaceReducer';
import { MainTickersTextField } from '../../Styles/MainStyles/MainFindTickerStyle';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { getDataForAnalyticCharMovAvg, getDataForAnalyticChartSimpleIncome, getDataForAnalyticChartVolatility } from '../../Actions/fetchDispatchActions';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../Enums/Enums';

interface Props {
    isClickedToCompare: boolean
}

const AnalyticChartInteface = ({ isClickedToCompare }: Props) => {
    const symbolName = useAppSelector(state => state.selectedSymbolReducer);
    const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
    const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility)
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
    const [numberSimpleIncome, setNumberSimpleIncome] = useState<number | string>('');
    const [numberVolatility, setNumberVolatility] = useState<number | string>('');
    const [checked50Days, setChecked50Days] = useState(false);
    const [checked200Days, setChecked200Days] = useState(false);
    const dispatch = useAppDispatch();

    const handleChange50Days = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(putMovAvgPeriod(50));
        dispatch(putSimpleIncomeData([]));
        dispatch(putVolatilityData([]));
        setChecked50Days(true);
        setChecked200Days(false);
        setNumberSimpleIncome('');
        setNumberVolatility('');
        dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
    };

    const handleChange200Days = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(putMovAvgPeriod(200));
        dispatch(putSimpleIncomeData([]));
        dispatch(putVolatilityData([]));
        setChecked200Days(true);
        setChecked50Days(false);
        setNumberSimpleIncome('');
        setNumberVolatility('');
        dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
    };

    const handleChangeForSimpleIncome = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNumberSimpleIncome(+event.target.value);
        dispatch(putSimpleIncomePeriod(+event.target.value));
        if (+event.target.value >= 21 || +event.target.value === 0) {
            setNumberSimpleIncome('');
        }
        if (+event.target.value > 0) {
            setNumberVolatility('');
            dispatch(putVolatilityPeriod(0));
            // dispatch(putVolatilityData([]));
            dispatch(putMovAvgPeriod(0));
            setChecked50Days(false);
            setChecked200Days(false);
        }
    };

    const handleChangeForVolatility = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNumberVolatility(+event.target.value);
        dispatch(putVolatilityPeriod(+event.target.value));
        if (+event.target.value === 0) {
            setNumberVolatility('');
        }
        if (+event.target.value > 0) {
            setNumberSimpleIncome('');
            dispatch(putSimpleIncomePeriod(0));
            // dispatch(putSimpleIncomeData([]));
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
        if (!Boolean(event.target.value)) {
            dispatch(putMovAvgPeriod(0));
            dispatch(putMovAvgData([]));
            setChecked50Days(false);
            setChecked200Days(false);
        }
    };

    const handleGetSimpleIncome = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!Boolean(event.currentTarget.value)) {
            setChecked50Days(false);
            setChecked200Days(false);
            dispatch(putSeriesName(ChartSeriesNames.LineSeriesForSimpleIncome));
            dispatch(getDataForAnalyticChartSimpleIncome(
                symbolName.symbolName,
                symbolName.symbolNameToCompare,
                simpleIncome.period,
                currentDateFrom,
                currentDateTo
            ));
        }
    };

    const handleGetVolatality = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!Boolean(event.currentTarget.value)) {
            setChecked50Days(false);
            setChecked200Days(false);
            dispatch(putSeriesName(ChartSeriesNames.LineSeriesForVolatility));
            dispatch(getDataForAnalyticChartVolatility(
                symbolName.symbolName,
                symbolName.symbolNameToCompare,
                volatility.period,
                currentDateFrom,
                currentDateTo
            ));
        }
    };

    useEffect(() => {
        movAvg.period > 0 && dispatch(getDataForAnalyticCharMovAvg(symbolName.symbolName, movAvg.period, currentDateFrom, currentDateTo));
        simpleIncome.period === 0 && setNumberSimpleIncome('');
        volatility.period === 0 && setNumberVolatility('');
        if (isClickedToCompare) {
            setChecked50Days(false);
            setChecked200Days(false);
        }
    }, [movAvg.period, simpleIncome.period, volatility.period, currentDateFrom, currentDateTo, isClickedToCompare]);

    return (
        <Box sx={{ border: '1px solid rgba(70, 75, 114, 0.8)', height: '735px', backgroundColor: 'rgba(44, 9, 81, 1)' }}>
            <Box sx={{ padding: '25px', display: 'flex', flexDirection: 'column' }}>
                {!isClickedToCompare && (
                    <React.Fragment>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                            <Typography sx={{ color: 'white' }} variant='h5'>Moving Average</Typography>
                            <Box sx={{ width: '25%' }}>
                                <Divider orientation='horizontal' sx={{ backgroundColor: 'red', borderWidth: '3px', width: '90%' }}></Divider>
                            </Box>
                        </Box>

                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <FormGroup sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <FormControlLabel sx={{
                                    color: 'white',
                                    '& .MuiSvgIcon-root': { color: 'rgb(73 91 238 / 80%)' }
                                }}
                                    control={<Checkbox checked={checked50Days} onChange={handleChange50Days} />}
                                    label="50 days period"
                                />
                                <FormControlLabel sx={{
                                    color: 'white',
                                    marginRight: 0,
                                    '& .MuiSvgIcon-root': { color: 'rgb(73 91 238 / 80%)' },
                                }}
                                    control={<Checkbox checked={checked200Days} onChange={handleChange200Days} />}
                                    label="200 days period"

                                />
                            </FormGroup>
                        </Box>
                    </React.Fragment>
                )}


                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', paddingBottom: '10px' }}>
                    <Typography sx={{ color: 'white' }} variant='h5'>Simple Income</Typography>
                    <Box sx={{ width: '25%' }}>
                        <Divider orientation='horizontal' sx={{ backgroundColor: 'yellow', borderWidth: '3px', width: '90%' }}></Divider>
                    </Box>
                </Box>

                <MainTickersTextField
                    type="number"
                    variant="outlined"
                    label="Enter period in years"
                    sx={{ marginTop: '10px' }}
                    value={numberSimpleIncome}
                    onChange={(event) => handleChangeForSimpleIncome(event)}
                    onFocus={handleFocus}
                >
                </MainTickersTextField>
                <MainButton onClick={handleGetSimpleIncome} marginTop sx={{ width: '100%' }}>Get Simple Income</MainButton>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', paddingBottom: '10px' }}>
                    <Typography sx={{ color: 'white' }} variant='h5'>Volatility</Typography>
                    <Box sx={{ width: '25%' }}>
                        <Divider orientation='horizontal' sx={{ backgroundColor: volatility.color, borderWidth: '3px', width: '90%' }}></Divider>
                    </Box>
                </Box>
                <MainTickersTextField
                    type="number"
                    variant="outlined"
                    label="Enter period in days"
                    sx={{ marginTop: '10px' }}
                    value={numberVolatility}
                    onChange={(event) => handleChangeForVolatility(event)}
                    onFocus={handleFocus}
                ></MainTickersTextField>
                <MainButton onClick={handleGetVolatality} marginTop sx={{ width: '100%' }}>Get Volatility</MainButton>
            </Box>
        </Box>
    )
}

export default AnalyticChartInteface