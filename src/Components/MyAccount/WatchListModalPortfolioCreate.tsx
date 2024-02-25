import { Box, TextField } from '@mui/material'
import React from 'react'

const WatchListModalPortfolioCreate = () => {
	return (
		<Box sx={{
			position: 'absolute' as 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 800,
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
		}}>
			<TextField variant='outlined' label='Enter portfolio name'></TextField>
		</Box>
	)
}

export default WatchListModalPortfolioCreate