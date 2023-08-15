import React, { useEffect, useState } from 'react'
import tickers from '../../../DataFiles/tickers.json'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';

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
		<Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<TextField variant="outlined" onChange={handleChangeData} sx={{paddingBottom: '20px', paddingTop: '20px'}}/>
				<TableContainer component={Paper} sx={{ width: '500px' }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{parseHeadData().map((column: Column) => {
									const columnName = column.id.replace('symbol', 'Symbol');
									return (
										<TableCell sx={{ '&.MuiTableCell-root': {
											backgroundColor: '#190033',
											color: 'white'
										}}} key={column.index}>{columnName}</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
								{parseData(data)
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										return (
											<TableRow onClick={handleRowClick} key={row.index} hover role="checkbox" >
												{parseHeadData()
													.map(((column) => {
														const value = row[column.id];
														return (
															<TableCell  key={column.index} sx={{'&.MuiTableCell-root': {
																									color: 'white',
																									backgroundColor: '#3e3e3e',
																									fontFamily: 'Inter, sans-serif',
																									'&:nth-of-type(1)': {
																										position: 'relative',
																										zIndex: 1,
																										borderRight: '1px solid #190033',
																										boxShadow: '5px 0px 20px 0px rgba(0,20,135,1)',
																										'&:hover': {
																											cursor: 'pointer',
																											borderBottom: '2px solid #190033',
																											marginBottom: '5px'
																										}
																									}
																								}
																							}}>
																{value}
															</TableCell>
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
				<TablePagination sx={{border: '1px solid black', backgroundColor: '#190033', color: 'white', '.MuiSvgIcon-root': {color: 'white'}}}
					rowsPerPageOptions={[10, 100, 1000]}
					component="div"
					count={parseData(data).length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Box>
		</Grid>
	)
}

export default Tickers