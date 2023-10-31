import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box } from '@mui/material';
import { MainHeaderChartTickerDescr } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { DefaultPeriods } from '../../Enums/Enums';

interface Props {
    checkDate?: boolean
}

const HeaderItemDataDescription = ({checkDate}: Props) => {
    const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility = useAppSelector(state => state.analyticInterfaceReducer.volatility);

    return (
        <Box sx={{ width: '100%', padding: '10px 0px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{simpleIncome.simpleIncomeData[simpleIncome.simpleIncomeData.length - 1].value}%</MainHeaderChartTickerDescr>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <MainHeaderChartTickerDescr>{!checkDate ? 'Time range date from:' : 'Time range date to:'}</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>
                    {!checkDate ? currentDateFrom.split("-").reverse().join("-") : currentDateTo.split("-").reverse().join("-")}
                </MainHeaderChartTickerDescr>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <MainHeaderChartTickerDescr>Simple income period in years:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{simpleIncome.period === 0 ? DefaultPeriods.SimpleIncomeDefaultPeriod : simpleIncome.period}</MainHeaderChartTickerDescr>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <MainHeaderChartTickerDescr>Volatility period in days:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{volatility.period}</MainHeaderChartTickerDescr>
            </Box>
        </Box>
    )
}

export default HeaderItemDataDescription