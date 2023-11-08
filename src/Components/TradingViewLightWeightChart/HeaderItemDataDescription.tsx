import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box } from '@mui/material';
import { MainHeaderChartTickerDescr } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { DefaultPeriods } from '../../Enums/Enums';
import { HeaderItemDescrContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';

interface Props {
    checkDate?: boolean
}

const HeaderItemDataDescription = ({checkDate}: Props) => {
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility = useAppSelector(state => state.analyticInterfaceReducer.volatility);

    return (
        <Box sx={{ width: '100%', padding: '10px 0px' }}>
            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{simpleIncome.simpleIncomeData[simpleIncome.simpleIncomeData.length - 1].value}%</MainHeaderChartTickerDescr>
            </HeaderItemDescrContainer>

            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>{!checkDate ? 'Time range date from:' : 'Time range date to:'}</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>
                    {!checkDate ? currentDateFrom.split("-").reverse().join("-") : currentDateTo.split("-").reverse().join("-")}
                </MainHeaderChartTickerDescr>
            </HeaderItemDescrContainer>

            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>Simple income period in years:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{simpleIncome.period === 0 ? DefaultPeriods.SimpleIncomeDefaultPeriod : simpleIncome.period}</MainHeaderChartTickerDescr>
            </HeaderItemDescrContainer>

            <HeaderItemDescrContainer>
                <MainHeaderChartTickerDescr>Volatility period in days:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{volatility.period}</MainHeaderChartTickerDescr>
            </HeaderItemDescrContainer>
        </Box>
    )
}

export default HeaderItemDataDescription