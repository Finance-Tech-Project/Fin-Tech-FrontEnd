import React, { useEffect, useState } from 'react'
import { PortfolioContainer, PortfolioWrapper } from '../../Styles/MyAccountStyles/PortfolioStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GeneralAccountTitleContainer, GeneralAccountsTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';
import { Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { getAllUserPortfolios } from '../../Actions/fetchPortfoliosActions';
import { WatchLisTableContainerStyle } from '../../Styles/MyAccountStyles/WatchListStyle';
import { theme } from '../../Constants/MaterialConstants/theme';
import { PortfolioColumnsType, PortfolioRowsType, PortfolioType } from '../../Types/PortfolioTypes';
import { CreatingColumnsForTables } from '../../Classes/CreatingColumnsForTables';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { transformTextForTableColumnHeadings } from '../../Functions/utilsFunctions';
import { CreatingRowsForTables } from '../../Classes/CreatingRowsForTables';

const Portfolio = () => {
    const login = useAppSelector(state => state.userReducer?.login);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [columns, setColumns] = useState<Array<PortfolioColumnsType>>();
    const [rows, setRows] = useState<Array<PortfolioRowsType>>();
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);

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

    const fetchUserPortfolios = async () => {
        const portfolios: Array<PortfolioType> | undefined = await getAllUserPortfolios(login!);
        const portfolioColumnsObject = portfolios!.map(item => {
            return {
                portfolioName: item.portfolioName,
                portfolioDate: item.portfolioDate,
                portfolioPrice: item.stocks.reduce((acc, item) => { return acc += item.sumOfAmountOfStocks }, 0),
                removePortfolio: null
            }
        })
        setColumns(new CreatingColumnsForTables().createColumnsForPortfolio(portfolioColumnsObject));
        setRows(new CreatingRowsForTables().createRowsForPortfolio(portfolios));
    };

    useEffect(() => {
        fetchUserPortfolios();
    }, []);
    console.log(rows);
    return (
        <PortfolioContainer>
            <Grid container>
                <Grid mobileS={11} mobileSOffset={0.5}>
                    <PortfolioWrapper>
                        <GeneralAccountTitleContainer>
                            <GeneralAccountsTitleHeader>Portfolio</GeneralAccountsTitleHeader>
                            {!openCloseToolbar && <MyAccountPanelInterfaceToolbarArrowRight onClick={handleDrawerOpen}></MyAccountPanelInterfaceToolbarArrowRight>}
                        </GeneralAccountTitleContainer>

                        <Divider orientation='horizontal'
                            sx={{
                                backgroundColor: '#966fbd',
                                borderStyle: 'solid',
                                borderWidth: '3px',
                                marginTop: '20px'
                            }}
                        />

                        <TableContainer component={Paper}
                            sx={() => WatchLisTableContainerStyle(theme)}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns?.map((column: PortfolioColumnsType) => {
                                            return (
                                                <TableCell key={column.id} sx={{
                                                    '&.MuiTableCell-root': {
                                                        backgroundColor: '#190033',
                                                        color: 'white',
                                                        textAlign: 'center'
                                                    }
                                                }}>
                                                   {transformTextForTableColumnHeadings(column.id)}
                                                </TableCell> 
                                            )
                                        })}
                                    </TableRow>
                                </TableHead>

                                <TableBody>

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
                            count={0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </PortfolioWrapper>
                </Grid>
            </Grid>
        </PortfolioContainer>
    )
}

export default Portfolio