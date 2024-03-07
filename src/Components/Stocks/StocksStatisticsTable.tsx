/* eslint-disable react-hooks/exhaustive-deps */
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Statistics, StatisticsColumnType, StatisticsRows } from '../../Types/StatisticsTypes'
import { transformDateForStatistics, transformTextForStatistics } from '../../Functions/utilsFunctions'
import { TableCellWithHighlights, TableCellWithoutHighlights } from '../../Styles/StocksStyles/SocksStatisticsStyle'
import { CreatingRowsForTables } from '../../Classes/CreatingRowsForTables'

interface Props {
	columnName: StatisticsColumnType,
	statistics: Statistics[] | undefined,
	columnsLength: number
}

const StocksStatisticsTable = ({ statistics, columnName, columnsLength }: Props) => {
	const [rows, setRows] = useState<Array<StatisticsRows> | undefined>([]);

	useEffect(() => {
		columnName && setRows(new CreatingRowsForTables().createRowsForStatistic(statistics![columnName.index!].statisticData));
	}, [statistics]);

	return (
		<Table stickyHeader aria-label="sticky table">
			<TableHead>
				<TableRow>
					<TableCell sx={{
						'&.MuiTableCell-root': {
							fontFamily: 'Inter, sans-serif',
							backgroundColor: '#190033',
							color: 'white',
							fontSize: '1.2rem',
							height: '100%'
						}
					}}> {columnsLength > 0 && transformTextForStatistics(columnName.id)} </TableCell>
					<TableCell sx={{
						'&.MuiTableCell-root': {
							fontFamily: 'Inter, sans-serif',
							backgroundColor: '#190033',
							height: '100%'
						}
					}}></TableCell>
				</TableRow>
			</TableHead>

			<TableBody sx={{ width: '100%' }}>
				{rows?.map((row, index) => {
					return (
						<TableRow key={row.title}>
							{index % 2 === 0 ? (
								<React.Fragment>
									<TableCellWithHighlights sx={{width: '65%'}}>{transformTextForStatistics(row.title)}</TableCellWithHighlights>
									<TableCellWithHighlights sx={{textAlign: 'center'}}>{transformDateForStatistics(row.value)}</TableCellWithHighlights>
								</React.Fragment>
							) : (
								<React.Fragment>
									<TableCellWithoutHighlights sx={{width: '65%'}}>{transformTextForStatistics(row.title)}</TableCellWithoutHighlights>
									<TableCellWithoutHighlights sx={{textAlign: 'center'}}>{transformDateForStatistics(row.value)}</TableCellWithoutHighlights>
								</React.Fragment>
							)}

						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	)
}

export default StocksStatisticsTable