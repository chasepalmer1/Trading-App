import React from 'react'
import PortfolioChart from '../components/PortfolioChart/PortfolioChart'
import SearchBox from '../components/SearchBox/SearchBox'
import PortfolioStats from '../components/PortfolioStats/PortfolioStats'
import Positions from '../components/Positions/Positions'

const PaperTrading = () => {

    return (
        <div className="page-body" style={{height: "75%"}}>
            <div className="bottom" style={{display: "flex", minHeight: '20vh', flexWrap: "wrap", gap: "2%"}}>
                <PortfolioStats></PortfolioStats>
                <SearchBox></SearchBox>
            </div>
            <div className="top" style={{display: "flex", minHeight: '50vh', flexWrap: "wrap", gap: "2%"}}>
                <PortfolioChart></PortfolioChart>
                <Positions></Positions>
            </div>
        </div>
    )

}

export default PaperTrading;