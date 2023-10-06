import { useState } from 'react'; 
import './PortfolioTracker.css'
import IndexTrack from '../IndexTrack/IndexTrack';

const PortfolioTracker = () => {

    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className="outer outer-tracker">
            <div style={{display: "flex", alignItems: "center"}}>
                <h3>My Stocks</h3>
                <button className={active ? "red" : "normal"} onClick={handleClick} style={{maxWidth:"100px", height: "20px", padding: "0"}}>Remove</button>
            </div>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
        </div>
    )

}

export default PortfolioTracker