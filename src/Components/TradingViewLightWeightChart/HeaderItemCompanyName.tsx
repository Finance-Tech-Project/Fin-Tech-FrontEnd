import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box, Divider, ThemeProvider } from '@mui/material';
import { MainHeaderChartTickerName } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { getColorForLightWeightHeader } from '../../Functions/utilsFunctions';
import { theme } from '../../Constants/MaterialConstants/theme';

interface Props {
    checkSymbolName?: boolean
}

const HeaderItemCompanyName = ({ checkSymbolName }: Props) => {
    const symbolName = useAppSelector(state => state.selectedSymbolReducer);
    const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility = useAppSelector(state => state.analyticInterfaceReducer.volatility);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ padding: '15px 0px 15px 20px' }}>
                <MainHeaderChartTickerName fontSize
                    sx={{
                        color: getColorForLightWeightHeader(simpleIncome, volatility, !checkSymbolName ? false : true)
                    }}
                >
                    {!checkSymbolName ? symbolName.symbolName : symbolName.symbolNameToCompare}
                </MainHeaderChartTickerName>
                <Box sx={{
                    // width: '50%',
                    [theme.breakpoints.up('mobileS')]: {
                        width: '96%'
                    },
                    [theme.breakpoints.up('tablet')]: {
                        width: '50%'
                    },
                }}>
                    <MainHeaderChartTickerName>
                        {!checkSymbolName ? symbolName.companyName : symbolName.companyNameToCompare}
                    </MainHeaderChartTickerName>
                    <Divider sx={{
                        width: '100%',
                        backgroundColor: `${getColorForLightWeightHeader(simpleIncome, volatility, !checkSymbolName ? false : true)}`,
                        borderStyle: 'solid',
                        borderWidth: '1.5px'
                    }}></Divider>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default HeaderItemCompanyName