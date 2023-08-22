import React from 'react'
import { MainFindTickerBackgroundColor, MainFindTickerContainer } from '../../../Styles/MainStyles/MainStyles'

import { Box } from '@mui/material'
import Tickers from '../../Statistics/Tickers/Tickers'

const MainFindTicker = () => {
	return (
		<MainFindTickerContainer>
			<MainFindTickerBackgroundColor>
			
					<Tickers />
			
				
			</MainFindTickerBackgroundColor>


		</MainFindTickerContainer>
	)
}

export default MainFindTicker