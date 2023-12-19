import React from 'react'
import { AccountContainer, AccountTitle, AccountTypography } from '../../Styles/MyAccountStyles/AccountStyle'
import { Box, Divider } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { UserProfile } from '../../Types/LoginRegisterTypes'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const Account = () => {
    const userProfile: UserProfile | null = useAppSelector(state => state.userReducer);

    return (
        <AccountContainer>
            <Grid container>
                <Grid desktop={11} desktopOffset={0.5}>
                    <Box sx={{
                        border: '2px solid rgba(70, 75, 114, 0.8)',
                        backgroundColor: 'rgba(4, 3, 28, 0.6)',
                        boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
                        margin: '50px 0px 50px 0',
                        borderTopLeftRadius: '120px',
                        borderBottomRightRadius: '120px',
                        padding: '50px 50px'
                    }}>

                        <AccountTitle>My Account</AccountTitle>
                        <Divider orientation='horizontal'
                            sx={{
                                backgroundColor: '#966fbd',
                                borderStyle: 'solid',
                                borderWidth: '3px',
                                marginTop: '20px'
                            }} />

                        <Grid container sx={{ width: '100%' }}>
                            <Grid
                                desktop={5.5} desktopOffset={0}
                            >

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
                                    <AccountTypography>Full Name:</AccountTypography>
                                    <AccountTypography>{userProfile?.firstName} {userProfile?.lastName}</AccountTypography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                                    <AccountTypography>Login:</AccountTypography>
                                    <AccountTypography>{userProfile?.login}</AccountTypography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                                    <AccountTypography>Email:</AccountTypography>
                                    <AccountTypography>{userProfile?.email}</AccountTypography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                                    <AccountTypography>User role:</AccountTypography>
                                    <AccountTypography>{userProfile?.roles}</AccountTypography>
                                </Box>
                            </Grid>

                            <Grid
                                desktopOffset={0.5}
                            >
                                <Divider orientation='vertical'
                                    sx={{
                                        backgroundColor: '#966fbd',
                                        borderStyle: 'solid',
                                        borderWidth: '3px'
                                    }} />
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </AccountContainer>
    )
}

export default Account