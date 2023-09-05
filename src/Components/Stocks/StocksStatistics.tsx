import React from 'react'
import { StocksStatisticsContainer, StocksStatisticsLeftTableContainer } from '../../Styles/StocksStyles/SocksStatisticsStyle'
import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles'





const StocksStatistics = () => {
	return (
		<StocksStatisticsContainer>
			<Typography variant='h4' sx={{ color: 'yellow', textAlign: 'start', padding: '10px 0 10px 0' }}>Statistics</Typography>
			<Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />
			<Box sx={{ width: '100%', display: 'flex' }}>

				<StocksStatisticsLeftTableContainer>
					<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', marginTop: '20px' }}>
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
									}}> Stock Price History </TabelCellTicker>
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
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>

					<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', marginTop: '50px' }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead >
								<TableRow>
									<TableCell sx={{
										'&.MuiTableCell-root': {
											fontFamily: 'Inter, sans-serif',
											backgroundColor: '#190033',
											color: 'white',
											fontSize: '1rem'
										}
									}}> Stock Price History </TableCell>
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
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</StocksStatisticsLeftTableContainer>

				<Box sx={{ position: 'relative', padding: '0 40px' }}>
					<Divider orientation='vertical' sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />
				</Box>

				<StocksStatisticsLeftTableContainer>
					<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', marginTop: '20px' }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell sx={{
										'&.MuiTableCell-root': {
											fontFamily: 'Inter, sans-serif',
											backgroundColor: '#190033',
											color: 'white',
											fontSize: '1rem'
										}
									}}> Stock Price History </TableCell>
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
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>

					<TableContainer component={Paper} sx={{ width: '100%', backgroundColor: '#2c0951', marginTop: '50px' }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead >
								<TableRow>
									<TableCell sx={{
										'&.MuiTableCell-root': {
											fontFamily: 'Inter, sans-serif',
											backgroundColor: '#190033',
											color: 'white',
											fontSize: '1rem'
										}
									}}> Stock Price History </TableCell>
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
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>Beta (5Y Monthly)</TabelCellTicker>
									<TabelCellTicker>0.45</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>-44.52%</TabelCellTicker>
								</TableRow>
								<TableRow>
									<TabelCellTicker>S&P500 52-Week Change 3</TabelCellTicker>
									<TabelCellTicker>15.55%</TabelCellTicker>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</StocksStatisticsLeftTableContainer>
			</Box>
		</StocksStatisticsContainer>
	)
}

export default StocksStatistics