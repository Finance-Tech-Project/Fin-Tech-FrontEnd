import React from 'react'
import { PortfolioContainer, PortfolioWrapper } from '../../Styles/MyAccountStyles/PortfolioStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GeneralAccountTitleContainer, GeneralAccountsTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles';
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';

const Portfolio = () => {
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const dispatch = useAppDispatch();

    const handleDrawerOpen = () => {
        dispatch(setOpenColseToolbar(true));
    };

    return (
        <PortfolioContainer>
            <Grid container>
                <Grid>
                    <PortfolioWrapper>
                        <GeneralAccountTitleContainer>
                            {!openCloseToolbar && <MyAccountPanelInterfaceToolbarArrowRight onClick={handleDrawerOpen}></MyAccountPanelInterfaceToolbarArrowRight>}
                            <GeneralAccountsTitleHeader>Portfolio</GeneralAccountsTitleHeader>
                        </GeneralAccountTitleContainer>
                    </PortfolioWrapper>
                </Grid>
            </Grid>
        </PortfolioContainer>
    )
}

export default Portfolio