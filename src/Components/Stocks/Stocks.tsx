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
						</Grid>

						<Grid container sx={{ width: '100%' }}>
							<Grid 
								mobileM={8.75} mobileMOffset={0.5}
								mobileL={9.1} mobileLOffset={0.5}
								tablet={9.6} tabletOffset={0.5}
								laptop={10.1} laptopOffset={0.5}
								laptopL={10.55} laptopLOffset={0.5}
								desktop={10.8} desktopOffset={0.5}
								desktopL={11} desktopLOffset={0.5}
							>
								{getStatsClick ? 
									<StocksStatistics handleClickStatistics={handleClickStatistics} />
									: <StocksChart handleClickStatistics={handleClickStatistics} />}
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