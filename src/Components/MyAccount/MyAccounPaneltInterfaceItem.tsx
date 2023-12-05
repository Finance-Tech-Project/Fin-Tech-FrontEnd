import React from 'react'
import { MyAccountPanelInterfaceToolbarButtons, MyAccountPanelInterfaceToolbarButtonsItem } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle'


interface Props {
    context: string,
    icon: JSX.Element
}

const MyAccountPanelInterfaceItem = ({context, icon}: Props) => {

    return (
        <MyAccountPanelInterfaceToolbarButtonsItem>
            <MyAccountPanelInterfaceToolbarButtons disableRipple startIcon={icon}>{context}</MyAccountPanelInterfaceToolbarButtons>
        </MyAccountPanelInterfaceToolbarButtonsItem> 
    )
}

export default MyAccountPanelInterfaceItem