import React, { useEffect, useState } from 'react'
import { WatchListContainer, WatchListWrapper } from '../../Styles/MyAccountStyles/WatchListStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GeneralAccountTitleContainer, GeneralAccountsTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { getWatchList } from '../../Actions/fetchWatchListActions';
import { createColumnsForWatchList, createRowsForWatchList } from '../../Functions/dataProcessingFunctions';
import { WatchListColumnsType, WatchListType } from '../../Types/WatchListTypes';
import { transformTextForWatchListTable } from '../../Functions/utilsFunctions';

const Watchlist = () => {
    const login = useAppSelector(state => state.userReducer?.login);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const [columns, setColumns] = useState<Array<WatchListColumnsType>>([]);
    const [rows, setRows] = useState<Array<WatchListType>>([]);
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [selectedTicker, setSelectedTicker] = useState<string | null | undefined>('');
    const [selectedTickerName, setSelectedTickerName] = useState<string | null | undefined>('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const dispatch = useAppDispatch();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDrawerOpen = () => {
        dispatch(setOpenColseToolbar(true));
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        if (event.target.checked) {
            const selectedTickers: string[] = rows.map((e) => e.symbolName)
            setSelected(selectedTickers);
            return;
        }
        setSelected([]);
    };

    const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
        setSelectedTicker(event.currentTarget.firstChild?.textContent);
        setSelectedTickerName(event.currentTarget.childNodes[1].firstChild?.nodeValue);
    };

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleDeleteAllSelectedTickers = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!Boolean(event.currentTarget.value)) {
            setSelected([]);
            return;
        }
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const fetchWatchList = async () => {
        const res = await getWatchList(login!);
        setColumns(createColumnsForWatchList(res!));
        setRows(createRowsForWatchList(res!));
    };

    useEffect(() => {
        fetchWatchList();
    }, []);
 
    return (
        <WatchListContainer>
            <Grid container>
                <Grid mobileS={11} mobileSOffset={0.5}>
                    <WatchListWrapper>
                        <GeneralAccountTitleContainer>
                            <GeneralAccountsTitleHeader>Watchlist</GeneralAccountsTitleHeader>
                            {!openCloseToolbar && <MyAccountPanelInterfaceToolbarArrowRight onClick={handleDrawerOpen}></MyAccountPanelInterfaceToolbarArrowRight>}
                        </GeneralAccountTitleContainer>

                        <Divider orientation='horizontal'
                            sx={{
                                backgroundColor: '#966fbd',
                                borderStyle: 'solid',
                                borderWidth: '3px',
                                marginTop: '20px'
                            }} />

                        <TableContainer component={Paper}
                            sx={{
                                width: '100%',
                                marginTop: '30px',
                                border: '2px solid rgba(70, 75, 114, 0.8)',
                                borderBottom: 'none'
                            }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#190033' }}>
                                        {columns.map((column: WatchListColumnsType) => {
                                            return (
                                                <TableCell key={column.id} sx={{
                                                    '&.MuiTableCell-root': {
                                                        backgroundColor: '#190033',
                                                        color: 'white'
                                                    }
                                                }}>
                                                    {column.id === 'symbolName' && <Checkbox sx={{ color: 'white' }} onChange={handleSelectAllClick} />}
                                                    {transformTextForWatchListTable(column.id)}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.symbolName);
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            return (
                                                <TableRow role="checkbox" aria-checked={isItemSelected} selected={isItemSelected} key={row.companyName} onClick={handleRowClick}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell
                                                                sx={{
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
                                                                    },
                                                                }}

                                                                key={column.id}>
                                                                {value === row.symbolName && <Checkbox sx={{ color: 'white' }}
                                                                    checked={isItemSelected}
                                                                    onChange={event => handleClick(event, row.symbolName)}
                                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                                />}
                                                                {value}
                                                            </TableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            sx={{
                                width: '100%',
                                border: '2px solid rgba(70, 75, 114, 0.8)',
                                borderTop: 'none'
                            }}
                            rowsPerPageOptions={[10, 100, 1000]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </WatchListWrapper>
                </Grid>
            </Grid>
        </WatchListContainer>
    )
}

export default Watchlist