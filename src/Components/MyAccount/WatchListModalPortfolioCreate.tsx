import { Backdrop, Box, Fade, Modal, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { LoginRegisterTextField } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle';
import { WatchListCreatePortfolioColumnsType, WatchListCreatePortfolioType, WatchListCreatePortfolioTypeReadonly } from '../../Types/WatchListModalCreatePortfolioType';
import { WatchListType } from '../../Types/WatchListTypes';
import { CreatingColumnsForTables } from '../../Classes/CreatingColumnsForTables';
import { transformFirstLetterToUpperCase } from '../../Functions/utilsFunctions';
import { SelectedSymbols } from './Watchlist';

interface Props {
	selected: readonly WatchListCreatePortfolioTypeReadonly[],
	setOpenModalForCreatePortfolio: (value: React.SetStateAction<boolean>) => void,
	selectedRows: Array<WatchListType>
}
const WatchListModalPortfolioCreate = ({ setOpenModalForCreatePortfolio, selected, selectedRows }: Props) => {
	const [open, setOpen] = useState(true);
	const [columns, setColumns] = useState<Array<WatchListCreatePortfolioColumnsType>>(new CreatingColumnsForTables().createColumnsForWatchListPortfolioCreate(selectedRows));
	// const [rows, setRows] = useState<Array<WatchListType>>([]);

	const handleClose = () => {
		setOpen(false)
		setOpenModalForCreatePortfolio(false)
	};
	
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
					<LoginRegisterTextField label='Enter portfolio name'></LoginRegisterTextField>
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
													textAlign: 'center',
													backgroundColor: '#190033',
													color: 'white'
												}
											}} key={column.id}>{transformFirstLetterToUpperCase(column.label)}</TableCell>
										);
									})}
								</TableRow>
							</TableHead>
						</Table>
					</TableContainer>
					<LoginRegisterTextField type="number" ></LoginRegisterTextField>
				</Box>
			</Fade>
		</Modal>
	)
}

export default WatchListModalPortfolioCreate