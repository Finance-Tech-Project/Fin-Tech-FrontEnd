import React, { useState } from 'react'
import { AccountButtonUpdate, AccountContainer, AccountTitle, AccountTypography } from '../../Styles/MyAccountStyles/AccountStyle'
import { Box, Divider } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { UserProfile } from '../../Types/LoginRegisterTypes'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { LoginRegisterTextField } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle'

const Account = () => {
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const userProfile: UserProfile | null = useAppSelector(state => state.userReducer);

    return (
        <AccountContainer>
            <Grid container>
                <Grid
                    desktop={11} desktopOffset={0.5}
                >
                    <Box sx={{
                        border: '2px solid rgba(70, 75, 114, 0.8)',
                        backgroundColor: 'rgba(4, 3, 28, 0.6)',
                        boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
                        margin: '50px 0px 50px 0',
                        borderTopLeftRadius: '120px',
                        borderBottomRightRadius: '120px',
                        padding: '50px 50px',
                        minHeight: '516px',
                    }}>

                        <AccountTitle>My Account</AccountTitle>
                        <Divider orientation='horizontal'
                            sx={{
                                backgroundColor: '#966fbd',
                                borderStyle: 'solid',
                                borderWidth: '3px',
                                marginTop: '20px'
                            }} />

                        <Grid container sx={{ width: '100%', minHeight: '445px' }}>
                            <Grid
                                desktop={5.25} desktopOffset={0}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
                                    <AccountTypography>First Name:</AccountTypography>
                                    <AccountTypography>{userProfile?.firstName}</AccountTypography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
                                    <AccountTypography>Last Name:</AccountTypography>
                                    <AccountTypography>{userProfile?.lastName}</AccountTypography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
                                    <AccountTypography>Login:</AccountTypography>
                                    <AccountTypography>{userProfile?.login}</AccountTypography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
                                    <AccountTypography>User role:</AccountTypography>
                                    <AccountTypography>{userProfile?.role}</AccountTypography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
                                    <AccountTypography>Email:</AccountTypography>
                                    <AccountTypography>{userProfile?.email}</AccountTypography>
                                </Box>
                            </Grid>

                            <Grid sx={{ display: 'flex', justifyContent: 'center' }}
                                desktop={0.5} desktopOffset={0.5}
                            >
                                <Divider orientation='vertical'
                                    sx={{
                                        borderWidth: '3px',
                                        backgroundColor: '#966fbd',
                                        height: '98.5%'
                                    }} />
                            </Grid>

                            <Grid sx={{ paddingTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                                desktop={5.25} desktopOffset={0.5}
                            >

                                <LoginRegisterTextField
                                    marginRight
                                    marginBottom
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value.trim())}
                                />

                                <LoginRegisterTextField
                                    marginBottom
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value.trim())}
                                />

                                <LoginRegisterTextField
                                    marginBottom
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value.trim())}
                                />

                                <LoginRegisterTextField
                                    variant='outlined'
                                    fullWidth label="Password"
                                    autoComplete="Password"
                                    required
                                    type="password"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value.trim())}
                                />

                                <AccountButtonUpdate>Update</AccountButtonUpdate>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </AccountContainer>
    )
}

export default Account