/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import { StatisticsTableContainer, StocksStatisticsContainer, StocksStatisticsTableContainer, StocksStatisticsTableWrapper, StocksStatisticsTitleContainer, StocksStatisticsTitleWrapper } from '../../Styles/StocksStyles/SocksStatisticsStyle'
import { Box, CircularProgress, Divider, ThemeProvider } from '@mui/material'
import { MainButton } from '../../Styles/MainStyles/MainContextStyle'
import { useAppSelector } from '../../app/hooks'
import { getStatisticsForSymbol } from '../../Actions/fetchActions'
import { Statistics, StatisticsColumnType } from '../../Types/StatisticsTypes'
import StocksStatisticsTable from './StocksStatisticsTable'
import { theme } from '../../Constants/MaterialConstants/theme'
import { GeneralStocksBlocksTitle } from '../../Styles/AreCommonStyles/AreCommonStyles'
import { CreatingColumnsForTables } from '../../Classes/CreatingColumnsForTables'

interface Props {
	handleClickStatistics: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StocksStatistics = ({ handleClickStatistics }: Props) => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const displaySize = useAppSelector(state => state.generalAppReducer.displaySize);
	const [columns, setColumns] = useState<Array<StatisticsColumnType>>([]);
	const [statistics, setStatistics] = useState<Statistics[]>([]);
	
	const getStats = async () => {
		const mapData: Statistics[] | undefined = await getStatisticsForSymbol(symbolName);
		mapData && setStatistics(mapData);
		return mapData;
	};

	const stats = useMemo(() => {
		return getStats();
	}, [symbolName]);

	useEffect(() => {
		setTimeout(async () => {
			setColumns(new CreatingColumnsForTables().createColumnsForStatistic(await stats));
		}, 0);
	}, [(columns[0] !== undefined)]);

	return (
		<ThemeProvider theme={theme}>
			<StocksStatisticsContainer>
				<StocksStatisticsTitleContainer>
					<StocksStatisticsTitleWrapper>
						<GeneralStocksBlocksTitle>Statistics</GeneralStocksBlocksTitle>
						<MainButton onClick={handleClickStatistics} marginTop width>Chart</MainButton>
					</StocksStatisticsTitleWrapper>
					<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />
				</StocksStatisticsTitleContainer>
				{columns.length === 0 ? (
					<Box sx={{ height: '500px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<CircularProgress sx={{ color: 'white' }} size={100} />
					</Box>
				) : (
					<StocksStatisticsTableContainer>
						<StocksStatisticsTableWrapper>
							<Box sx={{ backgroundColor: '#3e3e3e', [theme.breakpoints.down('laptopL')]: { marginTop: '30px' }}}>
								<StatisticsTableContainer marginTop>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[0]} statistics={statistics} />
								</StatisticsTableContainer>

								<StatisticsTableContainer>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[7]} statistics={statistics} />
								</StatisticsTableContainer>
							</Box>
						</StocksStatisticsTableWrapper>

						{displaySize > theme.breakpoints.values.laptopL - 1 && <Box sx={{ position: 'relative', padding: '0 40px' }}>
							<Divider orientation='vertical' sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99.6%' }} />
						</Box>}

						<StocksStatisticsTableWrapper>
							<Box sx={{ backgroundColor: '#3e3e3e' }}>
								<StatisticsTableContainer marginTop>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[3]} statistics={statistics} />
								</StatisticsTableContainer>

								<StatisticsTableContainer>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[5]} statistics={statistics} />
								</StatisticsTableContainer>

								<StatisticsTableContainer>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[6]} statistics={statistics} />
								</StatisticsTableContainer>
							</Box>
						</StocksStatisticsTableWrapper>

						{displaySize > theme.breakpoints.values.laptopL - 1 && <Box sx={{ position: 'relative', padding: '0 40px' }}>
							<Divider orientation='vertical' sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99.6%' }} />
						</Box>}

						<StocksStatisticsTableWrapper>
							<Box sx={{ height: '96.5%', backgroundColor: '#3e3e3e', borderBottom: '1px solid white', '&:hover': { borderBottom: '2px solid #190033', marginBottom: '5px' } }}>
								<StatisticsTableContainer marginTop>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[2]} statistics={statistics} />
								</StatisticsTableContainer>

								<StatisticsTableContainer>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[4]} statistics={statistics} />
								</StatisticsTableContainer>

								<StatisticsTableContainer>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[1]} statistics={statistics} />
								</StatisticsTableContainer>

								<StatisticsTableContainer>
									<StocksStatisticsTable columnsLength={columns.length} columnName={columns[8]} statistics={statistics} />
								</StatisticsTableContainer>
							</Box>
						</StocksStatisticsTableWrapper>
					</StocksStatisticsTableContainer>
				)}
			</StocksStatisticsContainer>
		</ThemeProvider>
	)
}

export default StocksStatistics