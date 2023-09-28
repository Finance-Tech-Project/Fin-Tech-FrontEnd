/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { StocksHistoricalTableContainer, StocksHistoricalTableDatePicker } from '../../Styles/StocksStyles/StocksHistoricalTableStyle'
import { Box, Divider, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { HistoricalTableColumnType, HistoricalTableType } from '../../Types/HistoricalTableTypes'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { createColumnsForHistoricalTable, createRowsForHistoricalTable } from '../../Functions/dataProcessingFunctions'
import { theme } from '../../Constants/MaterialConstants/theme';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle'
import { TickerDataType } from '../../Types/TickersTypes'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { putDataInterval } from '../../Reducers/intervalDataReducer'
import { getSymbolDataForDefaultPeriod, getSymbolDataForPeriodRange } from '../../Actions/fetchDispatchActions'
import { getMinDateForHistory, getPeriod } from '../../Functions/getPeriod'
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer'
import { SelectStyle } from '../../Styles/AreCommonStyles/AreCommonStyles'
import { getDataInInterval, transformFirstLetterToUpperCase } from '../../Functions/utilsFunctions'

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
        const interval = event.target.value === 'Daily' 
                            ? '1D' : event.target.value === 'Weekly' 
                            ? '1W' : event.target.value === 'Monthly' 
                            ? '1M' : event.target.value === 'Yearly' 
                            ? '1Y' : '1D';
        dispatch(putDataInterval(interval as string))
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
            dispatch(getSymbolDataForPeriodRange(symbolName, from, to, 1));
        }
    };

    const removeValuesInUnmounted = () => {
        setIsMounted(false);
        dispatch(putCurrentDateFrom(getPeriod(2)[0]));
        dispatch(putCurrentDateTo(getPeriod(2)[1]));
        !isMounted && dispatch(getSymbolDataForDefaultPeriod(symbolName, 1));
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
                <Typography variant='h4' sx={{ color: 'yellow', textAlign: 'start', padding: '10px 0 10px 0' }}>Historical data</Typography>
                <Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />

                <Box sx={{ padding: '20px 0 20px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <StocksHistoricalTableDatePicker
                        slotProps={{
                            layout: {
                                sx: {
                                    '& .MuiDateCalendar-root': {
                                        width: '103%',
                                        color: 'white',
                                        backgroundColor: '#190033'
                                    },
                                    '& .MuiButtonBase-root': {
                                        color: 'white',
                                    },
                                    '& .MuiTypography-root': {
                                        color: 'white',
                                    }
                                }
                            }
                        }}
                        label="Date from"
                        minDate={dayjs(getMinDateForHistory())}
                        value={dayjs(dateFrom as string, 'YYYY-MM-DD')}
                        onChange={(newDate) => setDateFrom(newDate)}
                    />

                    <StocksHistoricalTableDatePicker
                        slotProps={{
                            layout: {
                                sx: {
                                    '& .MuiDateCalendar-root': {
                                        width: '103%',
                                        color: 'white',
                                        backgroundColor: '#190033'
                                    },
                                    '& .MuiButtonBase-root': {
                                        color: 'white',
                                    },
                                    '& .MuiTypography-root': {
                                        color: 'white',
                                    }
                                }
                            }
                        }}
                        label="Date to"
                        value={dayjs(dateTo as string, 'YYYY-MM-DD')}
                        onChange={(newDate) => setDateTo(newDate)}
                    />

                    <FormControl sx={{ width: '120px' }}>
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
                    </FormControl>

                    <MainButton onClick={handleClickOnApplyButton} marginTop>Apply</MainButton>
                </Box>

                <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', minHeight: '687px' }}>
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
                    sx={{
                        width: '100%', [theme.breakpoints.between('mobileL', 'laptopL')]: {
                            overflow: 'hidden'
                        },
                    }}
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