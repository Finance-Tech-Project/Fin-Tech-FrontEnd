import { findMaxMinPrice } from '../../Functions/dataProcessingFunctions';
import {
	MainHeaderChartContainer,
	MainHeaderChartTickerDescr,
	MainHeaderChartTickerDescrContainer,
	MainHeaderChartTickerDescrWrapper,
	MainHeaderChartTickerName,
	MainHeaderChartTickerNameContainer,
	MainHeaderChartTickerPriceContainer
} from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle'
import { TickerDataType } from '../../Types/TickersTypes';
import { useAppSelector } from '../../app/hooks';

interface Props {
	data: TickerDataType[]
}

const LightWeightChartHeader = ({ data }: Props) => {
	const { symbolName, companyName } = useAppSelector(state => state.selectedSymbolReducer);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);

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
						<MainHeaderChartTickerDescr>{findMaxMinPrice(data, "max")}</MainHeaderChartTickerDescr>
					</MainHeaderChartTickerPriceContainer>
					<MainHeaderChartTickerDescr>Date from: {currentDateFrom.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
				</MainHeaderChartTickerDescrWrapper>

				<MainHeaderChartTickerDescrWrapper>
					<MainHeaderChartTickerPriceContainer>
						<MainHeaderChartTickerDescr>Min Price: </MainHeaderChartTickerDescr>
						<MainHeaderChartTickerDescr>{findMaxMinPrice(data, "min")}</MainHeaderChartTickerDescr>
					</MainHeaderChartTickerPriceContainer>
					<MainHeaderChartTickerDescr>Date to: {currentDateTo.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
				</MainHeaderChartTickerDescrWrapper>
			</MainHeaderChartTickerDescrContainer>
		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader