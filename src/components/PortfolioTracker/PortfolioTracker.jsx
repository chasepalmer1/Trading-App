import { useState } from 'react'; 
import './PortfolioTracker.css'
import IndexTrack from '../IndexTrack/IndexTrack';

const PortfolioTracker = () => {

    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active);
    }

    const [list, setList] = useState([
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "-65.08", dayGainPerc: "-3.05"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05"},
        {ticker: "S&P 500 Index", price: "4309.78", dayGain: "65.08", dayGainPerc: "3.05"}
    ]);

    function removeList(index) {
        console.log(active);
        if (active) {
            const newList = list.filter((x) => x !== index);
            setList(newList);
        }
    }

    return (
        <div className="outer outer-tracker">
            <div style={{display: "flex", alignItems: "center"}}>
                <h3>My Stocks</h3>
                <button className={active ? "red" : "normal"} onClick={handleClick} style={{maxWidth:"100px", height: "20px", padding: "0"}}>Remove</button>
            </div>
            <div className="personal-index">
                <h4 style={{margin:"0 10% 0 0", color: "#EFEFEF", width: "100%"}}>Ticker</h4>
            <div style={{display: "flex", justifyContent: "right", marginRight: "2%"}}>
                <h4>Price</h4>
                <h4>Day Gain</h4>
                <h4>Day Gain %</h4> 
            </div>
            </div>
            {
                list.map((index) => {
                    return <IndexTrack class="personal-index" click={() => removeList(index)} ticker={index.ticker} price={index.price} dayGain={index.dayGain} dayGainPerc={index.dayGainPerc}/>
                })
            }
        </div>
    )

}

export default PortfolioTracker