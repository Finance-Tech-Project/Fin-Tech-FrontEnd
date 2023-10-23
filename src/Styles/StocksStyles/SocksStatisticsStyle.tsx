import { Box, Table, TableCell, styled } from "@mui/material";

export const StocksStatisticsContainer = styled(Box)(({ theme }) => ({
    paddingTop: '80px',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    padding: '40px 60px 60px 60px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px'
}));

export const StocksStatisticsTableContainer = styled(Box)(({ theme }) => ({
    width: '98.5%',
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('laptopL')]: {
        display: 'flex',
        flexDirection: 'row'
    },
}));

export const StocksStatisticsTableWrapper = styled(Box)(({ theme }) => ({
    width: '100%'
}));

export const TableCellWithHighlights = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root': {
        color: 'white',
        backgroundColor: 'rgba(0,20,135,1)',
        fontFamily: 'Inter, sans-serif',
        boxShadow: '20px 20px 20px 20px rgba(0,20,135,1)',
        '&:hover': {
            borderBottom: '2px solid #190033',
            marginBottom: '5px'
        }
    },
}));

export const TableCellWithoutHighlights = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root': {
        color: 'white',
        backgroundColor: '#3e3e3e',
        fontFamily: 'Inter, sans-serif',
        '&:hover': {
            borderBottom: '2px solid #190033',
            marginBottom: '5px'
        }
    },
}));