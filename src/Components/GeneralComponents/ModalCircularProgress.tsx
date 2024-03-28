import { Backdrop, Box, CircularProgress, Fade, Modal } from '@mui/material'
import React from 'react'

interface Props {
    openCloseModal: boolean
}

const ModalCircularProgress = ({ openCloseModal }: Props) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openCloseModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500
                }
            }}
        >
            <Fade in={openCloseModal}>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <CircularProgress sx={{ color: 'white' }} size={100} />
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalCircularProgress