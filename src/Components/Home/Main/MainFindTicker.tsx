import React from 'react'
import { MainFindTickerBackgroundColor, MainFindTickerContainer } from '../../../Styles/MainStyles/MainStyles'
import Tickers from '../../Statistics/Tickers/Tickers'
import { Box } from '@mui/material'

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