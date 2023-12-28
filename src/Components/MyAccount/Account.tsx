import React, { useEffect, useState } from 'react'
import { AccountButtonUpdate, AccountContainer, AccountItemContainer, AccountTitle, AccountTypography, AccountWrapper } from '../../Styles/MyAccountStyles/AccountStyle'
import { Divider } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { UserProfile } from '../../Types/LoginRegisterTypes'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { LoginRegisterTextField } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle'
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle'
interface Props {
    open: boolean
}
const Account = () => {
    const userProfile: UserProfile | null = useAppSelector(state => state.userReducer);
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleClear = () => {
		setPassword('');
		setFirstName('');
		setLastName('');
		setEmail('');
	};

	useEffect(() => {
		return () => handleClear();
	}, []);

    return (
        <AccountContainer>
            <Grid container>
                <Grid
                    laptopL={11} laptopLOffset={0.5}
                    desktop={11} desktopOffset={0.5}
                >
                    <AccountWrapper>
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
                                <AccountItemContainer>
                                    <AccountTypography>First Name:</AccountTypography>
                                    <AccountTypography>{userProfile?.firstName}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Last Name:</AccountTypography>
                                    <AccountTypography>{userProfile?.lastName}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Login:</AccountTypography>
                                    <AccountTypography>{userProfile?.login}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>User role:</AccountTypography>
                                    <AccountTypography>{userProfile?.role}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Password:</AccountTypography>
                                    <AccountTypography>{userProfile?.passwordSymbols && userProfile?.passwordSymbols}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Email:</AccountTypography>
                                    <AccountTypography>{userProfile?.email}</AccountTypography>
                                </AccountItemContainer>
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
                    </AccountWrapper>
                </Grid>
            </Grid>
        </AccountContainer>
    )
}

export default Account