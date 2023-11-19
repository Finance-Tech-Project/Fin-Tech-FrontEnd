import React, { useEffect, useRef, useState } from 'react';
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
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { LWCHeaderInitValueHeight } from '../../Constants/ProjectConstants/headerConstants';

interface Props {
	data: TickerDataType[],
	isClickedToCompare?: boolean
}

const LightWeightChartHeader = ({ data, isClickedToCompare }: Props) => {
	const interfaceHeight = useAppSelector(state => state.analyticInterfaceReducer.interfaceHeight);
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility);
	const sharpRatio: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.sharpRatio);
	const checkSymbolName = true;
	const headerContainerRef = useRef<HTMLDivElement>(null);
	const [displaySizeHeight, setDisplaySizeHeight] = useState(0);
	const [displaySize, setDisplaySize] = useState(window.screen.width);
	const dispatch = useAppDispatch();

	useEffect(() => {
		window.addEventListener('resize', () => {
			setDisplaySizeHeight(window.screen.height);
			setDisplaySize(window.screen.width);
			dispatch(calcInterfaceHeight(headerContainerRef.current?.clientHeight!));
			displaySize >= theme.breakpoints.values.desktopL
				&& dispatch(calcInterfaceHeight(LWCHeaderInitValueHeight + ((headerContainerRef.current?.clientHeight! - LWCHeaderInitValueHeight) / 2 - 1.5)));
		});
		dispatch(calcInterfaceHeight(headerContainerRef.current?.clientHeight!));
	}, [isClickedToCompare, displaySizeHeight, dispatch, headerContainerRef.current?.clientHeight!, displaySize]);

	return (
		<MainHeaderChartContainer ref={headerContainerRef} borderTopRightRadius>
			{simpleIncome.dataToCompare!.length === 0 &&
				volatility.dataToCompare!.length === 0 &&
				sharpRatio.dataToCompare!.length === 0 ? (
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
								tablet={6}
								laptop={6}
								laptopL={6}
								desktop={4}
								desktopL={3.5}
							>
								<HeaderItemCompanyName />
							</Grid>

							<Grid
								mobileS={11} mobileSOffset={0.5}
								tablet={5.5} tabletOffset={0}
								laptop={4} laptopOffset={1}
								laptopL={4} laptopLOffset={1}
								desktop={3} desktopOffset={3}
								desktopL={2.5} desktopLOffset={3.5}
							>
								{(simpleIncome.data.length > 0 || volatility.data.length > 0 || sharpRatio.data.length > 0) &&
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
								mobileS={12}
								tablet={6}
								laptop={6}
								laptopL={6}
								desktop={6}
								desktopL={5}
							>
								<HeaderItemCompanyName />
							</Grid>

							<Grid
								mobileS={12}
								mobileL={11} mobileLOffset={0.5}
								tablet={5.5} tabletOffset={0}
								laptop={3.5} laptopOffset={2}
								laptopL={3.5} laptopLOffset={2}
								desktop={5.5} desktopOffset={0}
								desktopL={5} desktopLOffset={1.5}
							>
								<HeaderItemDataDescription />
							</Grid>
						</Grid>
					</TwoStocksHeaderItem>

					<Box sx={{
						[theme.breakpoints.up('desktop')]: {
							minHeight: '95px'
						}
					}}>
						<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '1px', height: '100%' }}></Divider>
					</Box>

					<TwoStocksHeaderItem>
						<Grid container sx={() => TwoStocksHeaderItemGridContainerStyle(theme)}>
							<Grid
								mobileS={12}
								tablet={6}
								laptop={6}
								laptopL={6}
								desktop={6}
								desktopL={5}
							>
								<HeaderItemCompanyName checkSymbolName={checkSymbolName} />
							</Grid>

							<Grid
								mobileS={12}
								mobileL={11} mobileLOffset={0.5}
								tablet={5.5} tabletOffset={0}
								laptop={3.5} laptopOffset={2}
								laptopL={3.5} laptopLOffset={2}
								desktop={5.5} desktopOffset={0}
								desktopL={5} desktopLOffset={1.5}
							>
								<HeaderItemDataDescription isClickedToCompare={isClickedToCompare} />
							</Grid>
						</Grid>
					</TwoStocksHeaderItem>
				</TwoStocksHeaderContainer>
			)}
		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader