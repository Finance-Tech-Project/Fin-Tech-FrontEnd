import { Box } from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MainArrowIconButton, MainButton } from '../../../Styles/MainStyles/MainContextStyle';
import { Link } from 'react-router-dom';
import { theme } from '../../../Constants/MaterialConstants/theme';
import { GridMainTickersTitleDescrStyle, MainFindTickerTitleTextContainer, MainTickerTitleContainer, MainTickerTitleWrapper, MainTickersTitleDesc, MainTickersTitleExplanation, MainTickersTitleHeader } from '../../../Styles/MainStyles/MainTickerTitleStyle';


const MainTickersTitle = () => {
	return (
		<MainTickerTitleContainer>
			<Grid container width="100%">
				<Grid mobileS={11} mobileSOffset={0.5}>
					<MainTickerTitleWrapper>
						<Grid container>
							<Grid mobileS={11} mobileSOffset={0.5} tablet={12} desktop={12} desktopOffset={0}>
								<MainTickersTitleHeader>
									In our stock page section you can:
								</MainTickersTitleHeader>
							</Grid>
						</Grid>

						<Box>
							<Grid container>
								<Grid mobileS={11} mobileSOffset={0.5}>
									<MainFindTickerTitleTextContainer>
										<MainTickersTitleDesc>
											View all stocks data for any period.
											Add your stock to portfolio. Make informed investment decisions based on the data-driven analysis of stock market trends.
											View a block of stock page and recommendations along with historical data for any ticker for any period of time.
										</MainTickersTitleDesc>
									</MainFindTickerTitleTextContainer>
								</Grid>
							</Grid>

							<Grid container	>
								<Grid sx={() => GridMainTickersTitleDescrStyle(theme)}
									mobileS={11} mobileSOffset={0.5}
									laptopL={11.5} laptopLOffset={0.5}
									desktop={11} desktopOffset={0.5}
								>
									<MainTickersTitleExplanation>
										Select your stock from the table of stocks and transfer it to the stocks section or simply click on the button.
									</MainTickersTitleExplanation>
									<Link to={`/stocks`}>
										<MainButton marginTop>Stocks
											<MainArrowIconButton></MainArrowIconButton>
										</MainButton>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</MainTickerTitleWrapper>
				</Grid>
			</Grid>

		</MainTickerTitleContainer>
	)
}

export default MainTickersTitle