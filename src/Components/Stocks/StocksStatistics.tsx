/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import { StatisticsTableContainer, StocksStatisticsContainer, StocksStatisticsTableContainer, StocksStatisticsTableWrapper, StocksStatisticsTitleContainer, StocksStatisticsTitleWrapper } from '../../Styles/StocksStyles/SocksStatisticsStyle'
import { Box, CircularProgress, Divider, ThemeProvider, Typography } from '@mui/material'
import { MainButton } from '../../Styles/MainStyles/MainContextStyle'
import { useAppSelector } from '../../app/hooks'
import { getStatisticsForSymbol } from '../../Actions/fetchActions'
import { Statistics, StatisticsColumn } from '../../Types/StatisticsTypes'
import { createColumnsForStatistic } from '../../Functions/dataProcessingFunctions'
import StocksStatisticsTable from './StocksStatisticsTable'
import { theme } from '../../Constants/MaterialConstants/theme'

interface Props {
	handleClickStatistics: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StocksStatistics = ({ handleClickStatistics }: Props) => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const [columns, setColumns] = useState<Array<StatisticsColumn>>([]);
	const [statistics, setStatistics] = useState<Statistics[]>([]);
	const [displaySize, setDisplaySize] = useState(window.screen.width);

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
			setColumns(createColumnsForStatistic(await stats)!);
		}, 0);
	}, [(columns[0] !== undefined)]);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setDisplaySize(window.screen.width);
		});
	}, [displaySize]);

	return (
		<ThemeProvider theme={theme}>
			<StocksStatisticsContainer>
				<StocksStatisticsTitleContainer>
					<StocksStatisticsTitleWrapper>
						<Typography variant='h4' sx={{ color: 'yellow', textAlign: 'start' }}>Statistics</Typography>
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