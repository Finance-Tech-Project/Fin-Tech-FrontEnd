import { Backdrop, Box, Fade, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { LoginExceptionModalContainer, LoginExceptionModalTypography } from '../../Styles/LoginRegisterStyles/LoginStyle';
import { UserExceptions } from '../../Types/LoginRegisterTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearExceptions } from '../../Reducers/userExeptionsReducer';

const LoginExceptionModal = () => {
	const userException: UserExceptions | null = useAppSelector(state => state.userExceptionsReducer);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const dispatch = useAppDispatch();

	const handleClose = () => {
		setOpen(false);
		dispatch(clearExceptions());
	};

	useEffect(() => {
		if (userException) {
            handleOpen();
        }
	}, [userException]);

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
							{userException && userException.exceptionMessage}
						</LoginExceptionModalTypography>
					</LoginExceptionModalContainer>
				</Fade>
			</Modal>
		</Box>
	)
}

export default LoginExceptionModal