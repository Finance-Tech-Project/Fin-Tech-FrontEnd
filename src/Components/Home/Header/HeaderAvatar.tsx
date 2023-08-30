import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Avatar, Box, Link, Menu, MenuItem } from '@mui/material';
import { theme } from '../../../Constants/MaterialConstants/theme';
import { avatarMenuButtons } from '../../../Constants/ProjectConstants/headerConstants';


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
                backgroundColor: 'rgba(195, 0, 93, 0.8)',
                [theme.breakpoints.only('tablet')]: {
                    width: '30px',
                    height: '30px'
                },
                [theme.breakpoints.down('tablet')]: {
                    width: '30px',
                    height: '30px'
                },
                cursor: 'pointer'
            }}
                onClick={handleOpenAvatarMenu}
                src="/broken-image.jpg"
            />
            <Menu
                sx={{ '& .MuiPaper-root': { backgroundColor: 'rgba(4, 3, 28, 0.8)', color: 'white', paddingTop: '20px' } }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={openCloseAvatarMenu}
                onClose={handleCloseAvatarMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {avatarMenuButtons.map((button) => {
                    return (
                        <Link key={button.title} href={`/${button.route}`} sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#d55190' } }}>
                            <MenuItem key={button.title} onClick={handleCloseAvatarMenu}>{button.title}</MenuItem>
                        </Link>
                    );
                })}
            </Menu>
        </Grid>
    )
}

export default HeaderAvatar