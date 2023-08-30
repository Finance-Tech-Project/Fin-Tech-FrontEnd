import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { theme } from '../../../Constants/MaterialConstants/theme';

const HeaderAvatar = () => {
    const [openCloseAvatarMenu, setOpenCloseAvatarMenu] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleOpenAvatarMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setOpenCloseAvatarMenu(Boolean(event.currentTarget));
    };

    const handleCloseAvatarMenu = () => {
        setAnchorEl(null);
        setOpenCloseAvatarMenu(false);
    };

    return (
        <Grid>
            <Avatar sx={{
                backgroundColor: 'rgba(195, 0, 93, 0.8)', [theme.breakpoints.down('tablet')]: {
                    width: '30px',
                    height: '30px'
                }   
            }}
                onClick={handleOpenAvatarMenu}
                src="/broken-image.jpg"
            />
            <Menu
                sx={{ '& .MuiPaper-root': { backgroundColor: 'rgba(4, 3, 28, 0.8)', color: 'white' } }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={openCloseAvatarMenu}
                onClose={handleCloseAvatarMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleCloseAvatarMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseAvatarMenu}>My account</MenuItem>
                <MenuItem onClick={handleCloseAvatarMenu}>Logout</MenuItem>
            </Menu>
        </Grid>
    )
}

export default HeaderAvatar