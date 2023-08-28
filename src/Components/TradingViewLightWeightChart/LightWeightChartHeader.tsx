import React from 'react'
import { MainHeaderChartContainer, MainHeaderChartTickerDescr, MainHeaderChartTickerDescrContainer, MainHeaderChartTickerName, MainHeaderChartTickerNameContainer, MainHeaderChartTickerPriceContainer } from '../../Styles/MainStyles/MainChartStyle'
import { Box } from '@mui/material'
import { TickerDataType } from '../../Types/TickersTypes'

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
				<Box display={'flex'} flexDirection="column" justifyContent={'flex-end'} sx={{ minHeight: '70px' }}>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Max Price: </MainHeaderChartTickerDescr>
						{tickerData[0] && <MainHeaderChartTickerDescr>{tickerData[0].high.toFixed(2)}</MainHeaderChartTickerDescr>}
					</MainHeaderChartTickerPriceContainer>
					{tickerData[0] && <MainHeaderChartTickerDescr>Date from: {tickerData[0].time.toString()}</MainHeaderChartTickerDescr>}
				</Box>

				<Box display={'flex'} flexDirection="column" justifyContent={'flex-end'} sx={{ minHeight: '70px' }}>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Min Price: </MainHeaderChartTickerDescr>
						{tickerData[502] && <MainHeaderChartTickerDescr>{tickerData[502].low.toFixed(2)}</MainHeaderChartTickerDescr>}
					</MainHeaderChartTickerPriceContainer>
					{tickerData[502] && <MainHeaderChartTickerDescr>Date to: {tickerData[502].time.toString()}</MainHeaderChartTickerDescr>}
				</Box>
			</MainHeaderChartTickerDescrContainer>
		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader