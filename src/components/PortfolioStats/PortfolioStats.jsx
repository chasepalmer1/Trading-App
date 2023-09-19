import React from 'react'
import './PortfolioStats.css'

const PortfolioStats = () => {
    return (
        <div className="outer" style={{display:"flex"}}>
            <div className="inner-box">
                <h3 style={{borderBottom: "2px solid #606266"}}>Portfolio Value</h3>
                <h3 className="num">$1103</h3>
            </div>
            <div className="inner-box">
                <h3 style={{borderBottom: "2px solid #606266"}}>Net Change</h3>
                <h3 className="num">+11.48</h3>
            </div>
        </div>
    )
}

export default PortfolioStats