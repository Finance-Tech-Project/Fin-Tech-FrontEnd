import { Box, ThemeProvider } from "@mui/material";
import Header from "../Home/Header/Header";
import { StocksBlackoutContainer, StocksContainer } from "../../Styles/StocksStyles/StocksStyle";
import Footer from "../Footer/Footer";
import StocksTitle from "./StocksTitle";
import StocksChart from "./StocksChart";
import StocksStatistics from "./StocksStatistics";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { theme } from "../../Constants/MaterialConstants/theme";
import StocksHistoricalTable from "./StocksHistoricalTable";
import { useEffect, useState } from "react";
import { TickerDataType, TickerDataVolumeType, TickerType } from "../../Types/TickersTypes";
import { getAllTickers, getTickerData } from "../../Actions/fetchActions";
import { MAIN_DATA, VOLUME_DATA } from "../../Constants/fetchConstants";
import { createCandleData, createColumnsForHistoricalTable, createHistogramAreaData, createRowsForHistoricalTable } from "../../Functions/dataProcessingFunctions";
import { HistoricalTableColumnType, HistoricalTableType } from "../../Types/HistoricalTableTypes";
import StocksRecommendationTrends from "./StocksRecommendationTrends";

export interface AutocompleteOption {
	name: string,
	companyName: string
}

const Stocks = () => {
	const [tickerData, setTickerData] = useState<Array<TickerDataType>>([]);
	const [tickerVolume, setTickerVolume] = useState<Array<TickerDataVolumeType>>([]);
	const [historicalTableColumns, setHistoricalTableColumns] = useState<HistoricalTableColumnType[] | undefined>([]);
	const [historicalTableRows, setHistoricalTableRows] = useState<HistoricalTableType[] | undefined>([]);
	const [selectedTicker, setSelectedTicker] = useState<string | null | undefined>('AAPL');
	const [isLoading, setIsLoading] = useState(false);
	const [selectedTickerName, setSelectedTickerName] = useState<string | null | undefined>('Apple Inc.');
	const [autocompleteTickers, setAutocompleteTickers] = useState<AutocompleteOption[]>([]);
	const [dateFrom, setDateFrom] = useState<string>('Loading...');
	const [dateTo, setDateTo] = useState<string>('Loading...');
	const [maxPrice, setMaxPrice] = useState<string | number>('Loading...');
	const [minPrice, setMinPrice] = useState<string | number>('Loading...');

	const getDataTicker = async () => {
		if (selectedTicker) {
			const dataTicker: Array<TickerDataType> | undefined = await getTickerData(selectedTicker!);
			setHistoricalTableRows(createRowsForHistoricalTable(dataTicker!));
			setHistoricalTableColumns(createColumnsForHistoricalTable(dataTicker!));
			setTickerVolume(createHistogramAreaData(VOLUME_DATA, dataTicker!));
			setTickerData(createCandleData(MAIN_DATA, dataTicker!));

			if (dataTicker && dataTicker[0].time && dataTicker[dataTicker.length - 1].time) {
				setDateFrom(dataTicker[0].time);
				setDateTo(dataTicker[dataTicker.length - 1].time);
			}

			if (dataTicker && dataTicker[dataTicker.length - 1].high && dataTicker[dataTicker.length - 1].low) {
				setMaxPrice(dataTicker[dataTicker.length - 1].high.toFixed(2));
				setMinPrice(dataTicker[dataTicker.length - 1].low.toFixed(2));
			}
		}
	}

	const getTickers = async () => {
		const allTickers: Array<TickerType> | undefined = await getAllTickers();
		const res: AutocompleteOption[] | undefined = allTickers?.map((ticker) => {
			const autocompleteTickers: AutocompleteOption = {
				name: ticker.name,
				companyName: ticker.companyName
			}
			return autocompleteTickers;
		});
		setAutocompleteTickers(res!);
	};

	const handleChangeTickerValue = (event: React.SyntheticEvent<Element, Event>) => {
		setSelectedTicker(event.currentTarget.childNodes[0].nodeValue!);
		if (!event.currentTarget.childNodes[0].nodeValue!) {
			setSelectedTicker('AAPL');
			setSelectedTickerName('Apple Inc.');
		}
		autocompleteTickers.forEach((ticker) => {
			if (ticker.name === event.currentTarget.childNodes[0].nodeValue!) {
				setSelectedTickerName(ticker.companyName);
			}
		})
	};

	useEffect(() => {
		setIsLoading(true);
		isLoading && getTickers();
		getDataTicker();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, selectedTicker, selectedTickerName]);

	return (
		<ThemeProvider theme={theme}>
			<Box width={'100%'} height={'100%'}>
				<Header />
				<StocksContainer>
					<StocksBlackoutContainer>
						<StocksTitle />
						<Grid container>
							<Grid desktop={5} desktopOffset={0.25}>
								<StocksChart
									dateFrom={dateFrom}
									dateTo={dateTo}
									maxPrice={maxPrice}
									minPrice={minPrice}
									tickerData={tickerData}
									tickerVolume={tickerVolume}
									selectedTicker={selectedTicker}
									selectedTickerName={selectedTickerName}
									handleChangeTickerValue={handleChangeTickerValue}
									autocompleteTickers={autocompleteTickers}
								/>
							</Grid>

							<Grid desktop={5} desktopOffset={1}>
								<StocksStatistics />
							</Grid>
						</Grid>

						<Grid container sx={{ width: '99%' }}>
							<Grid 
								desktop={7} desktopOffset={0.2}
								desktopL={7} desktopLOffset={0.25}
							>
								<StocksHistoricalTable historicalTableColumns={historicalTableColumns} historicalTableRows={historicalTableRows}/>
							</Grid>

							<Grid 
								desktop={3} desktopOffset={1}
								desktopL={3} desktopLOffset={1}
							>
								<StocksRecommendationTrends />
							</Grid>
						</Grid>
					</StocksBlackoutContainer>
				</StocksContainer>
				<Footer />
			</Box>
		</ThemeProvider>
	)
}

export default Stocks