import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box } from '@mui/material';
import { MainHeaderChartTickerDescr } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { DefaultPeriods } from '../../Enums/Enums';

const HeaderItemDataDescription = () => {
    const { currentDateFrom } = useAppSelector(state => state.dateDataReducer);
	const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{simpleIncome.simpleIncomeData[simpleIncome.simpleIncomeData.length - 1].value}%</MainHeaderChartTickerDescr>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <MainHeaderChartTickerDescr>Time range date from:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{currentDateFrom.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <MainHeaderChartTickerDescr>Simple income period in years:</MainHeaderChartTickerDescr>
                <MainHeaderChartTickerDescr>{simpleIncome.period === 0 ? DefaultPeriods.SimpleIncomeDefaultPeriod : simpleIncome.period}</MainHeaderChartTickerDescr>
            </Box>
        </Box>
    )
}

export default HeaderItemDataDescription