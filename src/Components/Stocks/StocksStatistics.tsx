import React, { useEffect, useMemo, useState } from 'react'
import { StocksStatisticsContainer, StocksStatisticsTableContainer } from '../../Styles/StocksStyles/SocksStatisticsStyle'
import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { MainButton } from '../../Styles/MainStyles/MainContextStyle'
import { useAppSelector } from '../../app/hooks'
import { getStatisticsForSymbol } from '../../Actions/fetchActions'
import { Statistics, StatisticsColumn, StatisticsRows } from '../../Types/StatisticsTypes'
import { createColumnsForStatistic, createRowsForStatistic } from '../../Functions/dataProcessingFunctions'
import StocksStatisticsTable from './StocksStatisticsTable'
import { transformTextForStatistics } from '../../Functions/utilsFunctions'

interface Props {
	handleClickStatistics: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StocksStatistics = ({ handleClickStatistics }: Props) => {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const [columns, setColumns] = useState<Array<StatisticsColumn>>([]);
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
			setColumns(createColumnsForStatistic(await stats)!);
			
		}, 0);
		columns[0] && transformTextForStatistics(columns[0].id);
	}, [(columns[0] !== undefined)]);
	
	return (
		<StocksStatisticsContainer>
			<Box sx={{ width: '98.5%', }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0 10px 0' }}>
					<Typography variant='h4' sx={{ color: 'yellow', textAlign: 'start' }}>Statistics</Typography>
					<MainButton onClick={handleClickStatistics} marginTop>Chart</MainButton>
				</Box>
				<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />
			</Box>

			<Box sx={{ width: '98.5%', display: 'flex' }}>
				<StocksStatisticsTableContainer>
					<Box sx={{ backgroundColor: '#3e3e3e' }}>
						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', marginTop: '50px' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[0]} statistics={statistics} />
						</TableContainer>

						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[7]} statistics={statistics} />
						</TableContainer>
					</Box>
				</StocksStatisticsTableContainer>

				<Box sx={{ position: 'relative', padding: '0 40px' }}>
					<Divider orientation='vertical' sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99.6%' }} />
				</Box>

				<StocksStatisticsTableContainer>
					<Box sx={{ backgroundColor: '#3e3e3e' }}>
						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', marginTop: '50px' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[3]} statistics={statistics} />
						</TableContainer>

						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[5]} statistics={statistics} />
						</TableContainer>

						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[6]} statistics={statistics} />
						</TableContainer>
					</Box>
				</StocksStatisticsTableContainer>

				<Box sx={{ position: 'relative', padding: '0 40px' }}>
					<Divider orientation='vertical' sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99.6%' }} />
				</Box>

				<StocksStatisticsTableContainer>
					<Box sx={{ height: '97%', backgroundColor: '#3e3e3e' }}>
						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', marginTop: '50px' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[2]} statistics={statistics} />
						</TableContainer>

						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[4]} statistics={statistics} />
						</TableContainer>

						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[1]} statistics={statistics} />
						</TableContainer>

						<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951' }}>
							<StocksStatisticsTable columnsLength={columns.length} columnName={columns[8]} statistics={statistics} />
						</TableContainer>
					</Box>
				</StocksStatisticsTableContainer>
			</Box>
		</StocksStatisticsContainer>
	)
}

export default StocksStatistics