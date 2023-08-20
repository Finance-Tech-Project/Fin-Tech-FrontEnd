import React, { useEffect, useState } from 'react'
import tickers from '../../../DataFiles/tickers.json'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import { TabelCellTicker, TablePaginationTickerStyle } from '../../../Styles/TickersStyles/TickersStyles';
import { MainFindTickerContainer, MainFindTickerTextContainer, MainFindTickerTextFieldContainer, MainTickersDesc, MainTickersExplanation, MainTickersHeader, MainTickersTextField, MainTickersTextFieldHeader } from '../../../Styles/MainStyles/MainFindTickerStyle';
import { MainArrowIconButton, MainButton } from '../../../Styles/MainStyles/MainContextStyle';
import { theme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export interface Ticker {
	"symbol": string,
	"Name": string,
	index?: number
}

export interface Column {
	id: 'symbol' | 'Name',
	label: string,
	index?: number
}

export enum ColumnType {
	"symbol" = "symbol",
	"Name" = "Name"
}

const Tickers = () => {
	const [data, setData] = useState('');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [selectedTicker, setSelectedTicker] = useState<string | null | undefined>('');

	const parseHeadData = () => {
		const dataTickers: Ticker[] = Object.values(tickers);
		const headData = Object.keys(dataTickers[0]);
		const res: Column[] = headData.slice(0, 2).map((data) => {
			const newData: Column = {
				id: data.toString() as ColumnType.symbol,
				label: data,
				index: 0
			}
			return newData;
		});
		res.forEach((ticker, index) => ticker.index = index);
		return res;
	};

	const parseData = (param: string) => {
		const data: Array<Ticker> = Object.values(tickers);
		const tickersData: Array<Ticker> = data.map((ticker) => {
			const res: Ticker = {
				"symbol": ticker.symbol,
				"Name": ticker.Name,
				index: 0
			}
			return res;
		})
		tickersData.forEach((ticker, index) => ticker.index = index);
		if (param) {
			return tickersData.filter((ticker) => (ticker.symbol.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined)
				|| (ticker.Name.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined));
		}
		return tickersData;
	};

	const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData(event.target.value)
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
		setSelectedTicker(event.currentTarget.childNodes[0].firstChild?.nodeValue);
	};

	useEffect(() => {
		return () => setSelectedTicker('');
	}, []);

	console.log(selectedTicker)
	return (
		<MainFindTickerContainer>
			<Grid container columns={{ desktopL: 10.16, laptop: 12.2, tablet: 13.5 }} display={'flex'} width={'100%'}>
				<Grid desktopL={2.36} desktopLOffset={0.8}
					desktop={3.3} desktopOffset={0.8}
					laptopL={3.3} laptopLOffset={0.73}
					laptop={4.3} laptopOffset={0.41}
					tablet={6.7} tabletOffset={0.45}
					mobileL={8} mobileLOffset={2.15}
				>
					<MainFindTickerTextFieldContainer>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<MainTickersTextField variant="outlined" onChange={handleChangeData} />
							<MainTickersTextFieldHeader>
								Find your Tickers
							</MainTickersTextFieldHeader>
						</Box>


						<TableContainer component={Paper} sx={{ width: '500px', minHeight: '583px', maxHeight: '585px' }}>
							<Table stickyHeader aria-label="sticky table">
								<TableHead >
									<TableRow>
										{parseHeadData().map((column: Column) => {
											const columnName = column.id.replace('symbol', 'Symbol');
											return (
												<TableCell component="th" sx={{
													'&.MuiTableCell-root': {
														backgroundColor: '#190033',
														color: 'white'
													}
												}} key={column.index}>{columnName}</TableCell>
											);
										})}
									</TableRow>
								</TableHead>
								<TableBody>
									{parseData(data)
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((row) => {
											return (
												<TableRow onClick={handleRowClick} key={row.index} hover role="checkbox" >
													{parseHeadData()
														.map(((column) => {
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

						</TableContainer>
						<TablePagination
							component={"div"}
							rowsPerPageOptions={[10, 100, 1000]}
							count={parseData(data).length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}

						/>
					</MainFindTickerTextFieldContainer>
				</Grid>


				<Grid desktopL={5} desktopLOffset={1}
					desktop={5} desktopOffset={2.16}
					laptopL={5} laptopLOffset={2.06}
					laptop={5.5} laptopOffset={1.6}
					tablet={5.3} tabletOffset={0.65}
					mobileL={8} mobileLOffset={2.15}
				>
					<MainFindTickerTextContainer>
						<MainTickersHeader>
							In our analytics section you can:
						</MainTickersHeader>
						<Box sx={{ maxWidth: '750px' }}>
							<MainTickersDesc>
								Evaluate the dependencies of your stocks.
							</MainTickersDesc>
							<MainTickersDesc>
								View all stock data for any period. Evaluate the dependencies of two stocks at once.
							</MainTickersDesc>
							<MainTickersDesc>
								Create your stocks portfolio. Make informed investment decisions based on the data-driven analysis of stock market trends.
							</MainTickersDesc>
							<MainTickersExplanation>
								Select your stock from the table on the left and transfer it to the analytics section or simply click on the button
								<Link to={`/analytics`}>
									<MainButton sx={{ marginTop: '0', marginLeft: '30px' }}>Analytics
										<MainArrowIconButton></MainArrowIconButton>
									</MainButton>
								</Link>

							</MainTickersExplanation>
						</Box>

					</MainFindTickerTextContainer>
				</Grid>
			</Grid>
		</MainFindTickerContainer>

	)
}

export default Tickers