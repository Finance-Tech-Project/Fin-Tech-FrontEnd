import { Box, Divider, FormControlLabel, FormGroup, styled } from "@mui/material";

export const AnalyticChartInterfaceContainer = styled(Box)(({ theme }) => ({
    border: '1px solid rgba(70, 75, 114, 0.8)', 
    height: '735px', 
    backgroundColor: 'rgba(44, 9, 81, 1)'
}));

export const AnalyticChartInterfaceWrapper = styled(Box)(({ theme }) => ({
    padding: '25px', 
    display: 'flex', 
    flexDirection: 'column'
}));

export const MoveAverageTitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingBottom: '10px'
}));

export const MoveAverageDescrContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
}));

export const MoveAverageFormGroup = styled(FormGroup)(({ theme }) => ({
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
}));

export const MoveAverageFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    color: 'white',
    '& .MuiSvgIcon-root': { 
        color: 'rgb(73 91 238 / 80%)' 
    },
    '&:last-child': {
        marginRight: '0px'
    }
}));

export const SimpleIncomeAndVolatilityTitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingTop: '20px', 
    paddingBottom: '10px'
}));

export const AnalyticChartInterfaceDivider = styled(Divider)(({ theme }) => ({ 
    width: '90%',
    borderWidth: '3px'
}));