import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { Box, Divider } from '@mui/material';
import { MainHeaderChartTickerName } from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle';
import { getColorForLightWeightHeader } from '../../Functions/utilsFunctions';

interface Props {
    checkSymbolName?: boolean
}

const HeaderItemCompanyName = ({ checkSymbolName }: Props) => {
    const symbolName = useAppSelector(state => state.selectedSymbolReducer);
    const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const volatility = useAppSelector(state => state.analyticInterfaceReducer.volatility);

    return (
        <Box sx={{ padding: '15px 0px 15px 20px'}}>
            <MainHeaderChartTickerName fontSize
                sx={{
                    color: getColorForLightWeightHeader(simpleIncome, volatility, !checkSymbolName ? false : true)
                }}
            >
                {!checkSymbolName ? symbolName.symbolName : symbolName.symbolNameToCompare}
            </MainHeaderChartTickerName>
            <Box sx={{width: '50%'}}>
                <MainHeaderChartTickerName>
                    {!checkSymbolName ? symbolName.companyName : symbolName.companyNameToCompare}
                </MainHeaderChartTickerName>
                <Divider sx={{
                    width: '100%',
                    backgroundColor: `${getColorForLightWeightHeader(simpleIncome, volatility, !checkSymbolName ? false : true)}`,
                    borderStyle: 'solid',
                    borderWidth: '1.5px',
                    // height: '100%',
                }}></Divider>
            </Box>
        </Box>
    )
}

export default HeaderItemCompanyName