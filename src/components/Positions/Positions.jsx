import React from 'react'

import IndexTrack from '../IndexTrack/IndexTrack'

const Positions = () => {
    return (
        <div className="outer" style={{display: "flex", flexDirection: "column", overflowY: "scroll", overflowX: "hidden", height: "90%"}}>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
            <IndexTrack class="personal-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05%"/>
        </div>
    )
}

export default Positions