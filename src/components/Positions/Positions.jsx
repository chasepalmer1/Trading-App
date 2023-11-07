import { useState } from 'react'

import IndexTrack from '../IndexTrack/IndexTrack'

const Positions = () => {

    const [list, setList] = useState([
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "-65.08", dayGainPerc: "-3.05", shares: "2"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05", shares: "2"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05", shares: "2"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05", shares: "1"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05", shares: "1"},
    ]);

    return (
        <div className="outer" style={{width: "100%", display: "flex", flexDirection: "column", overflowY: "scroll", overflowX: "hidden", height: "90%"}}>
            <div className="personal-index">
                <h4 style={{margin:"0 10% 0 0", color: "#EFEFEF", width: "70%"}}>Ticker</h4>
            <div style={{display: "flex", justifyContent: "right", marginRight: "2%"}}>
                <h4 style={{marginRight: "10%"}}>Shares</h4>
                <h4>Price</h4>
                <h4>Day Gain</h4>
                <h4>Day Gain %</h4> 
            </div>
            </div>
            {
                list.map((index) => {
                    return <IndexTrack class="personal-index" ticker={index.ticker} shares={index.shares} price={index.price} dayGain={index.dayGain} dayGainPerc={index.dayGainPerc}/>
                })
            }
        </div>
    )
}

export default Positions