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
import { useMemo, useState } from "react";
import StocksRecommendationTrends from "./StocksRecommendationTrends";
import { useAppDispatch } from "../../app/hooks";
import { putSeriesName } from "../../Reducers/chartSeriesReducer";
import { ChartSeriesNames } from "../../Enums/Enums";

const Stocks = () => {
	const [getStatsClick, setGetStatsClick] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const handleClickStatistics = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setGetStatsClick((prev) => prev !== Boolean(event.currentTarget));
	};

	useMemo(() => {
		dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<Box width={'100%'} height={'100%'}>
				<Header />
				<StocksContainer>
					<StocksBlackoutContainer>
						<Grid container sx={{ width: '100%' }}>
							<Grid mobileS={11} mobileSOffset={0.5}>
								<StocksTitle />
							</Grid>

							<Grid mobileS={11} mobileSOffset={0.5}>
								{getStatsClick ? 
									<StocksStatistics handleClickStatistics={handleClickStatistics} />
									: <StocksChart handleClickStatistics={handleClickStatistics} />}
							</Grid>
						</Grid>

						<Grid container sx={{ width: '99%' }}>
							<Grid
								mobileS={11} mobileSOffset={0.5}
								desktop={7} desktopOffset={0.5}
								desktopL={7.5} desktopLOffset={0.5}
							>
								<StocksHistoricalTable />
							</Grid>

							<Grid
								mobileS={11} mobileSOffset={0.5}
								desktop={3.6} desktopOffset={0.5}
								desktopL={3.1} desktopLOffset={0.5}
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