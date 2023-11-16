import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box } from '@mui/material';
import { MainHeaderChartTickerDescr } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { HeaderItemDescrContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { getChartHeaderDescrItem, getChartHeaderTitleItem } from '../../Functions/utilsFunctions';
import { AnalyticInterface } from '../../Types/AnalyticTypes';

interface Props {
    isClickedToCompare?: boolean
}

const HeaderItemDataDescription = ({ isClickedToCompare }: Props) => {
    const seriesName: string = useAppSelector(state => state.chartSeriesReducer.seriesName);
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
    const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility);
    const sharpRatio: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.sharpRatio);

    useEffect(() => {

    }, [simpleIncome.period, volatility.period, sharpRatio.period, isClickedToCompare]);

    return (
        <Box sx={{ width: '100%', padding: '10px 0px' }}>
            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>
                    {
                        // !isClickedToCompare ?
                        //     simpleIncome.data[simpleIncome.data.length - 1].value
                        //     : simpleIncome.dataToCompare![simpleIncome.dataToCompare!.length - 1].value
                        
                    }
                    {getChartHeaderTitleItem(simpleIncome, volatility, sharpRatio, isClickedToCompare!, seriesName)}
                    %</MainHeaderChartTickerDescr>
            </HeaderItemDescrContainer>

            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>{"Time range:"}</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>
                    {currentDateFrom.split("-")[0] + "-" + currentDateTo.split("-")[0]}
                </MainHeaderChartTickerDescr>
            </HeaderItemDescrContainer>

            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>{getChartHeaderDescrItem(simpleIncome.period, volatility.period, sharpRatio.period)[0]}</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{getChartHeaderDescrItem(simpleIncome.period, volatility.period, sharpRatio.period)[1]}</MainHeaderChartTickerDescr>
            </HeaderItemDescrContainer>
        </Box>
    )
}

export default HeaderItemDataDescription