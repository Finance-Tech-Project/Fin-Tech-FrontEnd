import { Box } from '@mui/material'
import React from 'react'
import { StockTitleDescr, StockTitleDescrRound, StockTitleHeader, StocksTitleContainer } from '../../Styles/StocksStyles/StocksStyle'

const StocksTitle = () => {
	return (
		<Box display={'flex'} justifyContent={'center'}>
			<StocksTitleContainer>
				<StockTitleHeader>
					In our stocks section you can:
				</StockTitleHeader>

				<Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '30px' }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px' }}>
						<Box display={'flex'} sx={{ width: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								See how the stock behaved in the period you specified with options for choosing intervals.
							</StockTitleDescr>
						</Box>

						<Box display={'flex'} sx={{ width: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								View calculated statistics for each company on the basis of which you can make investment decisions.
							</StockTitleDescr>
						</Box>
					</Box>

					<Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px' }}>
						<Box display={'flex'} sx={{ width: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								Ability to view historical data for any period in a convenient interface.
							</StockTitleDescr>
						</Box>

						<Box display={'flex'} sx={{ width: '650px' }}>
							<StockTitleDescrRound />
							<StockTitleDescr>
								And also you can see our recommendations which of the stock is in the lead.
							</StockTitleDescr>
						</Box>
					</Box>
				</Box>
			</StocksTitleContainer>
		</Box>
	)
}

export default StocksTitle