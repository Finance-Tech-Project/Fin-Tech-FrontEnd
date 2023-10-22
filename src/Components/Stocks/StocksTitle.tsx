import { Box } from '@mui/material'
import React from 'react'
import { StockTitleDescr, StockTitleDescrRound, StockTitleHeader, StocksTitleContainer } from '../../Styles/StocksStyles/StocksStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const StocksTitle = () => {
	return (
		<Box display={'flex'} justifyContent={'center'}>
			<StocksTitleContainer>
				<StockTitleHeader>
					In our stocks section you can:
				</StockTitleHeader>

				{/* <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '30px' }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px' }}>
						<Box display={'flex'} sx={{ maxWidth: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								See how the stock behaved in the period you specified with options for choosing intervals.
							</StockTitleDescr>
						</Box>

						<Box display={'flex'} sx={{ maxWidth: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								View calculated statistics for each company on the basis of which you can make investment decisions.
							</StockTitleDescr>
						</Box>
					</Box>

					<Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px' }}>
						<Box display={'flex'} sx={{ maxWidth: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								Ability to view historical data for any period in a convenient interface.
							</StockTitleDescr>
						</Box>

						<Box display={'flex'} sx={{ maxWidth: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								And also you can see our recommendations which of the stock is in the lead.
							</StockTitleDescr>
						</Box>
					</Box>
				</Box> */}
				<Grid container sx={{ paddingBottom: '30px', paddingTop: '20px' }}>
					<Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}
						laptopL={4.5} laptopLOffset={0.5}
						desktop={5} desktopOffset={0.5}
						desktopL={5} desktopLOffset={0.5}
					>
						<Box sx={{ display: 'flex' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								See how the stock behaved in the period you specified with options for choosing intervals.
							</StockTitleDescr>
						</Box>

						<Box sx={{ display: 'flex' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								View calculated statistics for each company on the basis of which you can make investment decisions.
							</StockTitleDescr>
						</Box>
					</Grid>

					<Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}
						laptopL={4.5} laptopLOffset={1.5}
						desktop={5} desktopOffset={1}
						desktopL={5} desktopLOffset={1}
					>
						<Box sx={{ display: 'flex' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								Ability to view historical data for any period in a convenient interface.
							</StockTitleDescr>
						</Box>

						<Box sx={{ display: 'flex' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								And also you can see our recommendations which of the stock is in the lead.
							</StockTitleDescr>
						</Box>
					</Grid>
				</Grid>


			</StocksTitleContainer>
		</Box>
	)
}

export default StocksTitle