import React from 'react'
import './GeneralIndices.css'

import IndexTrack from '../IndexTrack/IndexTrack'

const GeneralIndices = () => {

    return (
        <div class="outer outer-gen">
            <IndexTrack class="major-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05"/>
            <IndexTrack class="major-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05"/>
            <IndexTrack class="major-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05"/>
            <IndexTrack class="major-index" ticker="S&P 500 Index" price="4309.7" dayGain="65.08" dayGainPerc="3.05"/>

        </div>
    )

}

export default GeneralIndices;