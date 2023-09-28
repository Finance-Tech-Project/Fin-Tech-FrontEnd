import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import { Box, Checkbox } from '@mui/material';
import TickersToolbar from './TickersCheckboxToolbar';
import { TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from '../../Types/TickersTypes';

export interface IsSelected {
	isSelected: (name: string) => boolean
}

const TickersCheckbox = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [data, setData] = useState('');
	const [selected, setSelected] = useState<readonly string[]>([]);
	const [rows, setRows] = useState<Array<TickerType>>([]);
	const [columns, setColumns] = useState<Array<TickerColumnType>>([]);
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const [selectedTicker, setSelectedTicker] = useState<string | null | undefined>('AAPL');
	const [selectedTickerName, setSelectedTickerName] = useState<string | null | undefined>('Apple Inc.');

	const getTickers = async () => {
		// const allTickers: Array<TickerType> | undefined = await getAllTickers();
		// setColumns(createColumns(allTickers)!);
		// setRows(createRows(data, allTickers)!);
	};

	// const getDataTicker = async () => {
	// 	if (selectedTicker) {
	// 		const dataTicker: Array<TickerDataType> | undefined = await getTickerData(selectedTicker);
	// 		setTickerVolume(createHistogramAreaData(VOLUME_DATA, dataTicker!));
	// 		setTickerData(createCandleData(MAIN_DATA, dataTicker!));
	// 	}
	// }

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.checked);
		if (event.target.checked) {
			const selectedTickers: string[] = rows.map((e) => e.name)
			setSelected(selectedTickers);
			return;
		}
		setSelected([]);
	};

	const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
		setSelectedTicker(event.currentTarget.childNodes[0].firstChild?.nodeValue);
		setSelectedTickerName(event.currentTarget.childNodes[1].firstChild?.nodeValue);
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
					rowCount={rows.length} 
					handleDeleteAllSelectedTickers={handleDeleteAllSelectedTickers}
				/>
				<TableContainer component={Paper} sx={{ width: '1000px' }}>
					<Table>
						<TableHead>
							<TableRow>
								{columns.map((column: TickerColumnType) => {
									return (
										<TableCell key={column.index}> {column.id}</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.name);
									const labelId = `enhanced-table-checkbox-${index}`;
									return (
										<TableRow role="checkbox" aria-checked={isItemSelected} selected={isItemSelected} key={row.index} onClick={handleRowClick}>
											{columns.map((column) => {
												const value = row[column.id];
												return (
													<TableCell key={column.index}>
														{value === row.name && <Checkbox 
																					checked={isItemSelected} 
																					onChange={event => handleClick(event, row.name)} 
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
					count={rows.length}
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