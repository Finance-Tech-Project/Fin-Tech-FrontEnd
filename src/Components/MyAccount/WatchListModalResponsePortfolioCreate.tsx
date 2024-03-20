import { Backdrop, Fade, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { GeneralModalFetchResponseContainer } from '../../Styles/AreCommonStyles/AreCommonStyles';


interface Props {
    setOpenModalResponsePortfolioCreate: (value: React.SetStateAction<boolean>) => void
}

const WatchListModalResponsePortfolioCreate = ({ setOpenModalResponsePortfolioCreate }: Props) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setOpenModalResponsePortfolioCreate(false);
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
                    <Typography variant='h5' sx={{ color: 'white' }}>* Your portfolio successfully created.</Typography>
                </GeneralModalFetchResponseContainer>
            </Fade>
        </Modal>
    )
}

export default WatchListModalResponsePortfolioCreate