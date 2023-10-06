import React from 'react'

import NavBar from '../components/NavBar/NavBar'
import PortfolioTracker from '../components/PortfolioTracker/PortfolioTracker'

const PortfolioTracking = () => {

    return (
        <>
            <NavBar displayContent="Portfolio Tracker"/>
            <div style={{display: "flex", alignContent: "center", justifyContent: "center", marginTop: "5%"}}>
                <PortfolioTracker/>
            </div>
        </>
    )

}

export default PortfolioTracking;