import React from 'react'
import { StocksStatisticsContainer, StocksStatisticsLeftTableContainer } from './SocksStatisticsStyle'
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'


const StocksStatistics = () => {
    return (
        <StocksStatisticsContainer>
            <StocksStatisticsLeftTableContainer>
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead >
                            <TableRow>
                                <TableCell sx={{

                                }}>Stock Price History</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </StocksStatisticsLeftTableContainer>
        </StocksStatisticsContainer>
    )
}

export default StocksStatistics