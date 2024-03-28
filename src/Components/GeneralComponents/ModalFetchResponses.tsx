import { Backdrop, Fade, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import { GeneralModalFetchResponseContainer } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearExceptions } from '../../Reducers/userExeptionsReducer';

interface Props {
    setOpenCloseModal: (value: React.SetStateAction<boolean>) => void,
   

}
const ModalFetchResponses = ({ setOpenCloseModal}: Props) => {
    const exception = useAppSelector(state => state.userExceptionsReducer);
    const [open, setOpen] = useState(true);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        setOpen(false);
        setOpenCloseModal(false);
        dispatch(clearExceptions());
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
                   {exception?.exceptionMessage && <Typography variant='h5' sx={{ color: 'white' }}>{exception?.exceptionMessage}</Typography>} 
                </GeneralModalFetchResponseContainer>
            </Fade>
        </Modal>
    )
}

export default ModalFetchResponses