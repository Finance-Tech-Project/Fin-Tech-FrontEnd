import React, { useEffect } from 'react'
import { WatchListContainer, WatchListWrapper } from '../../Styles/MyAccountStyles/WatchListStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GeneralAccountTitleContainer, GeneralAccountsTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { Divider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { getWatchList } from '../../Actions/fetchWatchListActions';

const Watchlist = () => {
    const login = useAppSelector(state => state.userReducer?.login);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const dispatch = useAppDispatch();

    const handleDrawerOpen = () => {
        dispatch(setOpenColseToolbar(true));
    };

    useEffect(() => {
        console.log('watchlist rendered')
        getWatchList(login!);
    }, []);

    return (
        <WatchListContainer>
            <Grid container>
                <Grid mobileS={11} mobileSOffset={0.5}>
                    <WatchListWrapper>
                        <GeneralAccountTitleContainer>
                            <GeneralAccountsTitleHeader>Watchlist</GeneralAccountsTitleHeader>
                            {!openCloseToolbar && <MyAccountPanelInterfaceToolbarArrowRight onClick={handleDrawerOpen}></MyAccountPanelInterfaceToolbarArrowRight>}
                        </GeneralAccountTitleContainer>

                        <Divider orientation='horizontal'
                            sx={{
                                backgroundColor: '#966fbd',
                                borderStyle: 'solid',
                                borderWidth: '3px',
                                marginTop: '20px'
                            }} />
                    </WatchListWrapper>
                </Grid>
            </Grid>
        </WatchListContainer>
    )
}

export default Watchlist