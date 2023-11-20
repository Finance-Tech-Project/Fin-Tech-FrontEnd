import React from 'react'
import { AnalyticTitleContainer } from '../../Styles/AnalyticStyles/AnalyticTitleStyle'
import { GeneralTitleHeader } from '../../Styles/AreCommonStyles/AreCommonStyles'
import AnalyticTitleCards from './AnalyticTitleCards'

const AnalyticTitle = () => {
    return (
        <AnalyticTitleContainer>
            <GeneralTitleHeader>
                In your analytic section you can:
            </GeneralTitleHeader>
            <AnalyticTitleCards />
        </AnalyticTitleContainer>
    )
}

export default AnalyticTitle