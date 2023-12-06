import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Avatar, Link, Menu, MenuItem } from '@mui/material';
import { theme } from '../../../Constants/MaterialConstants/theme';
import { avatarMenuButtons } from '../../../Constants/ProjectConstants/headerConstants';
import { MainHeaderAvatar } from '../../../Styles/HeaderStyles/HeaderStyles';
import { useAppSelector } from '../../../app/hooks';
import { UserProfile } from '../../../Types/LoginRegisterTypes';
import { createUserLoginInitials } from '../../../Functions/utilsFunctions';


const HeaderAvatar = () => {
    const userProfile: UserProfile | null = useAppSelector(state => state.userReducer);
    const [openCloseAvatarMenu, setOpenCloseAvatarMenu] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
            <MainHeaderAvatar
                alt="login"
                onClick={handleOpenAvatarMenu}
                {...createUserLoginInitials(userProfile?.firstName!, userProfile?.lastName!)}
            >
            </MainHeaderAvatar>

            <Menu
                sx={{ '& .MuiPaper-root': { backgroundColor: 'rgba(4, 3, 28, 0.8)', color: 'white', paddingTop: '20px' } }}
                anchorEl={anchorEl}
                open={openCloseAvatarMenu}
                onClose={handleCloseAvatarMenu}
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