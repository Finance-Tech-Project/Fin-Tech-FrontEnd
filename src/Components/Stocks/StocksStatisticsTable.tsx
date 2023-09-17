import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'
import { Statistics, StatisticsColumn, StatisticsRows } from '../../Types/StatisticsTypes'
import { createColumnsForStatistic, createRowsForStatistic } from '../../Functions/dataProcessingFunctions'

interface Props {
	columnName: StatisticsColumn,
	statistics: Statistics[] | undefined,
}

const StocksStatisticsTable = ({ statistics, columnName }: Props) => {
	const [rows, setRows] = useState<Array<StatisticsRows> | undefined>([]);

	useEffect(() => {
		setRows(createRowsForStatistic(statistics![columnName.index!].statisticData));
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
							fontSize: '1rem'
						}
					}}> {columnName.id} </TabelCellTicker>
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
							<TabelCellTicker>{row.title}</TabelCellTicker>
							<TabelCellTicker>{row.value}</TabelCellTicker>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	)
}

export default StocksStatisticsTable