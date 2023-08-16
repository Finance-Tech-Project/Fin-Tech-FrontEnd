import { TableCell, TablePagination, styled } from "@mui/material";

export const TabelCellTicker = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root': {
        color: 'white',
        backgroundColor: '#3e3e3e',
        fontFamily: 'Inter, sans-serif',
        '&:nth-of-type(1)': {
            position: 'relative',
            zIndex: 1,
            borderRight: '1px solid #190033',
            boxShadow: '5px 0px 20px 0px rgba(0,20,135,1)',
            '&:hover': {
                cursor: 'pointer',
                borderBottom: '2px solid #190033',
                marginBottom: '5px'
            }
        }
    }
}));

export const TablePaginationTicker = styled(TablePagination)(({ theme }) => ({
    border: '1px solid black', 
    backgroundColor: '#190033', 
    color: 'white', 
    '.MuiSvgIcon-root': {
        color: 'white'
    }
}));

