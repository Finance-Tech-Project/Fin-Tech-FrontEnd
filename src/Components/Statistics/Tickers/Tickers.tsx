import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { TabelCellTicker } from '../../../Styles/TickersStyles/TickersStyles';
import { MainFindTickerContainer, MainFindTickerTextContainer, MainFindTickerTextFieldContainer, MainFindTickerTextGridDescrStyle, MainFindTickerTextGridTitleStyle, MainFindTickerTextWrapper, MainTickerImagePng, MainTickerImagePngContainer, MainTickersDesc, MainTickersExplanation, MainTickersHeader, MainTickersTextField, MainTickersTextFieldHeader } from '../../../Styles/MainStyles/MainFindTickerStyle';
import { MainArrowIconButton, MainButton } from '../../../Styles/MainStyles/MainContextStyle';
import { Link } from 'react-router-dom';
import LightWeightChart from '../../TradingViewLightWeightChart/LightWeightChart';
import { getAllTickers, getDefaultTickerData, getTickerData } from '../../../FetchActions/fetchActions';
import { TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from '../../../Types/TickersTypes';
import { createCandleData, createColumns, createHistogramAreaData, createRows, delimiterDataToPeriods } from '../../../FetchActions/dataProcessingFunctions';
import { MAIN_DATA, VOLUME_DATA } from '../../../Constants/fetchConstants';
import { MainHeaderChartContainer, MainHeaderChartTickerDescr, MainHeaderChartTickerDescrContainer, MainHeaderChartTickerName, MainHeaderChartTickerNameContainer } from '../../../Styles/MainStyles/MainChartStyle';
import { theme } from '../../../Constants/MaterialConstants/theme';
import { DisplaySizeProps } from '../../../Types/MainComponentTypes/MainTypes';

const Tickers = ({ displaySize }: DisplaySizeProps) => {
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
		getDataDefaultTicker();
		if (selectedTicker) {
			const dataTicker: Array<TickerDataType> | undefined = await getTickerData(selectedTicker);
			setTickerVolume(createHistogramAreaData(VOLUME_DATA, dataTicker!));
			setTickerData(createCandleData(MAIN_DATA, dataTicker!));
		}
	}

	const getDataDefaultTicker = async () => {
		const defaultTicker: Array<TickerDataType> | undefined = await getDefaultTickerData();
		if (tickerData.length === 0) {
			setTickerData(createCandleData(MAIN_DATA, defaultTicker!));
		}
		if (tickerVolume.length === 0) {
			setTickerVolume(createHistogramAreaData(VOLUME_DATA, defaultTicker!));
		}
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
		setSelectedTickerName(event.currentTarget.childNodes[1].firstChild?.nodeValue);
	};

	const removeValues = () => {
		// setSelectedTicker('');
		setIsLoading(false);
	};

	useEffect(() => {

		setIsLoading(true);
		isLoading && getTickers();
		getDataTicker();
		return () => removeValues();
	}, [isLoading, selectedTicker, data]);

	// console.log(tickerData)
	return (
		<Box>

			<Grid container>
				<Grid mobileL={12} tablet={12} laptop={12}>
					<MainTickersHeader>
						In our stock page section you can:
					</MainTickersHeader>
				</Grid>

			</Grid>
			<MainFindTickerTextWrapper>
				<Grid container columns={{ tablet: 13, laptop: 12 }} 
						sx={() => MainFindTickerTextGridTitleStyle(theme)}>
					<Grid mobileS={9} mobileSOffset={1.75}
						mobileM={10} mobileMOffset={1}
						mobileL={11} mobileLOffset={0.5}
						tablet={12} tabletOffset={0.5}
						laptop={9} laptopOffset={0.55}
						laptopL={4.2} laptopLOffset={0.7}
					>
						<MainFindTickerTextContainer>
							<Box>
								<MainTickersDesc>
									View all stocks data for any period.
								</MainTickersDesc>
								<MainTickersDesc>
									Add your stock to portfolio. Make informed investment decisions based on the data-driven analysis of stock market trends.
								</MainTickersDesc>
								<MainTickersDesc>View a block of stock page and recommendations along with historical data for any ticker for any period of time.</MainTickersDesc>
							</Box>
							{ displaySize > theme.breakpoints.values.laptopL -1 && 
								<MainTickerImagePngContainer>
									<MainTickerImagePng ></MainTickerImagePng>
								</MainTickerImagePngContainer>
							}
						</MainFindTickerTextContainer>
					</Grid>
				</Grid>

				<Grid container columns={{laptop: 15}} sx={() => MainFindTickerTextGridDescrStyle(theme)}>
					<Grid mobileS={9} mobileSOffset={1.75}
						mobileM={9.5} mobileMOffset={1.25}
						mobileL={10} mobileLOffset={1}
						tablet={11} tabletOffset={0.5}
						laptop={12} laptopOffset={4.5}
					>
						<MainTickersExplanation>
							Select your stock from the table of stocks and transfer it to the stocks section or simply click on the button
							<Link to={`/analytics`}>
								<MainButton marginLeft>Stocks
									<MainArrowIconButton></MainArrowIconButton>
								</MainButton>
							</Link>
						</MainTickersExplanation>
					</Grid>
				</Grid>
			</MainFindTickerTextWrapper>

			<MainFindTickerContainer>

				<Grid container columns={{ desktopL: 10.16, laptop: 12.2, tablet: 13.5, mobileM: 12 }} display={'flex'} width={'100%'}>
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


							<TableContainer component={Paper} sx={{ width: '100%', minHeight: '583px', maxHeight: '585px' }}>
								<Table stickyHeader aria-label="sticky table">
									<TableHead >
										<TableRow>
											{columns.map((column: TickerColumnType) => {
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

						<MainHeaderChartContainer>
							<MainHeaderChartTickerNameContainer>
								{tickerData[0] && <MainHeaderChartTickerName color fontSize>{selectedTicker}</MainHeaderChartTickerName>}
								{tickerData[0] && <MainHeaderChartTickerName>{selectedTickerName}</MainHeaderChartTickerName>}
							</MainHeaderChartTickerNameContainer>
							<MainHeaderChartTickerDescrContainer>
								{tickerData[0] && <MainHeaderChartTickerDescr>Max Price: {tickerData[0].high.toFixed(2)}</MainHeaderChartTickerDescr>}
								{tickerData[0] && <MainHeaderChartTickerDescr>Min Price: {tickerData[502].high.toFixed(2)}</MainHeaderChartTickerDescr>}
							</MainHeaderChartTickerDescrContainer>

						</MainHeaderChartContainer>

						<LightWeightChart tickerData={tickerData} tickerVolume={tickerVolume} />
					</Grid>
				</Grid>
			</MainFindTickerContainer >
		</Box>


	)
}



export default Tickers