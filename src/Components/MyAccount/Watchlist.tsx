import React, { useEffect, useState } from 'react'
import { WatchListContainer, WatchListWrapper } from '../../Styles/MyAccountStyles/WatchListStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GeneralAccountTitleContainer, GeneralAccountsTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { getWatchList } from '../../Actions/fetchWatchListActions';
import { createColumnsForWatchList, createRowsForWatchList } from '../../Functions/dataProcessingFunctions';
import { WatchListColumnsType, WatchListType } from '../../Types/WatchListTypes';

const Watchlist = () => {
    const login = useAppSelector(state => state.userReducer?.login);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const [columns, setColumns] = useState<Array<WatchListColumnsType>>([]);
    const [rows, setRows] = useState<Array<WatchListType>>([]);
    const dispatch = useAppDispatch();

    const handleDrawerOpen = () => {
        dispatch(setOpenColseToolbar(true));
    };

    const fetchWatchList = async () => {
        const res = await getWatchList(login!);
        setColumns(createColumnsForWatchList(res!));
        setRows(createRowsForWatchList(res!));
    };

    useEffect(() => {
        console.log('watchlist rendered')
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

                        <TableContainer component={Paper} sx={{ width: '1000px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column: WatchListColumnsType) => {
                                            return (
                                                <TableCell key={column.id}> {column.id}</TableCell>
                                            );
                                        })}
                                    </TableRow>
                                    <TableBody>
                                        {rows
                                            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                // const isItemSelected = isSelected(row.name);
                                                // const labelId = `enhanced-table-checkbox-${index}`;
                                                return (
                                                    <TableRow role="checkbox" aria-checked={isItemSelected} selected={isItemSelected} key={row.companyName} onClick={handleRowClick}>
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.index}>
                                                                    {value === row.name && <Checkbox
                                                                        checked={isItemSelected}
                                                                        onChange={event => handleClick(event, row.name)}
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
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </WatchListWrapper>
                </Grid>
            </Grid>
        </WatchListContainer>
    )
}

export default Watchlist