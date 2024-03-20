import { Backdrop, Fade, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { GeneralModalFetchResponseContainer } from '../../Styles/AreCommonStyles/AreCommonStyles';

interface Props {
	responseStatus: number,
	setOpenModalAddToWatchList: (value: React.SetStateAction<boolean>) => void
}

const StockModalAddToWatchList = ({responseStatus, setOpenModalAddToWatchList }: Props) => {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		setOpenModalAddToWatchList(false);
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
				<GeneralModalFetchResponseContainer>
					{responseStatus === 200 && <Typography variant='h5' sx={{ color: 'white' }}>* Your symbol successfully added to watchlist.</Typography>}
					{responseStatus === 201 && <Typography variant='h5' sx={{ color: 'white' }}>* Symbol already exists in watchlist.</Typography>}
				</GeneralModalFetchResponseContainer>
			</Fade>
		</Modal>
	)
}

export default StockModalAddToWatchList