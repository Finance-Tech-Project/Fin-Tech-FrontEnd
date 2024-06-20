/* eslint-disable react-hooks/exhaustive-deps */
import { Backdrop, Box, Fade, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoginRegisterTextField } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle';
import { WatchListCreatePortfolioColumnsType, WatchListCreatePortfolioType } from '../../Types/WatchListModalCreatePortfolioType';
import { initialListForWatchListPortfolioCreate, transformTextForTableColumnHeadings } from '../../Functions/utilsFunctions';
import { CreatingColumnsForTables } from '../../Classes/CreatingColumnsForTables';
import { CreatingRowsForTables } from '../../Classes/CreatingRowsForTables';
import { WatchListModalPortfolioCreateButtons, WatchListModalPortfolioCreateContainerStyle, WatchListModalPortfolioCreateGridStyle } from '../../Styles/MyAccountStyles/WatchListModalPortfolioCreateStyle';
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles';
import { theme } from '../../Constants/MaterialConstants/theme';
import { PortfolioStocks, PortfolioType } from '../../Types/PortfolioTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createPortfolio } from '../../Actions/fetchWatchListActions';
import ModalFetchResponses from '../GeneralComponents/ModalFetchResponses';
import ModalCircularProgress from '../GeneralComponents/ModalCircularProgress';
import { putUserException } from '../../Reducers/userExeptionsReducer';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

interface Props {
	selected: WatchListCreatePortfolioType[],
	setOpenModalForCreatePortfolio: (value: React.SetStateAction<boolean>) => void,
}

const WatchListModalPortfolioCreate = ({ setOpenModalForCreatePortfolio, selected }: Props) => {
	const token = useAppSelector(state => state.tokenReducer);
	const login = useAppSelector(state => state.userReducer?.login);
	const [open, setOpen] = useState(true);
	const [columns, setColumns] = useState<Array<WatchListCreatePortfolioColumnsType>>([]);
	const [rows, setRows] = useState<Array<WatchListCreatePortfolioType>>([]);
	const [page, setPage] = React.useState(0);
	const dispatch = useAppDispatch();
	const [stocks, setStocks] = useState<Array<PortfolioStocks>>(initialListForWatchListPortfolioCreate(selected));
	const [portfolioName, setPortfolioName] = useState('');
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [openModalForCircularProgress, setOpenModalForCircularProgress] = useState(false);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleClose = () => {
		setOpen(false);
		setOpenModalForCreatePortfolio(false);
	};

	const handleCreatePortfolio = async () => {
		setOpenModalForCircularProgress(true);
		const portfolio = {} as PortfolioType;
		if (login && portfolioName !== '') {
			portfolio.userLogin = login;
			portfolio.portfolioName = portfolioName;
			portfolio.portfolioDate = new Date().toISOString().split("T").splice(0, 1)[0];
			portfolio.stocks = stocks;
			const responseStatus = await dispatch(createPortfolio(token!, portfolio));
			setOpenModalForCircularProgress(false);
			if (responseStatus && (responseStatus === 200 || responseStatus === 201)) {
				selected.splice(0, selected.length);
				setStocks(new Array<PortfolioStocks>());
				setPortfolioName('');
			}
		}
		if (portfolioName === '') {
			setOpenModalForCircularProgress(false);
			dispatch(putUserException({
				exceptionType: 0,
				exceptionMessage: 'Please enter your portfolio name.'
			}));
		}
	};

	const removeFromModalTablePortfolioCreate = (symbolName: string) => {
		const index = selected.findIndex(item => item.symbolName === symbolName);
		selected.splice(index, 1);
		setStocks(stocks.filter(p => p.symbolName !== symbolName));
		setRows(new CreatingRowsForTables().createRowsForWatchListPortfolioCreate(selected.length === 0 || !selected ? new Array<WatchListCreatePortfolioType>() : selected));
	};

	useEffect(() => {
		setColumns(new CreatingColumnsForTables().createColumnsForWatchListPortfolioCreate(selected));
		setRows(new CreatingRowsForTables().createRowsForWatchListPortfolioCreate(selected));
	}, []);
	
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500
				}
			}}
		>
			<Fade in={open}>
				<Grid container>
					<Grid mobileS={8} laptopL={9}
						sx={() => WatchListModalPortfolioCreateGridStyle(theme)}
					>
						{openModalForCircularProgress && <ModalCircularProgress openCloseModal={openModalForCircularProgress} />}
						<ModalFetchResponses />
						<Box sx={{
							display: 'flex',
							justifyContent: 'space-between',
							[theme.breakpoints.down('laptop')]: {
							    flexDirection: 'column'
							},
						}}>
							<LoginRegisterTextField
								label='Enter portfolio name'
								widthForModalPortfolioCreate
								onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPortfolioName(e.target.value)}
								value={portfolioName}
							></LoginRegisterTextField>

							<WatchListModalPortfolioCreateButtons marginTop
								 onClick={handleCreatePortfolio}>Create portfolio</WatchListModalPortfolioCreateButtons>
						</Box>

						<TableContainer component={Paper}
							sx={() => WatchListModalPortfolioCreateContainerStyle(theme)}>
							<Table stickyHeader aria-label="sticky table">
								<TableHead>
									<TableRow sx={{ backgroundColor: '#190033' }}>
										{columns?.map((column) => {
											return (
												<TableCell component="th" sx={{
													'&.MuiTableCell-root': {
														backgroundColor: '#190033',
														color: 'white'
													}
												}} key={column.id}>{transformTextForTableColumnHeadings(column.label)}</TableCell>
											);
										})}
									</TableRow>
								</TableHead>

								<TableBody>
									{rows
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((row) => {
											return (
												<TableRow key={row.symbolName}>
													{columns.map((column) => {
														const value = row[column.id];
														return (
															<TabelCellTicker key={column.id}>
																{value}
																{column.id === 'amountOfStocks' &&
																	<LoginRegisterTextField
																		id="standard-number"
																		type="number"
																		widthForTableModalPortfolioCreate
																		defaultValue='1'
																		onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
																			stocks.forEach((stock) => {
																				if (stock.symbolName === row.symbolName) {
																					stock.amountOfStocksForUserPortfolio = +e.target.value;
																				}
																			})
																		}}
																	></LoginRegisterTextField>
																}
																{column.id === 'removeSymbol' &&
																	<WatchListModalPortfolioCreateButtons widthForTable
																		onClick={() => removeFromModalTablePortfolioCreate(row.symbolName)}
																	>Remove</WatchListModalPortfolioCreateButtons>
																}
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
								width: '99.75%',
								border: '2px solid rgba(70, 75, 114, 0.8)',
								borderTop: 'none'
							}}
							rowsPerPageOptions={[10, 100, 1000]}
							component="div"
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</Grid>
				</Grid>
			</Fade>
		</Modal>
	)
}

export default WatchListModalPortfolioCreate