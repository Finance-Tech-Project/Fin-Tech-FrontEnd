import React from 'react'
import { MyAccountPanelInterfaceToolbarButtons, MyAccountPanelInterfaceToolbarButtonsItem } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle'
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer'
import { useAppDispatch } from '../../app/hooks'


interface Props {
    context: string,
    icon: JSX.Element
}

const MyAccountPanelInterfaceItem = ({context, icon}: Props) => {
    const dispatch = useAppDispatch();

    return (
        <MyAccountPanelInterfaceToolbarButtonsItem>
            <MyAccountPanelInterfaceToolbarButtons 
                onClick={() =>  dispatch(setOpenColseToolbar(false))} 
                disableRipple 
                startIcon={icon}
            >{context}</MyAccountPanelInterfaceToolbarButtons>
        </MyAccountPanelInterfaceToolbarButtonsItem> 
    )
}

export default MyAccountPanelInterfaceItem