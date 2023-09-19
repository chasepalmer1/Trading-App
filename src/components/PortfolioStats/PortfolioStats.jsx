import React from 'react'

const PortfolioStats = () => {
    return (
        <div className="outer">
            <div className="inner-box">
                <h3 className="box-title">Portfolio Value</h3>
                <h3 className="num">$1103</h3>
            </div>
            <div className="inner-box">
                <h3 className="box-title">Net Change</h3>
                <h3 className="num">+11.48</h3>
            </div>
            <div className="inner-box">
                <h3 className="box-title">Free Cash</h3>
                <h3>$25.08</h3>
            </div>
        </div>
    )
}

export default PortfolioStats