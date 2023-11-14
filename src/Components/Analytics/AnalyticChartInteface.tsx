/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putMovAvgData, putMovAvgPeriod, putSharpRatioPeriod, putSimpleIncomeData, putSimpleIncomePeriod, putVolatilityData, putVolatilityPeriod } from '../../Reducers/analyticIterfaceReducer';
import { MainTickersTextField } from '../../Styles/MainStyles/MainFindTickerStyle';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { getDataForAnalyticCharMovAvg, getDataForAnalyticChartSharpRatios, getDataForAnalyticChartSimpleIncome, getDataForAnalyticChartVolatility } from '../../Actions/fetchDispatchActions';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../Enums/Enums';
import {
    AnalyticChartInterfaceContainer,
    AnalyticChartInterfaceDivider,
    AnalyticChartInterfaceWrapper,
    AnalyticInterfaceItemContainer,
    MoveAverageDescrContainer,
    MoveAverageFormControlLabel,
    MoveAverageFormGroup,
    MoveAverageTitleContainer,
} from '../../Styles/AnalyticStyles/AnalyticChartInterfaceStyle';
import { theme } from '../../Constants/MaterialConstants/theme';

interface Props {
    isClickedToCompare: boolean
}

const AnalyticChartInteface = ({ isClickedToCompare }: Props) => {
    const symbolName = useAppSelector(state => state.selectedSymbolReducer);
    const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
    const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility);
    const sharpRatio: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.sharpRatio);
    const interfaceHeight = useAppSelector(state => state.analyticInterfaceReducer.interfaceHeight);
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
    const [numberSimpleIncome, setNumberSimpleIncome] = useState<number | string>('');
    const [numberVolatility, setNumberVolatility] = useState<number | string>('');
    const [numberSharpRatio, setNumberSharpRatio] = useState<number | string>('');
    const [numberArr, setNumberArr] = useState<number | string>('');
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
        setNumberSharpRatio('');
        setNumberArr('');
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
        setNumberSharpRatio('');
        setNumberArr('');
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
            setNumberSharpRatio('');
            setNumberArr('');
            dispatch(putVolatilityPeriod(0));
            dispatch(putMovAvgPeriod(0));
            dispatch(putSharpRatioPeriod(0));
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
            setNumberSharpRatio('');
            setNumberArr('');
            dispatch(putSimpleIncomePeriod(0));
            dispatch(putSharpRatioPeriod(0));
            dispatch(putMovAvgPeriod(0));
            setChecked50Days(false);
            setChecked200Days(false);
        }
    };

    const handleChangeForSharpRatio = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNumberSharpRatio(+event.target.value);
        dispatch(putSharpRatioPeriod(+event.target.value));
        if (+event.target.value >= 21 || +event.target.value === 0) {
            setNumberSharpRatio('');
        }
        if (+event.target.value > 0) {
            setNumberVolatility('');
            setNumberSimpleIncome('');
            setNumberArr('');
            dispatch(putSimpleIncomePeriod(0));
            dispatch(putVolatilityPeriod(0));
            dispatch(putMovAvgPeriod(0));
            setChecked50Days(false);
            setChecked200Days(false);
        }
    };

    const handleChangeForArr = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNumberArr(+event.target.value);
        if (+event.target.value >= 21 || +event.target.value === 0) {
            setNumberArr('');
        }
        if (+event.target.value > 0) {
            setNumberVolatility('');
            setNumberSimpleIncome('');
            setNumberSharpRatio('');
            dispatch(putSimpleIncomePeriod(0));
            dispatch(putVolatilityPeriod(0));
            dispatch(putMovAvgPeriod(0));
            dispatch(putSharpRatioPeriod(0));
            setChecked50Days(false);
            setChecked200Days(false);
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

    const handleGetSharpRatio = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!Boolean(event.currentTarget.value)) {
            setChecked50Days(false);
            setChecked200Days(false);
            dispatch(putSeriesName(ChartSeriesNames.LineSeriesForSharpRatio));
            dispatch(getDataForAnalyticChartSharpRatios(
                symbolName.symbolName,
                symbolName.symbolNameToCompare,
                sharpRatio.period,
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
    }, [movAvg.period, simpleIncome.period, volatility.period, sharpRatio.period, currentDateFrom, currentDateTo, isClickedToCompare]);

    return (
        <AnalyticChartInterfaceContainer height={735 + interfaceHeight}>
            <AnalyticChartInterfaceWrapper >
                {!isClickedToCompare && (
                    <Box>
                        <MoveAverageTitleContainer>
                            <Typography sx={{ color: 'white' }} variant='h5'>Moving Average</Typography>
                            <Box sx={{ width: '25%' }}>
                                <AnalyticChartInterfaceDivider
                                    orientation='horizontal'
                                    color={movAvg.color}
                                ></AnalyticChartInterfaceDivider>
                            </Box>
                        </MoveAverageTitleContainer>

                        <MoveAverageDescrContainer>
                            <MoveAverageFormGroup>
                                <MoveAverageFormControlLabel
                                    control={<Checkbox checked={checked50Days} onChange={handleChange50Days} />}
                                    label="50 days period"
                                />
                                <MoveAverageFormControlLabel
                                    control={<Checkbox checked={checked200Days} onChange={handleChange200Days} />}
                                    label="200 days period"
                                />
                            </MoveAverageFormGroup>
                        </MoveAverageDescrContainer>
                    </Box>
                )}

                <Box>
                    <AnalyticInterfaceItemContainer>
                        <Typography sx={{ color: 'white' }} variant='h5'>Simple Income</Typography>
                        <Box sx={{ width: '25%' }}>
                            <AnalyticChartInterfaceDivider
                                orientation='horizontal'
                                color={simpleIncome.color}
                            ></AnalyticChartInterfaceDivider>
                        </Box>
                    </AnalyticInterfaceItemContainer>

                    <MainTickersTextField
                        type="number"
                        variant="outlined"
                        label="Enter period in years"
                        sx={{ marginTop: '10px' }}
                        value={numberSimpleIncome}
                        onChange={(event) => handleChangeForSimpleIncome(event)}
                        onFocus={handleFocus}
                    ></MainTickersTextField>
                    <MainButton onClick={handleGetSimpleIncome} marginTop sx={{ width: '100%' }}>Get Simple Income</MainButton>
                </Box>

                <Box>
                    <AnalyticInterfaceItemContainer>
                        <Typography sx={{ color: 'white' }} variant='h5'>Volatility</Typography>
                        <Box sx={{ width: '25%' }}>
                            <AnalyticChartInterfaceDivider
                                orientation='horizontal'
                                color={volatility.color}
                            ></AnalyticChartInterfaceDivider>
                        </Box>
                    </AnalyticInterfaceItemContainer>

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

                <Box>
                    <AnalyticInterfaceItemContainer>
                        <Typography sx={{ color: 'white' }} variant='h5'>Sharp Ratio</Typography>
                        <Box sx={{ width: '25%' }}>
                            <AnalyticChartInterfaceDivider
                                orientation='horizontal'
                                color={sharpRatio.color}
                            ></AnalyticChartInterfaceDivider>
                        </Box>
                    </AnalyticInterfaceItemContainer>

                    <MainTickersTextField
                        type="number"
                        variant="outlined"
                        label="Enter period in years"
                        sx={{ marginTop: '10px' }}
                        value={numberSharpRatio}
                        onChange={(event) => handleChangeForSharpRatio(event)}
                        onFocus={handleFocus}
                    ></MainTickersTextField>
                    <MainButton onClick={handleGetSharpRatio} marginTop sx={{ width: '100%' }}>Get Sharp Ratio</MainButton>
                </Box>

                <Box>
                    <AnalyticInterfaceItemContainer>
                        <Typography sx={{ color: 'white' }} variant='h5'>ARR Revenu</Typography>
                        <Box sx={{ width: '25%' }}>
                            <AnalyticChartInterfaceDivider
                                orientation='horizontal'
                                color={sharpRatio.color}
                            ></AnalyticChartInterfaceDivider>
                        </Box>
                    </AnalyticInterfaceItemContainer>

                    <MainTickersTextField
                        type="number"
                        variant="outlined"
                        label="Enter period in years"
                        sx={{ marginTop: '10px' }}
                        value={numberArr}
                        onChange={(event) => handleChangeForArr(event)}
                        onFocus={handleFocus}
                    ></MainTickersTextField>
                    <MainButton marginTop sx={{ width: '100%' }}>GET ARR REVENU</MainButton>
                </Box>

            </AnalyticChartInterfaceWrapper>
        </AnalyticChartInterfaceContainer>
    )
}

export default AnalyticChartInteface