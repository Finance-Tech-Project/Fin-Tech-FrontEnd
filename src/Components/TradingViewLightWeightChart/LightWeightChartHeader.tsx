import {
	MainHeaderChartContainer,
	MainHeaderChartTickerDescr,
	MainHeaderChartTickerDescrContainer,
	MainHeaderChartTickerDescrWrapper,
	MainHeaderChartTickerName,
	MainHeaderChartTickerNameContainer,
	MainHeaderChartTickerPriceContainer
} from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle'
import { useAppSelector } from '../../app/hooks';

interface Props {
	dateFrom: string,
	dateTo: string,
	maxPrice: string | number,
	minPrice: string | number
}

const LightWeightChartHeader = ({ dateFrom, dateTo, maxPrice, minPrice }: Props) => {
	const { symbolName, companyName } = useAppSelector(state => state.selectedSymbolReducer);

	return (
		<MainHeaderChartContainer>
			<MainHeaderChartTickerNameContainer>
				<MainHeaderChartTickerName color fontSize>{symbolName}</MainHeaderChartTickerName>
				<MainHeaderChartTickerName>{companyName}</MainHeaderChartTickerName>
			</MainHeaderChartTickerNameContainer>
			<MainHeaderChartTickerDescrContainer>
				<MainHeaderChartTickerDescrWrapper>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Max Price: </MainHeaderChartTickerDescr>
						<MainHeaderChartTickerDescr>{maxPrice}</MainHeaderChartTickerDescr>
					</MainHeaderChartTickerPriceContainer>
					<MainHeaderChartTickerDescr>Date from: {dateFrom.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
				</MainHeaderChartTickerDescrWrapper>

				<MainHeaderChartTickerDescrWrapper>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Min Price: </MainHeaderChartTickerDescr>
						<MainHeaderChartTickerDescr>{minPrice}</MainHeaderChartTickerDescr>
					</MainHeaderChartTickerPriceContainer>
					<MainHeaderChartTickerDescr>Date to: {dateTo.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
				</MainHeaderChartTickerDescrWrapper>
			</MainHeaderChartTickerDescrContainer>
		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader