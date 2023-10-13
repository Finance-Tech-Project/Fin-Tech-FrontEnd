import React, { useEffect } from 'react';
import { findMaxMinPrice, getColorForLightWeightHeader } from '../../Functions/utilsFunctions';
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
import { Box, Divider } from '@mui/material';
import { DefaultPeriods } from '../../Enums/Enums';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

interface Props {
	data: TickerDataType[],
	isClickedToCompare?: boolean
}

const LightWeightChartHeader = ({ data, isClickedToCompare }: Props) => {
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const volatility = useAppSelector(state => state.analyticInterfaceReducer.volatility);

	return (
		<MainHeaderChartContainer borderTopRightRadius>
			{simpleIncome.simpleIncomeDataToCompare.length === 0 ? (
				<React.Fragment>
					{!isClickedToCompare ? (
						<React.Fragment>
							<MainHeaderChartTickerNameContainer>
								<MainHeaderChartTickerName color fontSize>{symbolName.symbolName}</MainHeaderChartTickerName>
								<MainHeaderChartTickerName>{symbolName.companyName}</MainHeaderChartTickerName>
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
						</React.Fragment>
					) : (
						<Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
							<Grid 
								desktopL={2}
							>
								<Box sx={{paddingLeft: '20px'}}>
									<MainHeaderChartTickerName sx={{ color: getColorForLightWeightHeader(simpleIncome, volatility, false)}} fontSize>{symbolName.symbolName}</MainHeaderChartTickerName>
									<MainHeaderChartTickerName>{symbolName.companyName}</MainHeaderChartTickerName>
									<Divider sx={{
										backgroundColor: `${getColorForLightWeightHeader(simpleIncome, volatility, false)}`,
										borderStyle: 'solid',
										borderWidth: '1.5px',
										height: '100%',
									}}></Divider>
								</Box>
							</Grid>

							<Grid
								desktopL={3.5} desktopLOffset={3}
							>
								{simpleIncome.simpleIncomeData.length > 0 &&
									<Box sx={{ width: '100%' }}>
										<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
											<MainHeaderChartTickerDescr>{simpleIncome.simpleIncomeData[simpleIncome.simpleIncomeData.length - 1].value}%</MainHeaderChartTickerDescr>
										</Box>

										<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<MainHeaderChartTickerDescr>Time range date from:</MainHeaderChartTickerDescr>
											<MainHeaderChartTickerDescr>{currentDateFrom.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
										</Box>

										<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<MainHeaderChartTickerDescr>Simple income period in years:</MainHeaderChartTickerDescr>
											<MainHeaderChartTickerDescr>{simpleIncome.period === 0 ? DefaultPeriods.SimpleIncomeDefaultPeriod : simpleIncome.period}</MainHeaderChartTickerDescr>
										</Box>
									</Box>
								}
							</Grid>
						</Grid>

					)}
				</React.Fragment>
			) : (
				<Box sx={{ width: '100%', display: 'flex' }}>
					<Box sx={{ width: '50%', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
						<Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
							<Grid
								desktopL={4}
							>
								<Box>
									<MainHeaderChartTickerName sx={{ color: getColorForLightWeightHeader(simpleIncome, volatility, false) }} fontSize>{symbolName.symbolName}</MainHeaderChartTickerName>
									<MainHeaderChartTickerName>{symbolName.companyName}</MainHeaderChartTickerName>
									<Divider sx={{
										backgroundColor: `${getColorForLightWeightHeader(simpleIncome, volatility, false)}`,
										borderStyle: 'solid',
										borderWidth: '1.5px',
										height: '100%',
									}}></Divider>
								</Box>
							</Grid>

							<Grid
								desktopL={6} desktopLOffset={1.5}
							>
								<Box sx={{ width: '100%' }}>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{simpleIncome.simpleIncomeData[simpleIncome.simpleIncomeData.length - 1].value}%</MainHeaderChartTickerDescr>
									</Box>

									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<MainHeaderChartTickerDescr>Time range date from:</MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{currentDateFrom.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
									</Box>

									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<MainHeaderChartTickerDescr>Simple income period in years:</MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{simpleIncome.period === 0 ? DefaultPeriods.SimpleIncomeDefaultPeriod : simpleIncome.period}</MainHeaderChartTickerDescr>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>

					<Box sx={{ minHeight: '95px' }}>
						<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '1px', height: '100%' }}></Divider>
					</Box>

					<Box sx={{ width: '50%', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
						<Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
							<Grid
								desktopL={4}
							>
								<Box>
									<MainHeaderChartTickerName sx={{color: getColorForLightWeightHeader(simpleIncome, volatility, true)}} fontSize>{symbolName.symbolNameToCompare}</MainHeaderChartTickerName>
									<MainHeaderChartTickerName>{symbolName.companyNameToCompare}</MainHeaderChartTickerName>
									<Divider sx={{ 
										backgroundColor: `${getColorForLightWeightHeader(simpleIncome, volatility, true)}`, 
										borderStyle: 'solid', 
										borderWidth: '1.5px', 
										height: '100%' 
									}}></Divider>
								</Box>
							</Grid>

							<Grid
								desktopL={6} desktopLOffset={1.5}
							>
								<Box sx={{ width: '100%' }}>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<MainHeaderChartTickerDescr>Profitability:</MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{simpleIncome.simpleIncomeDataToCompare[simpleIncome.simpleIncomeDataToCompare.length - 1].value}%</MainHeaderChartTickerDescr>
									</Box>

									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<MainHeaderChartTickerDescr>Time range date from:</MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{currentDateTo.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
									</Box>

									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<MainHeaderChartTickerDescr>Simple income period in years:</MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{simpleIncome.period === 0 ? DefaultPeriods.SimpleIncomeDefaultPeriod : simpleIncome.period}</MainHeaderChartTickerDescr>
									</Box>
								</Box>
							</Grid>
						</Grid>

					</Box>
				</Box>
			)}

		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader