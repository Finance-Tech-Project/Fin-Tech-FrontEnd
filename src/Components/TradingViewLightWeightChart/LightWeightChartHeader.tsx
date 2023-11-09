import React, { useEffect, useRef } from 'react';
import { findMaxMinPrice } from '../../Functions/utilsFunctions';
import {
	MainHeaderChartContainer,
	MainHeaderChartTickerDescr,
	MainHeaderChartTickerDescrContainer,
	MainHeaderChartTickerDescrWrapper,
	MainHeaderChartTickerName,
	MainHeaderChartTickerNameContainer,
	MainHeaderChartTickerPriceContainer,
	
} from '../../Styles/LightWeightChartStyles/LightWeightChartHeaderStyle'
import { TickerDataType } from '../../Types/TickersTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Box, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import HeaderItemCompanyName from './HeaderItemCompanyName';
import HeaderItemDataDescription from './HeaderItemDataDescription';
import { calcInterfaceHeight } from '../../Reducers/analyticIterfaceReducer';
import { TwoStocksHeaderContainer, TwoStocksHeaderItem, TwoStocksHeaderItemGridContainerStyle } from '../../Styles/LightWeightChartStyles/LightWeightTwoStocksHeaderStyle';
import { theme } from '../../Constants/MaterialConstants/theme';

interface Props {
	data: TickerDataType[],
	isClickedToCompare?: boolean
}

const LightWeightChartHeader = ({ data, isClickedToCompare }: Props) => {
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const checkSymbolName = true;
	const headerContainerRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch(calcInterfaceHeight(headerContainerRef.current?.clientHeight!));
	}, [headerContainerRef.current?.clientHeight!]);

	return (
		<MainHeaderChartContainer ref={headerContainerRef} borderTopRightRadius>
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
									<MainHeaderChartTickerPriceContainer>
										<MainHeaderChartTickerDescr>Date from: </MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{currentDateFrom.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
									</MainHeaderChartTickerPriceContainer>
								</MainHeaderChartTickerDescrWrapper>

								<MainHeaderChartTickerDescrWrapper>
									<MainHeaderChartTickerPriceContainer>
										<MainHeaderChartTickerDescr>Min Price: </MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{findMaxMinPrice(data, "min")}</MainHeaderChartTickerDescr>
									</MainHeaderChartTickerPriceContainer>
									<MainHeaderChartTickerPriceContainer>
										<MainHeaderChartTickerDescr>Date to: </MainHeaderChartTickerDescr>
										<MainHeaderChartTickerDescr>{currentDateTo.split("-").reverse().join("-")}</MainHeaderChartTickerDescr>
									</MainHeaderChartTickerPriceContainer>
								</MainHeaderChartTickerDescrWrapper>
							</MainHeaderChartTickerDescrContainer>
						</React.Fragment>
					) : (
						<Grid container sx={() => TwoStocksHeaderItemGridContainerStyle(theme)}>
							<Grid
								mobileS={12}
								tablet={4}
								laptop={5}
								laptopL={5}
								desktop={6}
								desktopL={2}
							>
								<HeaderItemCompanyName />
							</Grid>

							<Grid 
								mobileS={11} mobileSOffset={0.5}
								tablet={6} tabletOffset={0.5}
								laptop={4} laptopOffset={0.5}
								laptopL={4.5} laptopLOffset={1}
								desktop={3}
								desktopL={3.5} desktopLOffset={3}
							>
								{simpleIncome.simpleIncomeData.length > 0 &&
									<HeaderItemDataDescription />
								}
							</Grid>
						</Grid>
					)}
				</React.Fragment>
			) : (
				<TwoStocksHeaderContainer>
					<TwoStocksHeaderItem>
						<Grid container sx={() => TwoStocksHeaderItemGridContainerStyle(theme)}>
							<Grid 
								desktop={6}
								desktopL={4}
							>
								<HeaderItemCompanyName />
							</Grid>

							<Grid
								desktop={5.5}
								desktopL={6} desktopLOffset={1.5}
							>
								<HeaderItemDataDescription />
							</Grid>
						</Grid>
					</TwoStocksHeaderItem>

					<Box sx={{ minHeight: '95px' }}>
						<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '1px', height: '100%' }}></Divider>
					</Box>

					<TwoStocksHeaderItem>
						<Grid container sx={() => TwoStocksHeaderItemGridContainerStyle(theme)}>
							<Grid 
								desktop={6}
								desktopL={4}
							>
								<HeaderItemCompanyName checkSymbolName={checkSymbolName} />
							</Grid>

							<Grid
								desktop={5.5}
								desktopL={6} desktopLOffset={1.5}
							>
								<HeaderItemDataDescription isClickedToCompare={isClickedToCompare}/>
							</Grid>
						</Grid>
					</TwoStocksHeaderItem>
				</TwoStocksHeaderContainer>
			)}

		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader