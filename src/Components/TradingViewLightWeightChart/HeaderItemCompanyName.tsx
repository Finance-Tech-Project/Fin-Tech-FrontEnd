import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box, Divider, ThemeProvider } from '@mui/material';
import { MainHeaderChartTickerName } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { getColorForLightWeightHeader } from '../../Functions/utilsFunctions';
import { theme } from '../../Constants/MaterialConstants/theme';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { Symbols } from '../../Types/DataReducerTypes';

interface Props {
    checkSymbolName?: boolean
}

const HeaderItemCompanyName = ({ checkSymbolName }: Props) => {
    const seriesName = useAppSelector(state => state.chartSeriesReducer.seriesName);
    const symbolName: Symbols = useAppSelector(state => state.selectedSymbolReducer);
    const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility);
    const sharpRatio: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.sharpRatio);
    
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                [theme.breakpoints.up('mobileS')]: {
                    padding: '15px 0px 15px 10px',
                },
                [theme.breakpoints.up('tablet')]: {
                    padding: '15px 0px 15px 20px',
                },
            }}>
                <MainHeaderChartTickerName fontSize
                    sx={{ color: getColorForLightWeightHeader(
                        seriesName, 
                        simpleIncome, 
                        volatility, 
                        sharpRatio, 
                        !checkSymbolName ? true : false
                    )}}
                >
                    {!checkSymbolName ? symbolName.symbolName : symbolName.symbolNameToCompare}
                </MainHeaderChartTickerName>
                <Box sx={{ width: '95%' }}>
                    <MainHeaderChartTickerName>
                        {!checkSymbolName ? symbolName.companyName : symbolName.companyNameToCompare}
                    </MainHeaderChartTickerName>
                    <Divider sx={{
                        width: '100%',
                        backgroundColor: `${getColorForLightWeightHeader(
                            seriesName, 
                            simpleIncome, 
                            volatility, 
                            sharpRatio, 
                            !checkSymbolName ? true : false
                        )}`,
                        borderStyle: 'solid',
                        borderWidth: '1.5px'
                    }}></Divider>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default HeaderItemCompanyName