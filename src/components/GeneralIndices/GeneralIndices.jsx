import React from 'react'
import './GeneralIndices.css'

import IndexTrack from '../IndexTrack/IndexTrack'
import axios from 'axios'
import { API_PORT } from '../../../api/models/constants'

const GeneralIndices = async() => {

    const ticker = "aapl";

    try {
        const resp = await axios.post(`http://localhost:${API_PORT}/finance/quote`, {'ticker': ticker}, {headers: {"Content-Type": "application/json"}})
        console.log(resp.body)
    }
    catch(E) {
        console.log(E)
    }


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