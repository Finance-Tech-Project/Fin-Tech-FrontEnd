import { Box } from '@mui/material'
import React from 'react'
import { StockTitleDescr, StockTitleDescrRound, StockTitleHeader, StocksTitleContainer } from '../../Styles/StocksStyles/StocksStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const StocksTitle = () => {
	return (
		<Box display={'flex'} justifyContent={'center'}>
			<StocksTitleContainer>
				<Grid container>
					<Grid sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
						<StockTitleHeader>
							In our stocks section you can:
						</StockTitleHeader>
					</Grid>
				</Grid>

				<Grid container sx={{ paddingBottom: '30px', paddingTop: '20px' }}>
					<Grid sx={{ display: 'flex', flexDirection: 'column'}}
						mobileS={10.5} mobileSOffset={0.5}
						tablet={11} tabletOffset={0.5}
						laptopL={4.5} laptopLOffset={0.5}
						desktop={5} desktopOffset={0.5}
						desktopL={5} desktopLOffset={0.5}
					>
						<Box sx={{ display: 'flex', paddingBottom: '20px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								See how the stock behaved in the period you specified with options for choosing intervals.
							</StockTitleDescr>
						</Box>

						<Box sx={{ display: 'flex', paddingBottom: '20px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>

								Ability to view historical data for any period in a convenient interface.
							</StockTitleDescr>
						</Box>
					</Grid>

					<Grid sx={{ display: 'flex', flexDirection: 'column' }}
						mobileS={10.5} mobileSOffset={0.5}
						tablet={11} tabletOffset={0.5}
						laptopL={4.5} laptopLOffset={1.5}
						desktop={5} desktopOffset={1}
						desktopL={5} desktopLOffset={1}
					>
						<Box sx={{ display: 'flex', paddingBottom: '20px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								View calculated statistics for each company on the basis of which you can make investment decisions.
							</StockTitleDescr>
						</Box>

						<Box sx={{ display: 'flex', paddingBottom: '20px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								And also you can see our recommendations which of the stock is in the lead.
							</StockTitleDescr>
						</Box>
					</Grid>
				</Grid>
			</StocksTitleContainer>
		</Box >
	)
}

export default StocksTitle