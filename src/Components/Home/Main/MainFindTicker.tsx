import React from 'react'
import { MainFindTickerBackgroundColor, MainFindTickerContainer } from '../../../Styles/MainStyles/MainStyles'

import Tickers from '../../Tickers/Tickers'
import { DisplaySizeProps } from '../../../Types/MainTypes'

const MainFindTicker = ({ displaySize }: DisplaySizeProps) => {
	return (
		<MainFindTickerContainer>
			<MainFindTickerBackgroundColor>
				<Tickers />
			</MainFindTickerBackgroundColor>
		</MainFindTickerContainer>
	)
}

export default MainFindTicker