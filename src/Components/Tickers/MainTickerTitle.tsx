import { Box } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { MainArrowIconButton, MainButton } from '../../Styles/MainStyles/MainContextStyle';
import { Link } from 'react-router-dom';
import { MainFindTickerTextContainer, MainTickersDesc, MainTickersExplanation, MainTickersHeader } from '../../Styles/TickersStyles/MainTickerTitle';


const MainTickersTitle = () => {
	return (
		<Box>
			<Grid container>
				<Grid mobileL={11} mobileLOffset={0.5} tablet={12} laptop={12} laptopL={12} desktop={12} desktopOffset={0}>
					<MainTickersHeader>
						In our stock page section you can:
					</MainTickersHeader>
				</Grid>
			</Grid>

			<Box>
				<Grid container columns={{ tablet: 13, laptop: 12, laptopL: 13 }}>
					<Grid mobileS={9} mobileSOffset={1.75}
						mobileM={10} mobileMOffset={1}
						mobileL={10} mobileLOffset={1}
						tablet={12} tabletOffset={0.5}
						laptop={11} laptopOffset={0.5}
						laptopL={11} laptopLOffset={0.9}
						desktop={11.5} desktopOffset={0.8}
						desktopL={11} desktopLOffset={1.1}
					>
						<MainFindTickerTextContainer>
							<Box>
								<MainTickersDesc>
									View all stocks data for any period.
									Add your stock to portfolio. Make informed investment decisions based on the data-driven analysis of stock market trends.
									View a block of stock page and recommendations along with historical data for any ticker for any period of time.
								</MainTickersDesc>
							</Box>

						</MainFindTickerTextContainer>
					</Grid>
				</Grid>

				<Grid container columns={{ laptop: 15, laptopL: 12, desktop: 15 }}>
					<Grid mobileS={9} mobileSOffset={1.75}
						mobileM={9.5} mobileMOffset={1.25}
						mobileL={10.5} mobileLOffset={0.65}
						tablet={7} tabletOffset={0.7}
						laptop={10} laptopOffset={0.8}
						laptopL={8} laptopLOffset={1}
						desktop={11} desktopOffset={1}
						desktopL={10} desktopLOffset={1.25}
					>
						<MainTickersExplanation>
							Select your stock from the table of stocks and transfer it to the stocks section or simply click on the button.
						</MainTickersExplanation>
					</Grid>
					<Grid mobileS={2} mobileSOffset={2.2}
						mobileM={2} mobileMOffset={2.5}
						mobileL={2} mobileLOffset={3}
						tablet={2} tabletOffset={0.5}
						laptop={2} laptopOffset={0.35}
						laptopL={1} laptopLOffset={0.08}
						desktop={2} desktopOffset={0.5}
						desktopL={2} desktopLOffset={1}
					>

						<Link to={`/stocks`}>
							<MainButton>Stocks
								<MainArrowIconButton></MainArrowIconButton>
							</MainButton>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default MainTickersTitle