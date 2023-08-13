import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import tickers from '../../../DataFiles/tickers.json'
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import { Box } from '@mui/material';
import { Ticker } from 'react-ts-tradingview-widgets-fixed';
import { parse } from 'path';

export interface Ticker {
	"symbol": string,
	"Name": string,
	"Last Price": string,
	"Industry / Category": string,
	"Type": string,
	"Exchange": string
}

export interface Column {
	id: 'symbol' | 'Name' | 'Last Price' | 'Industry / Category' | 'Type' | 'Exchange',
	label: string
}

export enum ColumnType {
	"symbol" = "symbol",
	"Name" = "Name",
	"Last Price" = "Last Price",
	"Industry / Category" = "Industry / Category",
	"Type" = "Type",
	"Exchange" = "Exchange"
}


export const parseHeadData = () => {
	const data: any = Object.values(tickers)
	const headData = Object.keys(data[0])

	const res: Column[] = headData.map((data) => {

		const t: Column = {
			id: data.toString() as ColumnType.symbol,
			label: data
		}
		return t
	})
	return res
};

export const parseData = () => {
	const data: Array<Ticker> = Object.values(tickers);
	const tickersData: Array<Ticker> = data.map((ticker) => {
		const res: Ticker = {
			"symbol": ticker.symbol,
			"Name": ticker.Name,
			"Last Price": ticker['Last Price'],
			"Industry / Category": ticker['Industry / Category'],
			"Type": ticker.Type,
			"Exchange": ticker.Exchange
		}
		return res;
	})
	
	return tickersData

};

const Tickers = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(100);
	const [data, setData] = useState('');
	const [allTickers, setAllTickers] = useState<Array<Ticker>>(parseData());

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

	const identifier = (data: string)  => {
		data = data.toLowerCase();
		const res = parseData().map((tickerSym) => {
			const sym = tickerSym.symbol.toLowerCase();
			
			if (!sym.includes(data)) {
				const res1: Ticker = {
					symbol: '',
					Name: '',
					'Last Price': '',
					'Industry / Category': '',
					Type: '',
					Exchange: ''
				};
				return res1;
			}
			
			console.log(tickerSym);
				return tickerSym
		})
		
		setAllTickers(res);
	};

	

	useEffect(() => {
		data && identifier(data)
	}, [data])
	console.log()
	return (
		<Grid container >
			<Box sx={{display: 'flex', flexDirection: 'column'}}>
				<TextField variant="outlined" onChange={handleChangeData}/>
				<TableContainer component={Paper} sx={{ width: '1500px' }}>
					<Table>
						<TableHead>
							<TableRow>
								{parseHeadData().map((column: Column) => {
									return (
										<TableCell key={column.id}>{column.id}</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{allTickers
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row) => {
									return (
										<TableRow key={+row.symbol}>
											{parseHeadData().map((column) => {
												const value = row[column.id];
												return (
													<TableCell key={+column.id}>
														{value}
													</TableCell>
												)
											})}
										</TableRow>
									)
								})
							}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[100, 500, 1000]}
					component="div"
					count={parseData().length}
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