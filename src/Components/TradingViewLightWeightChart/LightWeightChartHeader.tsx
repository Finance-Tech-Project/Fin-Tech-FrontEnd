import React, { useEffect, useRef } from 'react';
import { findMaxMinPrice } from '../../Functions/utilsFunctions';
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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Box, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import HeaderItemCompanyName from './HeaderItemCompanyName';
import HeaderItemDataDescription from './HeaderItemDataDescription';
import { calcInterfaceHeight } from '../../Reducers/analyticIterfaceReducer';

interface Props {
	data: TickerDataType[],
	isClickedToCompare?: boolean
}

const LightWeightChartHeader = ({ data, isClickedToCompare }: Props) => {
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const { currentDateFrom, currentDateTo } = useAppSelector(state => state.dateDataReducer);
	const simpleIncome = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const interfaceHeight = useAppSelector(state => state.analyticInterfaceReducer.interfaceHeight);
	const checkSymbolName = true;
	const checkDate = true;
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
						<Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
							<Grid
								desktop={6}
								desktopL={2}
							>
								<HeaderItemCompanyName />
							</Grid>

							<Grid
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
				<Box sx={{ width: '100%', display: 'flex' }}>
					<Box sx={{ width: '50%', display: 'flex', alignItems: 'center' }}>
						<Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center', '&:first-of-type': { alignItems: 'flex-end' } }}>
							<Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
								desktop={5.5}
								desktopL={4}
							>
								<HeaderItemCompanyName />
							</Grid>

							<Grid
								desktop={6}
								desktopL={6} desktopLOffset={1.5}
							>
								<HeaderItemDataDescription />
							</Grid>
						</Grid>
					</Box>

					<Box sx={{ minHeight: '95px' }}>
						<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '1px', height: '100%' }}></Divider>
					</Box>

					<Box sx={{ width: '50%', display: 'flex', alignItems: 'center' }}>
						<Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center', '&:first-of-type': { alignItems: 'flex-end' } }}>
							<Grid
								desktop={5.5}
								desktopL={4}
							>
								<HeaderItemCompanyName checkSymbolName={checkSymbolName} />
							</Grid>

							<Grid
								desktop={6}
								desktopL={6} desktopLOffset={1.5}
							>
								<HeaderItemDataDescription checkDate={checkDate} />
							</Grid>
						</Grid>
					</Box>
				</Box>
			)}

		</MainHeaderChartContainer>
	)
}

export default LightWeightChartHeader