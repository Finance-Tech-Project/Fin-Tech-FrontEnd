import React, { useState } from 'react'
import { MyAccountPanelInterfaceToolbarButtons, MyAccountPanelInterfaceToolbarButtonsItem, MyAccountPanelInterfaceToolbarTypography } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle'


interface Props {
    context: string,
    icon: (param: boolean) => JSX.Element
}

const MyAccountPanelInterfaceItem = ({context, icon}: Props) => {
    const [mouseFocusEnter, setMouseFocusEnter] = useState(false);
    const [mouseFocusOut, setMouseFocusOut] = useState(false);

    const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (event.target) {
            setMouseFocusEnter(true);
            setMouseFocusOut(false);
        }
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (event.target) {
            setMouseFocusOut(true);
            setMouseFocusEnter(false);
        }
    };
    console.log(mouseFocusEnter)
    console.log(mouseFocusOut)
    return (
        <MyAccountPanelInterfaceToolbarButtonsItem>
            <MyAccountPanelInterfaceToolbarButtons disableRipple onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} >
                {icon(mouseFocusEnter)}
                <MyAccountPanelInterfaceToolbarTypography colorOnFocus={mouseFocusEnter}>{context}</MyAccountPanelInterfaceToolbarTypography>
            </MyAccountPanelInterfaceToolbarButtons>
        </MyAccountPanelInterfaceToolbarButtonsItem> 
    )
}

export default MyAccountPanelInterfaceItem