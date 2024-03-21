/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { WatchLisTableContainerStyle, WatchListContainer, WatchListWrapper } from '../../Styles/MyAccountStyles/WatchListStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GeneralAccountTitleContainer, GeneralAccountsTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { Box, Button, Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { getWatchList, removeSymbolsFromWatchList } from '../../Actions/fetchWatchListActions';
import { WatchListColumnsType, WatchListType } from '../../Types/WatchListTypes';
import { transformTextForWatchListTable } from '../../Functions/utilsFunctions';
import WatchListModalPortfolioCreate from './WatchListModalPortfolioCreate';
import { CreatingColumnsForTables } from '../../Classes/CreatingColumnsForTables';
import { CreatingRowsForTables } from '../../Classes/CreatingRowsForTables';
import { WatchListCreatePortfolioType } from '../../Types/WatchListModalCreatePortfolioType';
import { theme } from '../../Constants/MaterialConstants/theme';
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles';
import WatchListModalCircularProgress from './WatchListModalCircularProgress';

export interface SelectedSymbols {
    readonly symbolName: string,
    readonly companyName: string
}

const Watchlist = () => {
    const login = useAppSelector(state => state.userReducer?.login);
    const token = useAppSelector(state => state.tokenReducer);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const [columns, setColumns] = useState<Array<WatchListColumnsType>>([]);
    const [rows, setRows] = useState<Array<WatchListType>>([]);
    const [selected, setSelected] = useState<WatchListCreatePortfolioType[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openModalForCreatePortfolio, setOpenModalForCreatePortfolio] = useState(false);
    const [openModalForCircularProgress, setOpenModalForCircularProgress] = useState(false);
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

    const createObjectForWatchListPortfolio = (symbolName: string, companyName: string) => {
        const res: WatchListCreatePortfolioType = {
            symbolName: symbolName,
            companyName: companyName,
            amountOfStocks: null,
            removeSymbol: null
        };
        return res;
    };

    const handleRemoveSymbolsFromWatchList = async (event: React.MouseEvent<HTMLElement>) => {
        if (Boolean(event.currentTarget)) {
            const symbolsNames = selected.map((item) => item.symbolName);
            setOpenModalForCircularProgress(true);
            const res: Array<WatchListType> | undefined = await removeSymbolsFromWatchList(login!, token!, symbolsNames);
            if (res) {
                setColumns(new CreatingColumnsForTables().createColumnsForWatchList(res));
                setRows(new CreatingRowsForTables().createRowsForWatchList(res));
            }
            setSelected([]);
            setOpenModalForCircularProgress(false);
        }
    };


    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const selectedTickers: WatchListCreatePortfolioType[] = rows.map((item) => {
                return {
                    symbolName: item.symbolName,
                    companyName: item.companyName,
                    amountOfStocks: null,
                    removeSymbol: null
                }
            })
            setSelected(selectedTickers);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>, name: string, companyName: string) => {
        const selectedIndex = selected.findIndex((elem) => elem.symbolName === createObjectForWatchListPortfolio(name, companyName).symbolName);

        let newSelected: WatchListCreatePortfolioType[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, createObjectForWatchListPortfolio(name, companyName));
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

    // const handleDeleteAllSelectedTickers = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     if (!Boolean(event.currentTarget.value)) {
    //         setSelected([]);
    //         return;
    //     }
    // };

    const isSelected = (name: string, companyName: string) =>
        selected.findIndex((elem) => elem.symbolName === createObjectForWatchListPortfolio(name, companyName).symbolName) !== -1;

    const fetchWatchList = async () => {
        setOpenModalForCircularProgress(true);
        const res = await getWatchList(login!);
        setColumns(new CreatingColumnsForTables().createColumnsForWatchList(res));
        setRows(new CreatingRowsForTables().createRowsForWatchList(res));
        setOpenModalForCircularProgress(false);
    };

    const handleCreatePortfolio = () => {
        setOpenModalForCreatePortfolio(true);
    };

    useEffect(() => {
        setColumns(new CreatingColumnsForTables().createColumnsForWatchList([]));
        fetchWatchList();
        
    }, []);

    return (
        <WatchListContainer>
            {openModalForCreatePortfolio &&
                <WatchListModalPortfolioCreate
                    selected={selected}
                    setOpenModalForCreatePortfolio={setOpenModalForCreatePortfolio}
                />
            }
            {openModalForCircularProgress && 
                <WatchListModalCircularProgress openCloseModal={openModalForCircularProgress}/>
            }
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
                            sx={() => WatchLisTableContainerStyle(theme)}>
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
                                            const isItemSelected = isSelected(row.symbolName, row.companyName);
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            return (
                                                <TableRow role="checkbox" aria-checked={isItemSelected} selected={isItemSelected} key={row.companyName}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TabelCellTicker
                                                                key={column.id}>
                                                                {value === row.symbolName && <Checkbox sx={{ color: 'white' }}
                                                                    checked={isItemSelected}
                                                                    onChange={event => handleClick(event, row.symbolName, row.companyName)}
                                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                                />}
                                                                {typeof value === 'number' ? value.toFixed(2) : value}
                                                            </TabelCellTicker>
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
                                width: '99.75%',
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

                        <Box sx={{ width: '100%', display: 'flex', paddingTop: '20px' }}>
                            <Grid desktop={2} desktopOffset={7.5}>
                                <Button sx={{
                                    width: '100%',
                                    height: '56px',
                                    border: '1.5px solid rgba(37, 59, 227, 0.8)',
                                    backgroundColor: 'rgba(1, 17, 36, 0.8)',
                                    color: 'white',
                                    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
                                }} onClick={handleCreatePortfolio}>Create portfolio</Button>
                            </Grid>

                            <Grid desktop={2} desktopOffset={0.5}>
                                <Button sx={{
                                    width: '100%',
                                    height: '56px',
                                    border: '1.5px solid rgba(37, 59, 227, 0.8)',
                                    backgroundColor: 'rgba(1, 17, 36, 0.8)',
                                    color: 'white',
                                    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
                                }} onClick={(event) => handleRemoveSymbolsFromWatchList(event)}>Remove from watchlist</Button>
                            </Grid>

                        </Box>
                    </WatchListWrapper>
                </Grid>
            </Grid>
        </WatchListContainer>
    )
}

export default Watchlist