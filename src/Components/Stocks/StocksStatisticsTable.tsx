import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { Statistics, StatisticsColumn, StatisticsRows } from '../../Types/StatisticsTypes'
import { createRowsForStatistic } from '../../Functions/dataProcessingFunctions'
import { transformTextForStatistics } from '../../Functions/utilsFunctions'

interface Props {
	columnName: StatisticsColumn,
	statistics: Statistics[] | undefined,
	columnsLength: number
}

const StocksStatisticsTable = ({ statistics, columnName, columnsLength }: Props) => {
	const [rows, setRows] = useState<Array<StatisticsRows> | undefined>([]);

	useEffect(() => {
		columnName && setRows(createRowsForStatistic(statistics![columnName.index!].statisticData));
		
	}, [statistics]); 
	
	return (
		<Table stickyHeader aria-label="sticky table">
			<TableHead >
				<TableRow>

					<TabelCellTicker sx={{
						'&.MuiTableCell-root': {
							fontFamily: 'Inter, sans-serif',
							backgroundColor: '#190033',
							color: 'white',
							fontSize: '1.2rem'
						}
					}}> {columnsLength > 0 && transformTextForStatistics(columnName.id)} </TabelCellTicker>
					<TableCell sx={{
						'&.MuiTableCell-root': {
							fontFamily: 'Inter, sans-serif',
							backgroundColor: '#190033',
							color: 'white',
							fontSize: '1rem'
						}
					}}></TableCell>
				</TableRow>
			</TableHead>

			<TableBody sx={{ width: '100%' }}>
				{rows?.map((row) => {
					return (
						<TableRow key={row.title}>
							<TabelCellTicker>{transformTextForStatistics(row.title)}</TabelCellTicker>
							<TabelCellTicker>{row.value}</TabelCellTicker>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	)
}

export default StocksStatisticsTable