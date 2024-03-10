import { Backdrop, Box, Button, Fade, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoginRegisterTextField } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle';
import { WatchListCreatePortfolioColumnsType, WatchListCreatePortfolioType } from '../../Types/WatchListModalCreatePortfolioType';
import { transformTextForWatchListTable } from '../../Functions/utilsFunctions';
import { CreatingColumnsForTables } from '../../Classes/CreatingColumnsForTables';
import { CreatingRowsForTables } from '../../Classes/CreatingRowsForTables';

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
				<Box sx={{
					position: 'absolute' as 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 800,
					backgroundColor: '#2c0951',
					border: '2px solid rgba(37, 59, 227, 0.8)',
					boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
					padding: '20px'
				}}>
					<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
						<LoginRegisterTextField label='Enter portfolio name' 
							sx={{
								'& .MuiInputBase-input': {
									width: '250px'
								}
							}}
						></LoginRegisterTextField>
						<Button sx={{
							width: '250px',
							height: '56px',
							border: '1.5px solid rgba(37, 59, 227, 0.8)',
							backgroundColor: 'rgba(1, 17, 36, 0.8)',
							color: 'white',
							boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
						}}>Create portfolio</Button>
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
													// textAlign: 'center',
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
													<TableCell key={column.id}
														sx={{
															'&.MuiTableCell-root': {
																color: 'white',
																backgroundColor: '#3e3e3e',
																fontFamily: 'Inter, sans-serif',
																'&:nth-of-type(1)': {
																	position: 'relative',
																	zIndex: 1,
																	borderRight: '1px solid #190033',
																	boxShadow: '5px 0px 20px 0px rgba(0,20,135,1)',
																	'&:hover': {
																		cursor: 'pointer',
																		borderBottom: '2px solid #190033',
																		marginBottom: '5px'
																	}
																}
															},
														}}>

														{value}
													</TableCell>
												);
											})}
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Fade>
		</Modal>
	)
}

export default WatchListModalPortfolioCreate