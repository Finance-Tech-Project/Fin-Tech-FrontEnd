import { Box } from "@mui/material"
import Header from "../Home/Header/Header"
import { StockTitleDescr, StockTitleDescrRound, StockTitleHeader, StocksBlackoutContainer, StocksContainer, StocksTitleContainer } from "../../Styles/StocksStyles/StocksStyle"
import Footer from "../Footer/Footer"

const Statistics = () => {
	return (
		<Box width={'100%'} height={'100%'}>
			<Header />
			<StocksContainer>
				<StocksBlackoutContainer>
					<Box display={'flex'} justifyContent={'center'}>
						<StocksTitleContainer>
							<StockTitleHeader>
								In our stocks section you can:
							</StockTitleHeader>

							<Box sx={{ paddingLeft: '80px', display: 'flex' }}>
								<Box display={'flex'}>
									<StockTitleDescrRound />
									<StockTitleDescr>
										View how the stock behaved in the period you specified.
									</StockTitleDescr>
								</Box>

								<Box display={'flex'}>
									<StockTitleDescrRound />
									<StockTitleDescr>
										View how the stock behaved in the period you specified.
									</StockTitleDescr>
								</Box>
							</Box>


						</StocksTitleContainer>
					</Box>

				</StocksBlackoutContainer>
			</StocksContainer>
			<Footer />
		</Box>
	)
}

export default Statistics