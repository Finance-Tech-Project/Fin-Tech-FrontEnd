import React, { useEffect, useState } from 'react'
import { TickerDataType } from '../../Types/TickersTypes'
import { 
	MainHeaderChartContainer, 
	MainHeaderChartTickerDescr, 
	MainHeaderChartTickerDescrContainer, 
	MainHeaderChartTickerDescrWrapper, 
	MainHeaderChartTickerName, 
	MainHeaderChartTickerNameContainer, 
	MainHeaderChartTickerPriceContainer 
} from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle'

interface Props {
	selectedTicker: string | null | undefined,
	selectedTickerName: string | null | undefined,
	tickerData: Array<TickerDataType>
}

const LightWeightChartHeader = ({selectedTicker, selectedTickerName, tickerData}: Props) => {
	
	return (
		<MainHeaderChartContainer>
			<MainHeaderChartTickerNameContainer>
				<MainHeaderChartTickerName color fontSize>{selectedTicker}</MainHeaderChartTickerName>
				<MainHeaderChartTickerName>{selectedTickerName}</MainHeaderChartTickerName>
			</MainHeaderChartTickerNameContainer>
			<MainHeaderChartTickerDescrContainer>
				<MainHeaderChartTickerDescrWrapper>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Max Price: </MainHeaderChartTickerDescr>
						{/* {tickerData[0] && <MainHeaderChartTickerDescr>{tickerData[502].high.toFixed(2)}</MainHeaderChartTickerDescr>} */}
					</MainHeaderChartTickerPriceContainer>
					{/* {tickerData[0] && <MainHeaderChartTickerDescr>Date from: {tickerData[0].time.toString()}</MainHeaderChartTickerDescr>} */}
				</MainHeaderChartTickerDescrWrapper>

				<MainHeaderChartTickerDescrWrapper>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Min Price: </MainHeaderChartTickerDescr>
						{/* {tickerData[502] && <MainHeaderChartTickerDescr>{tickerData[502].low.toFixed(2)}</MainHeaderChartTickerDescr>} */}
					</MainHeaderChartTickerPriceContainer>
					{/* {tickerData[tickerData.length - 1] && <MainHeaderChartTickerDescr>Date to: {tickerData[tickerData.length - 1].time.toString()}</MainHeaderChartTickerDescr>} */}
				</MainHeaderChartTickerDescrWrapper>
			</MainHeaderChartTickerDescrContainer>
		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader