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
import { useEffect } from "react";
import StocksRecommendationTrends from "./StocksRecommendationTrends";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSymbolDataForDefaultPeriod } from "../../Actions/fetchDispatchActions";

const Stocks = () => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch(getSymbolDataForDefaultPeriod(symbolName));
	}, [symbolName]);
	
	return (
		<ThemeProvider theme={theme}>
			<Box width={'100%'} height={'100%'}>
				<Header />
				<StocksContainer>
					<StocksBlackoutContainer>
						<StocksTitle />
						<Grid container>
							<Grid desktop={5} desktopOffset={0.25}>
								<StocksChart />
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
								<StocksHistoricalTable />
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