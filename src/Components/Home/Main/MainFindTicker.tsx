import React from 'react'
import { MainFindTickerBackgroundColor, MainFindTickerContainer } from '../../../Styles/MainStyles/MainStyles'

import Tickers from '../../Statistics/Tickers/Tickers'
import { DisplaySizeProps } from '../../../Types/MainComponentTypes/MainTypes'

const MainFindTicker = ({ displaySize }: DisplaySizeProps) => {
	return (
		<MainFindTickerContainer>
			<MainFindTickerBackgroundColor>
				<Tickers displaySize={displaySize}/>
			</MainFindTickerBackgroundColor>
		</MainFindTickerContainer>
	)
}

export default MainFindTicker