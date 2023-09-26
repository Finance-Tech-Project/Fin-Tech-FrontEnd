import { Box, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { MainFindTickerTableContainer } from '../../../Styles/MainStyles/MainFindTickerStyle';
import { TickerColumnType, TickerType } from '../../../Types/TickersTypes';
import { TabelCellTicker } from '../../../Styles/TickersStyles/TickersStyles';
import { createColumns, createRows, transformFirstLetterToUpperCase } from '../../../Functions/dataProcessingFunctions';
import { getTikersForMainPage } from '../../../Actions/fetchActions';

interface Props {
    data: string,
    handleRowClick: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void,
}

const MainTickersTable = ({ data, handleRowClick }: Props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = useState<Array<TickerType>>([]);
    const [columns, setColumns] = useState<Array<TickerColumnType>>([]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getTickers = async () => {
        const allTickers: Array<TickerType> | undefined = await getTikersForMainPage();
        return allTickers;
    };

    const allTickers = useMemo(() => {	
		return getTickers();
	}, []);

    useEffect(() => {
        setTimeout(async () => {
            setColumns(createColumns(await allTickers)!);
            setRows(createRows(data, await allTickers)!);
        }, 0);
    }, [data]);

    return (
        <Box>
            <MainFindTickerTableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column: TickerColumnType) => {
                                const columnName = column.id.replace('symbol', 'Symbol').replace('name', 'Name');
                                return (
                                    <TableCell component="th" sx={{
                                        '&.MuiTableCell-root': {
                                            backgroundColor: '#190033',
                                            color: 'white'
                                        }
                                    }} key={column.index}>{transformFirstLetterToUpperCase(columnName).replace("CompanyName", "Company Name")}</TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow onClick={event => handleRowClick(event)} key={row.index} hover role="checkbox" >
                                        {columns
                                            .map(((column: TickerColumnType) => {
                                                const value = row[column.id];
                                                return (
                                                    <TabelCellTicker key={column.index}>
                                                        {value}
                                                    </TabelCellTicker>
                                                );
                                            }))
                                        }
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </MainFindTickerTableContainer>

            <TablePagination
                sx={{ width: '100%' }}
                component={"div"}
                rowsPerPageOptions={[10, 100, 1000]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    )
}

export default MainTickersTable