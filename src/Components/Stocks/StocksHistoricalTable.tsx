import React, { useState } from 'react'
import { StocksHistoricalTableContainer } from '../../Styles/StocksStyles/StocksHistoricalTableStyle'
import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { HistoricalTableColumnType, HistoricalTableType } from '../../Types/HistoricalTableTypes'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { transformDate, transformFirstLetterToUpperCase, transformVolume } from '../../FetchActions/dataProcessingFunctions'
import { theme } from '../../Constants/MaterialConstants/theme'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface Props {
    historicalTableColumns: HistoricalTableColumnType[] | undefined,
    historicalTableRows: HistoricalTableType[] | undefined
}

const StocksHistoricalTable = ({ historicalTableColumns, historicalTableRows }: Props) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

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

                <Box sx={{ padding: '20px 0 20px 0' }}>
                    <DatePicker
                        sx={{
                            width: '320px',
                            '.MuiInputBase-input': {
                                color: 'white',
                                borderColor: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'rgba(70, 75, 114, 0.8)',
                                    borderWidth: '1.5px'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7276ff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'rgba(70, 75, 114, 0.8)',
                                },
                            },
                            '& .MuiFormLabel-root': {
                                color: 'white',
                            },
                            '& .MuiButtonBase-root': {
                                color: 'white',
                            }
                        }}
                        slotProps={{
                            layout: {
                                sx: {
                                    '& .MuiDateCalendar-root': {
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
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />

<DatePicker
                        sx={{
                            width: '320px',
                            '.MuiInputBase-input': {
                                color: 'white',
                                borderColor: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'rgba(70, 75, 114, 0.8)',
                                    borderWidth: '1.5px'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7276ff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'rgba(70, 75, 114, 0.8)',
                                },
                            },
                            '& .MuiFormLabel-root': {
                                color: 'white',
                            },
                            '& .MuiButtonBase-root': {
                                color: 'white',
                            }
                        }}
                        slotProps={{
                            layout: {
                                sx: {
                                    '& .MuiDateCalendar-root': {
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
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </Box>

                <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', maxHeight: '620px' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {historicalTableColumns?.map((column) => {
                                    return (
                                        <TableCell component="th" sx={{
                                            '&.MuiTableCell-root': {
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
                                                    <TabelCellTicker key={column.id}>
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