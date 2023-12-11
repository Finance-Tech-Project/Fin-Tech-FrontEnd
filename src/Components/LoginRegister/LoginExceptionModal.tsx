import { Backdrop, Box, Fade, Modal } from '@mui/material';
import React, { useState } from 'react'
import { LoginExceptionModalContainer, LoginExceptionModalTypography } from '../../Styles/LoginRegisterStyles/LoginStyle';
import { UserExceptions } from '../../Types/LoginRegisterTypes';
import { useAppSelector } from '../../app/hooks';

interface Props {
	modalOpen: boolean
}

const LoginExceptionModal = ({ modalOpen }: Props) => {
	const userException: UserExceptions | null = useAppSelector(state => state.userExceptionsReducer);
	const [open, setOpen] = useState(modalOpen);
	// const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box>
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
					<LoginExceptionModalContainer>
						<LoginExceptionModalTypography>
							{(userException && userException.exceptions.length > 0) && userException.exceptions[0].exceptionMessage}
						</LoginExceptionModalTypography>
					</LoginExceptionModalContainer>
				</Fade>
			</Modal>
		</Box>
	)
}

export default LoginExceptionModal