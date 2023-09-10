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
	dateFrom: string,
	dateTo: string,
	maxPrice: string | number,
	minPrice: string | number
}

const LightWeightChartHeader = ({selectedTicker, selectedTickerName, dateFrom, dateTo, maxPrice, minPrice}: Props) => {
	
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
						<MainHeaderChartTickerDescr>{maxPrice}</MainHeaderChartTickerDescr>
					</MainHeaderChartTickerPriceContainer>
					<MainHeaderChartTickerDescr>Date from: {dateFrom}</MainHeaderChartTickerDescr>
				</MainHeaderChartTickerDescrWrapper>

				<MainHeaderChartTickerDescrWrapper>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Min Price: </MainHeaderChartTickerDescr>
						<MainHeaderChartTickerDescr>{minPrice}</MainHeaderChartTickerDescr>
					</MainHeaderChartTickerPriceContainer>
					<MainHeaderChartTickerDescr>Date to: {dateTo}</MainHeaderChartTickerDescr>
				</MainHeaderChartTickerDescrWrapper>
			</MainHeaderChartTickerDescrContainer>
		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader