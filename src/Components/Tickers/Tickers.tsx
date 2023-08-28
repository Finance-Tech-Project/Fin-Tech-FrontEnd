import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles';
import { MainFindTickerContainer, MainFindTickerTextFieldContainer, MainTickersTextField, MainTickersTextFieldHeader } from '../../Styles/MainStyles/MainFindTickerStyle';
import LightWeightChart from '../TradingViewLightWeightChart/LightWeightChart';
import { getAllTickers, getTickerData } from '../../FetchActions/fetchActions';
import { TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from '../../Types/TickersTypes';
import { createCandleData, createColumns, createHistogramAreaData, createRows } from '../../FetchActions/dataProcessingFunctions';
import { MAIN_DATA, VOLUME_DATA } from '../../Constants/fetchConstants';
import MainTickerTitle from './MainTickerTitle';
import LightWeightChartHeader from '../TradingViewLightWeightChart/LightWeightChartHeader';

const Tickers = () => {
	const [data, setData] = useState('');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [selectedTicker, setSelectedTicker] = useState<string | null | undefined>('AAPL');
	const [selectedTickerName, setSelectedTickerName] = useState<string | null | undefined>('Apple Inc.');
	const [rows, setRows] = useState<Array<TickerType>>([]);
	const [columns, setColumns] = useState<Array<TickerColumnType>>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);

	const getTickers = async () => {
		const allTickers: Array<TickerType> | undefined = await getAllTickers();
		setColumns(createColumns(allTickers)!);
		setRows(createRows(data, allTickers)!);
	};

	const getDataTicker = async () => {
		if (selectedTicker) {
			const dataTicker: Array<TickerDataType> | undefined = await getTickerData(selectedTicker!);
			setTickerVolume(createHistogramAreaData(VOLUME_DATA, dataTicker!));
			setTickerData(createCandleData(MAIN_DATA, dataTicker!));
		}
	}

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
		setSelectedTickerName(event.currentTarget.childNodes[1].firstChild?.nodeValue);
	};

	const removeValues = () => {
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(true);
		isLoading && getTickers();
		getDataTicker();
		return () => removeValues();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, selectedTicker, data]);

	console.log(tickerData[0])
	return (
		<Box>
			<MainTickerTitle />
			<MainFindTickerContainer>
				<Grid container columns={{ desktopL: 10.16, laptop: 12.2, tablet: 13.5, mobileM: 12 }} display={'flex'} width={'100%'} height={'100%'}>
					<Grid mobileS={11} mobileSOffset={0.5}
						mobileM={11} mobileMOffset={0.5}
						mobileL={10} mobileLOffset={1.15}
						tablet={12} tabletOffset={0.75}
						laptop={4.3} laptopOffset={0.41}
						laptopL={3.3} laptopLOffset={0.73}
						desktop={3.3} desktopOffset={0.8}
						desktopL={2.36} desktopLOffset={0.8}
					>
						<MainFindTickerTextFieldContainer>
							<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<MainTickersTextField variant="outlined" onChange={handleChangeData} />
								<MainTickersTextFieldHeader>
									Find your Ticker
								</MainTickersTextFieldHeader>
							</Box>

							<TableContainer component={Paper} sx={{ width: '100%', height: '606.5px', backgroundColor: '#2c0951' }}>
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
													}} key={column.index}>{columnName}</TableCell>
												);
											})}
										</TableRow>
									</TableHead>
									<TableBody>
										{rows
											.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
											.map((row) => {
												return (
													<TableRow onClick={handleRowClick} key={row.index} hover role="checkbox" >
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
							</TableContainer>

							<TablePagination
								component={"div"}
								rowsPerPageOptions={[10, 100, 1000]}
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</MainFindTickerTextFieldContainer>
					</Grid>

					<Grid mobileS={11} mobileSOffset={0.5}
						mobileM={11} mobileMOffset={0.5}
						mobileL={10} mobileLOffset={1.15}
						tablet={12} tabletOffset={0.75}
						laptop={6.28} laptopOffset={0.8}
						laptopL={6.25} laptopLOffset={1}
						desktop={6.4} desktopOffset={1}
						desktopL={5.5} desktopLOffset={0.5}
					>
						<LightWeightChartHeader selectedTicker={selectedTicker} selectedTickerName={selectedTickerName} tickerData={tickerData}/>
						<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume} />
					</Grid>
				</Grid>
			</MainFindTickerContainer >
		</Box>
	)
}

export default Tickers