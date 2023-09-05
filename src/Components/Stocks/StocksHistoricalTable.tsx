import React from 'react'
import { StocksHistoricalTableContainer } from '../../Styles/StocksStyles/StocksHistoricalTableStyle'
import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { HistoricalTableColumnType, HistoricalTableType } from '../../Types/HistoricalTableTypes'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { transformDate, transformFirstLetterToUpperCase, transformVolume } from '../../FetchActions/dataProcessingFunctions'

interface Props {
    historicalTableColumns: HistoricalTableColumnType[] | undefined,
    historicalTableRows: HistoricalTableType[] | undefined
}

const StocksHistoricalTable = ({ historicalTableColumns, historicalTableRows }: Props) => {
    return (
        <StocksHistoricalTableContainer>
            <Typography variant='h4' sx={{ color: 'yellow', textAlign: 'start', padding: '10px 0 10px 0' }}>Historical data</Typography>
            <Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />

            <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951' }}>
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
                        {historicalTableRows?.map((row) => {
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
        </StocksHistoricalTableContainer>
    )
}

export default StocksHistoricalTable