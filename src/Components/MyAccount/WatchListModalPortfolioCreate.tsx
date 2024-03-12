import { Backdrop, Box, Button, Fade, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoginRegisterTextField } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle';
import { WatchListCreatePortfolioColumnsType, WatchListCreatePortfolioIdType, WatchListCreatePortfolioType } from '../../Types/WatchListModalCreatePortfolioType';
import { transformTextForWatchListTable } from '../../Functions/utilsFunctions';
import { CreatingColumnsForTables } from '../../Classes/CreatingColumnsForTables';
import { CreatingRowsForTables } from '../../Classes/CreatingRowsForTables';
import { WatchListModalPortfolioCreateButtons, WatchListModalPortfolioCreateContainer } from '../../Styles/MyAccountStyles/WatchListModalPortfolioCreateStyle';
import { TabelCellTicker } from '../../Styles/TickersStyles/TickersStyles';

interface Props {
	selected: WatchListCreatePortfolioType[],
	setOpenModalForCreatePortfolio: (value: React.SetStateAction<boolean>) => void,
}
const WatchListModalPortfolioCreate = ({ setOpenModalForCreatePortfolio, selected }: Props) => {
	const [open, setOpen] = useState(true);
	const [columns, setColumns] = useState<Array<WatchListCreatePortfolioColumnsType>>([]);
	const [rows, setRows] = useState<Array<WatchListCreatePortfolioType>>([]);

	const handleClose = () => {
		setOpen(false)
		setOpenModalForCreatePortfolio(false)
	};

	const removeFromModalTablePortfolioCreate = (symbolName: string) => {
		const index = selected.findIndex(item => item.symbolName === symbolName);
		selected.splice(index, 1);
		setRows(new CreatingRowsForTables().createRowsForWatchListPortfolioCreate(selected.length === 0 || !selected ? new Array<WatchListCreatePortfolioType>() : selected));
	};

	useEffect(() => {
		setColumns(new CreatingColumnsForTables().createColumnsForWatchListPortfolioCreate(selected));
		setRows(new CreatingRowsForTables().createRowsForWatchListPortfolioCreate(selected));
	}, []);

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500
				}
			}}
		>
			<Fade in={open}>
				<WatchListModalPortfolioCreateContainer>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<LoginRegisterTextField
							label='Enter portfolio name'
							widthForModalPortfolioCreate
						></LoginRegisterTextField>

						<WatchListModalPortfolioCreateButtons>Create portfolio</WatchListModalPortfolioCreateButtons>
					</Box>


					<TableContainer component={Paper}
						sx={{
							width: '99.75%',
							marginTop: '30px',
							border: '2px solid rgba(70, 75, 114, 0.8)',
							borderBottom: 'none'
						}}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow sx={{ backgroundColor: '#190033' }}>
									{columns?.map((column) => {
										return (
											<TableCell component="th" sx={{
												'&.MuiTableCell-root': {
													backgroundColor: '#190033',
													color: 'white'
												}
											}} key={column.id}>{transformTextForWatchListTable(column.label)}</TableCell>
										);
									})}
								</TableRow>
							</TableHead>

							<TableBody>
								{rows.map((row) => {
									return (
										<TableRow key={row.symbolName}>
											{columns.map((column) => {
												const value = row[column.id];
												return (
													<TabelCellTicker key={column.id}>
														{value}
														{column.id === 'amountOfStocks' &&
															<LoginRegisterTextField
																type="number"
																defaultValue='1'
																widthForTableModalPortfolioCreate
															></LoginRegisterTextField>
														}
														{column.id === 'removeSymbol' &&
															<Button sx={{
																width: '100%',
																height: '56px',
																border: '1.5px solid rgba(37, 59, 227, 0.8)',
																backgroundColor: 'rgba(1, 17, 36, 0.8)',
																color: 'white',
																boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
															}} onClick={() => removeFromModalTablePortfolioCreate(row.symbolName)}>Remove</Button>
														}
													</TabelCellTicker>
												);
											})}
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</WatchListModalPortfolioCreateContainer>
			</Fade>
		</Modal>
	)
}

export default WatchListModalPortfolioCreate