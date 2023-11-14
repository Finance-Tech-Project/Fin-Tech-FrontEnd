import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box } from '@mui/material';
import { MainHeaderChartTickerDescr } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { HeaderItemDescrContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { getChartHeaderDescrItem } from '../../Functions/utilsFunctions';

interface Props {
    isClickedToCompare?: boolean
}

const HeaderItemDataDescription = ({ isClickedToCompare }: Props) => {
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
    const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility = useAppSelector(state => state.analyticInterfaceReducer.volatility);
    const sharpRatio = useAppSelector(state => state.analyticInterfaceReducer.sharpRatio);

    return (
        <Box sx={{ width: '100%', padding: '10px 0px' }}>
            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>
                    {
                        !isClickedToCompare ?
                            simpleIncome.simpleIncomeData[simpleIncome.simpleIncomeData.length - 1].value
                            : simpleIncome.simpleIncomeDataToCompare[simpleIncome.simpleIncomeDataToCompare.length - 1].value
                    }
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