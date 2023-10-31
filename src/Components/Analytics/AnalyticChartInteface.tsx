/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putMovAvgData, putMovAvgPeriod, putSimpleIncomeData, putSimpleIncomePeriod, putVolatilityData, putVolatilityPeriod } from '../../Reducers/analyticIterfaceReducer';
import { MainTickersTextField } from '../../Styles/MainStyles/MainFindTickerStyle';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { getDataForAnalyticCharMovAvg, getDataForAnalyticChartSimpleIncome, getDataForAnalyticChartVolatility } from '../../Actions/fetchDispatchActions';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../Enums/Enums';
import { 
    AnalyticChartInterfaceContainer, 
    AnalyticChartInterfaceDivider, 
    AnalyticChartInterfaceWrapper, 
    MoveAverageDescrContainer, 
    MoveAverageFormControlLabel, 
    MoveAverageFormGroup, 
    MoveAverageTitleContainer, 
    SimpleIncomeAndVolatilityTitleContainer
} from '../../Styles/AnalyticStyles/AnalyticChartInterfaceStyle';

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
        <AnalyticChartInterfaceContainer>
            <AnalyticChartInterfaceWrapper>
                {!isClickedToCompare && (
                    <React.Fragment>
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
                    </React.Fragment>
                )}


                <SimpleIncomeAndVolatilityTitleContainer>
                    <Typography sx={{ color: 'white' }} variant='h5'>Simple Income</Typography>
                    <Box sx={{ width: '25%' }}>
                        <AnalyticChartInterfaceDivider 
                            orientation='horizontal' 
                            color={simpleIncome.color}
                        ></AnalyticChartInterfaceDivider>
                    </Box>
                </SimpleIncomeAndVolatilityTitleContainer>

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

                <SimpleIncomeAndVolatilityTitleContainer>
                    <Typography sx={{ color: 'white' }} variant='h5'>Volatility</Typography>
                    <Box sx={{ width: '25%' }}>
                        <AnalyticChartInterfaceDivider 
                            orientation='horizontal'
                            color={volatility.color}
                        ></AnalyticChartInterfaceDivider>
                    </Box>
                </SimpleIncomeAndVolatilityTitleContainer>

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

            </AnalyticChartInterfaceWrapper>
        </AnalyticChartInterfaceContainer>
    )
}

export default AnalyticChartInteface