import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material';
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles';
import { MainFindTickerContainer, MainFindTickerTableContainer, MainFindTickerTextFieldContainer, MainTickersTextField, MainTickersTextFieldHeader } from '../../Styles/MainStyles/MainFindTickerStyle';
import LightWeightChart from '../TradingViewLightWeightChart/LightWeightChart';
import { getAllTickers, getTickerData } from '../../FetchActions/fetchActions';
import { TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from '../../Types/TickersTypes';
import { createCandleData, createColumns, createHistogramAreaData, createRows } from '../../FetchActions/dataProcessingFunctions';
import { MAIN_DATA, VOLUME_DATA } from '../../Constants/fetchConstants';
import MainTickerTitle from '../Home/Main/MainTickerTitle';
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

	return (
		<Box>
			<MainTickerTitle />
			<MainFindTickerContainer>


				<Box sx={{
					width: '85%',
					border: '2px solid rgba(70, 75, 114, 0.8)',
					padding: '40px',
					borderTopLeftRadius: '120px',
					borderBottomRightRadius: '120px',
					backgroundColor: 'rgba(4, 3, 28, 0.6)',
					boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)'
				}}>
			
					<Grid container  display={'flex'} width={'100%'} height={'100%'}>
						<Grid sx={{width: '100%',}}
							laptopL={11} laptopLOffset={0.5}
							desktop={11} desktopOffset={0.5}
							desktopL={11} desktopLOffset={0.5}
						>
							<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
								<MainTickersTextField variant="outlined" onChange={handleChangeData} label="Find your Ticker"/>
							</Box>
						</Grid>

						<Grid sx={{ height: '100%' }}
							laptopL={4} laptopLOffset={0.5}
							desktop={4} desktopOffset={0.5}
							desktopL={4} desktopLOffset={0.5}
						>
							<MainFindTickerTableContainer >
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
																	<TabelCellTicker key={column.index} sx={{ height: '29.5px' }}>
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
						</Grid>

						<Grid 
							laptopL={6.5} laptopLOffset={0.5}
							desktop={6.5} desktopOffset={0.5}
							desktopL={6.5} desktopLOffset={0.5}
						>
							<LightWeightChartHeader selectedTicker={selectedTicker} selectedTickerName={selectedTickerName} tickerData={tickerData} />
							<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume} />
						</Grid>
					</Grid>
				</Box>

			</MainFindTickerContainer >
		</Box>
	)
}

export default Tickers