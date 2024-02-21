import React, { useEffect, useState } from 'react'
import { WatchListContainer, WatchListWrapper } from '../../Styles/MyAccountStyles/WatchListStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GeneralAccountTitleContainer, GeneralAccountsTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { Checkbox, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [selectedTicker, setSelectedTicker] = useState<string | null | undefined>('');
    const [selectedTickerName, setSelectedTickerName] = useState<string | null | undefined>('');
    const dispatch = useAppDispatch();

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
        setSelectedTicker(event.currentTarget.childNodes[0].firstChild?.nodeValue);
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
                                                <TableCell key={column.id}> 
                                                    {column.id === 'symbolName' && <Checkbox
                                                        onChange={handleSelectAllClick}
                                                    />}
                                                    {column.id}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.symbolName);
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            return (
                                                <TableRow role="checkbox" aria-checked={isItemSelected} selected={isItemSelected} key={row.companyName} onClick={handleRowClick}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id}>
                                                                {value === row.symbolName && <Checkbox
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
                    </WatchListWrapper>
                </Grid>
            </Grid>
        </WatchListContainer>
    )
}

export default Watchlist