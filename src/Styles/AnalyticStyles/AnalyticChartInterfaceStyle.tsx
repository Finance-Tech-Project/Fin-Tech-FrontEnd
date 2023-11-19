import { Box, Divider, FormControlLabel, FormGroup, styled } from "@mui/material";

export const AnalyticChartInterfaceContainer = styled(Box)(({ theme }) => ({ 
    border: '1px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(44, 9, 81, 1)',
    width: '100%',
    overflowY: 'scroll',
    borderLeft: '2px solid rgba(70, 75, 114, 0.8)',
    marginLeft: '2px',
    [theme.breakpoints.down('laptopL')]: {
        height: '100%',
        overflowY: 'hidden',
        borderLeft: '1px solid rgba(70, 75, 114, 0.8)',
        marginLeft: '0px'
    }
}));

export const AnalyticChartInterfaceWrapper = styled(Box)(({ theme }) => ({
    padding: '20px 25px', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between'
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

export const AnalyticInterfaceItemContainer = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingTop: '20px', 
    paddingBottom: '10px',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '20px', 
        paddingBottom: '10px'
    },
    [theme.breakpoints.up('desktop')]: {
        paddingTop: '30px', 
        paddingBottom: '10px'
    },
}));

export const AnalyticChartInterfaceDivider = styled(Divider)(({ theme }) => ({ 
    width: '90%',
    borderWidth: '3px'
}));

