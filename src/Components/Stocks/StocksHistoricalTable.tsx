import React, { useState } from 'react'
import { StocksHistoricalTableContainer, StocksHistoricalTableDatePicker } from '../../Styles/StocksStyles/StocksHistoricalTableStyle'
import { Box, Divider, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { HistoricalTableColumnType, HistoricalTableType } from '../../Types/HistoricalTableTypes'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { transformFirstLetterToUpperCase } from '../../Functions/dataProcessingFunctions'
import { theme } from '../../Constants/MaterialConstants/theme';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle'

interface Props {
    historicalTableColumns: HistoricalTableColumnType[] | undefined,
    historicalTableRows: HistoricalTableType[] | undefined
}

const StocksHistoricalTable = ({ historicalTableColumns, historicalTableRows }: Props) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [dateFrom, setDateFrom] = React.useState<Dayjs | null | unknown>(dayjs('2022-04-17'));
    const [dateTo, setDateTo] = React.useState<Dayjs | null | unknown>(dayjs('2023-04-17'));
    const [period, setPeriod] = React.useState('');

    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StocksHistoricalTableContainer>
                <Typography variant='h4' sx={{ color: 'yellow', textAlign: 'start', padding: '10px 0 10px 0' }}>Historical data</Typography>
                <Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />

                <Box sx={{ padding: '20px 0 20px 0', display: 'flex', justifyContent: 'space-between'}}>
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
                        value={dateFrom}
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
                        value={dateTo}
                        onChange={(newDate) => setDateTo(newDate)}
                    />

                    <FormControl sx={{width: '120px'}}>
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
                            sx={{
                                '.MuiInputBase-input': {
                                    color: 'white',
                                    borderColor: 'white',
                                },
                                '& .MuiFormLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                },
                                '.MuiPopover-paper': {
                                    backgroundColor: '#190033'
                                },
                                '&.MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgba(70, 75, 114, 0.8)',
                                        borderWidth: '1.5px'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#7276ff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(70, 75, 114, 0.8)',
                                    }
                                }
                            }}
                            value={period}
                            label="Frequency"
                            onChange={handleChangePeriod}
                        >
                            <MenuItem value={'Daily'}>Daily</MenuItem>
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                        </Select>
                    </FormControl>

                    <MainButton marginTop>Apply</MainButton>
                </Box>

                <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', maxHeight: '620px' }}>
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
                                                    <TabelCellTicker sx={{textAlign: 'center'}} key={column.id}>
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