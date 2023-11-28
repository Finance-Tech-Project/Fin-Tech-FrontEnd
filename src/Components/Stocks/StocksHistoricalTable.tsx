/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { StocksHistoricalTableApplyButton, StocksHistoricalTableContainer, StocksHistoricalTableContainerStyle, StocksHistoricalTableFromControl, StocksHistoricalTableInterfaceContainer, StocksHistoricalTablePaginationStyle } from '../../Styles/StocksStyles/StocksHistoricalTableStyle'
import { Box, Divider, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { HistoricalTableColumnType, HistoricalTableType } from '../../Types/HistoricalTableTypes'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { createColumnsForHistoricalTable, createRowsForHistoricalTable } from '../../Functions/dataProcessingFunctions'
import { theme } from '../../Constants/MaterialConstants/theme';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TickerDataType } from '../../Types/TickersTypes'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { putDataInterval } from '../../Reducers/intervalDataReducer'
import { getSymbolDataForDefaultPeriod, getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions'
import { getMinDateForHistory, getPeriod } from '../../Functions/getPeriod'
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer'
import { GeneralDatePicker, GeneralDatePickerDesktopPaperStyle, GeneralDatePickerLayoutStyle, GeneralStocksBlocksTitle, SelectStyle, GeneralDatePickerPopperStyle } from '../../Styles/AreCommonStyles/AreCommonStyles'
import { getDataInInterval, transformFirstLetterToUpperCase } from '../../Functions/utilsFunctions'
import { ComponentName, IntervalsAbbreviation, IntervalsFullName } from '../../Enums/Enums'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const StocksHistoricalTable = () => {
    const data = useAppSelector(state => state.historicalDataReducer.dataStock);
    const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
    const interval = useAppSelector(state => state.intervalDataReducer);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [dateFrom, setDateFrom] = React.useState<Dayjs | null | unknown>(dayjs(''));
    const [dateTo, setDateTo] = React.useState<Dayjs | null | unknown>(dayjs(''));
    const [period, setPeriod] = React.useState('');
    const [historicalTableColumns, setHistoricalTableColumns] = useState<HistoricalTableColumnType[] | undefined>([]);
    const [historicalTableRows, setHistoricalTableRows] = useState<HistoricalTableType[] | undefined>([]);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch();

    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
        const interval = event.target.value === IntervalsFullName.Dayily
            ? IntervalsAbbreviation.Dayily : event.target.value === IntervalsFullName.Weekly
                ? IntervalsAbbreviation.Weekly : event.target.value === IntervalsFullName.Monthly
                    ? IntervalsAbbreviation.Monthly : event.target.value === IntervalsFullName.Yearly
                        ? IntervalsAbbreviation.Yearly : IntervalsAbbreviation.Dayily;
        dispatch(putDataInterval(interval as string));
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const setSymbolData = () => {
        const symbolDataInInterval: TickerDataType[] = getDataInInterval(data, interval);
        setHistoricalTableRows(createRowsForHistoricalTable(symbolDataInInterval));
        setHistoricalTableColumns(createColumnsForHistoricalTable(symbolDataInInterval));
        setDateFrom(symbolDataInInterval[0].time);
        setDateTo(symbolDataInInterval[symbolDataInInterval.length - 1].time);
    };

    const handleClickOnApplyButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const from = new Date(dateFrom as string).toISOString().split("T").splice(0, 1)[0];
        const to = new Date(dateTo as string).toISOString().split("T").splice(0, 1)[0];
        if (Boolean(!event.currentTarget.value)) {
            dispatch(putCurrentDateFrom(from));
            dispatch(putCurrentDateTo(to));
            dispatch(getSymbolDataForPeriodRange(symbolName, from, to));
        }
    };

    const removeValuesInUnmounted = () => {
        setIsMounted(false);
        dispatch(putCurrentDateFrom(getPeriod(2)[0]));
        dispatch(putCurrentDateTo(getPeriod(2)[1]));
        !isMounted && dispatch(getSymbolDataForDefaultPeriod(symbolName));
    };

    useEffect(() => {
        setIsMounted(true);
        if (getDataInInterval(data, interval).length > 0) {
            setSymbolData();
        }
        return () => removeValuesInUnmounted();
    }, [symbolName, data, interval, isMounted, getDataInInterval(data, interval).length > 0]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StocksHistoricalTableContainer>
                <GeneralStocksBlocksTitle>Historical data</GeneralStocksBlocksTitle>
                <Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />

                <StocksHistoricalTableInterfaceContainer>
                    <Grid container sx={{ width: '100%' }}>
                        <Grid
                            mobileS={12}
                            laptop={2.5}
                        >
                            <GeneralDatePicker
                                slotProps={{
                                    popper: {
                                        sx: () => GeneralDatePickerPopperStyle(theme, ComponentName.Stocks)
                                    },
                                    desktopPaper: {
                                        sx: () => GeneralDatePickerDesktopPaperStyle(theme)
                                    },
                                    layout: {
                                        sx: () => GeneralDatePickerLayoutStyle(theme)
                                    }
                                }}
                                label="Date from"
                                minDate={dayjs(getMinDateForHistory())}
                                value={dayjs(dateFrom as string, 'YYYY-MM-DD')}
                                onChange={(newDate) => setDateFrom(newDate)}
                            />
                        </Grid>

                        <Grid
                            mobileS={12}
                            laptop={2.5} laptopOffset={0.66}
                        >
                            <GeneralDatePicker
                                slotProps={{
                                    popper: {
                                        sx: () => GeneralDatePickerPopperStyle(theme, ComponentName.Stocks)
                                    },
                                    desktopPaper: {
                                        sx: () => GeneralDatePickerDesktopPaperStyle(theme)
                                    },
                                    layout: {
                                        sx: () => GeneralDatePickerLayoutStyle(theme)
                                    }
                                }}
                                label="Date to"
                                value={dayjs(dateTo as string, 'YYYY-MM-DD')}
                                onChange={(newDate) => setDateTo(newDate)}
                            />
                        </Grid>

                        <Grid
                            mobileS={12}
                            laptop={2.5} laptopOffset={0.66}
                        >
                            <StocksHistoricalTableFromControl>
                                <InputLabel sx={{ color: 'white' }} id="demo-simple-select-label">Frequency</InputLabel>
                                <Select
                                    MenuProps={{
                                        sx: {
                                            '& .MuiList-root': {
                                                bgcolor: "rgba(44, 9, 81, 1)",
                                                color: 'white'
                                            }
                                        }
                                    }}
                                    sx={() => SelectStyle(theme)}
                                    value={period}
                                    label="Frequency"
                                    onChange={handleChangePeriod}
                                >
                                    <MenuItem value={'Daily'}>Daily</MenuItem>
                                    <MenuItem value={'Weekly'}>Weekly</MenuItem>
                                    <MenuItem value={'Monthly'}>Monthly</MenuItem>
                                    <MenuItem value={'Yearly'}>Yearly</MenuItem>
                                </Select>
                            </StocksHistoricalTableFromControl>
                        </Grid>

                        <Grid
                            mobileS={12}
                            laptop={2.5} laptopOffset={0.66}
                        >
                            <StocksHistoricalTableApplyButton onClick={handleClickOnApplyButton} >Apply</StocksHistoricalTableApplyButton>
                        </Grid>
                    </Grid>
                </StocksHistoricalTableInterfaceContainer>

                <TableContainer component={Paper} sx={() => StocksHistoricalTableContainerStyle(theme)}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {historicalTableColumns?.map((column) => {
                                    return (
                                        <TableCell component="th" sx={{
                                            '&.MuiTableCell-root': {
                                                textAlign: 'center',
                                                backgroundColor: '#190033',
                                                color: 'white'
                                            }
                                        }} key={column.id}>{transformFirstLetterToUpperCase(column.lable)}</TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {historicalTableRows!
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow key={row.date}>
                                            {historicalTableColumns?.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TabelCellTicker sx={{ textAlign: 'center' }} key={column.id}>
                                                        {typeof value === 'number' ? value.toFixed(2) : value}
                                                    </TabelCellTicker>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    sx={() => StocksHistoricalTablePaginationStyle(theme)}
                    component={"div"}
                    rowsPerPageOptions={[10, 100]}
                    count={historicalTableRows!.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </StocksHistoricalTableContainer>
        </LocalizationProvider>
    )
}

export default StocksHistoricalTable