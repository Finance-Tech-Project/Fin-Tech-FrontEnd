import { Backdrop, Fade, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import { GeneralModalFetchResponseContainer } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { GeneralStatusMessageResponse } from '../../Types/GeneralAppTypes';

interface Props {
    response: GeneralStatusMessageResponse,
    message: string,
    setOpenCloseModal: (value: React.SetStateAction<boolean>) => void,

}
const ModalFetchResponses = ({ response, message, setOpenCloseModal }: Props) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setOpenCloseModal(false);
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
                    {response.responseStatus === 200 && <Typography variant='h5' sx={{ color: 'white' }}>{message}</Typography>}
                    {response.responseStatus === 201 && <Typography variant='h5' sx={{ color: 'white' }}>{message}</Typography>}
                </GeneralModalFetchResponseContainer>
            </Fade>
        </Modal>
    )
}

export default ModalFetchResponses