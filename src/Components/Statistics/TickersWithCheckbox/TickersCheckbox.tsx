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
import { Box, Checkbox } from '@mui/material';
import TickersToolbar from './TickersCheckboxToolbar';

export interface Ticker {
	"symbol": string,
	"Name": string,
	"Last Price": string,
	"Industry / Category": string,
	"Type": string,
	"Exchange": string,
	index?: number
}

export interface Column {
	id: 'symbol' | 'Name' | 'Last Price' | 'Industry / Category' | 'Type' | 'Exchange',
	label: string,
	index?: number
}

export enum ColumnType {
	"symbol" = "symbol",
	"Name" = "Name",
	"Last Price" = "Last Price",
	"Industry / Category" = "Industry / Category",
	"Type" = "Type",
	"Exchange" = "Exchange"
}

export interface IsSelected {
	isSelected: (name: string) => boolean
}

const TickersCheckbox = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [data, setData] = useState('');
	const [selected, setSelected] = useState<readonly string[]>([]);

	const parseHeadData = () => {
		const dataTickers: Ticker[] = Object.values(tickers);
		const headData = Object.keys(dataTickers[0]);
		const res: Column[] = headData.map((data) => {
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
				"Last Price": ticker['Last Price'],
				"Industry / Category": ticker['Industry / Category'],
				"Type": ticker.Type,
				"Exchange": ticker.Exchange,
				index: 0
			}
			return res;
		})
		tickersData.forEach((ticker, index) => ticker.index = index);
		if (param) {
			return tickersData.filter((ticker) => ticker.symbol.toLowerCase().includes(param) ? ticker : undefined);
		}
		return tickersData;
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.checked);
		if (event.target.checked) {
			const selectedTickers: string[] = parseData(data).map((e) => e.symbol)
			setSelected(selectedTickers);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: readonly string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};

	const handleDeleteAllSelectedTickers = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (!Boolean(event.currentTarget.value)) {
			setSelected([]);
			return;
		}
	};

	const isSelected = (name: string) => selected.indexOf(name) !== -1;

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

	useEffect(() => {

	}, [data])
	
	return (
		<Grid container sx={{ display: 'flex', justifyContent: 'center' }} >
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<TextField variant="outlined" onChange={handleChangeData} />
				<TickersToolbar 
					numSelected={selected.length} 
					handleSelectAllClick={handleSelectAllClick} 
					rowCount={parseData(data).length} 
					handleDeleteAllSelectedTickers={handleDeleteAllSelectedTickers}
				/>
				<TableContainer component={Paper} sx={{ width: '1000px' }}>
					<Table>
						<TableHead>
							<TableRow>
								{parseHeadData().map((column: Column) => {
									return (
										<TableCell key={column.index}> {column.id}</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{parseData(data)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.symbol);
									const labelId = `enhanced-table-checkbox-${index}`;
									return (
										<TableRow role="checkbox" aria-checked={isItemSelected} selected={isItemSelected} key={row.index}>
											{parseHeadData().map((column) => {
												const value = row[column.id];
												return (
													<TableCell key={column.index}>
														{value === row.symbol && <Checkbox 
																					checked={isItemSelected} 
																					onChange={event => handleClick(event, row.symbol)} 
																					inputProps={{ 'aria-labelledby': labelId }} 
																				/>}
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
					rowsPerPageOptions={[10, 100, 1000]}
					component="div"
					count={parseData(data).length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Box>

		</Grid >
	)
}

export default TickersCheckbox