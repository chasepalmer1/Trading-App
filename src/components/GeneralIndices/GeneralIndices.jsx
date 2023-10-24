import React, { useEffect, useState } from 'react'
import './GeneralIndices.css'

import IndexTrack from '../IndexTrack/IndexTrack'
import axios from 'axios'
import { API_PORT } from '../../../api/models/constants'

const GeneralIndices = () => {

    const [list, setList] = useState([]);
    useEffect (() => {
        const fetchData = async() => {
            let l = []

            const tickers = ["aapl", "goog", "voo"]
            for (let ticker of tickers) {
                
                try {
                    const resp = await axios.post(`http://localhost:${API_PORT}/finance/quote`, {'ticker': ticker}, {headers: {"Content-Type": "application/json"}})
                    console.log(resp.data)
                    l.push({key: resp.data.name, price: `\$${resp.data.price}`})
                }
                catch(E) {
                    console.log(E)
                }
        
            }
            setList(l)
        }
        fetchData().catch(e => console.log(e))
    }, [list, setList])


    return (
        <div class="outer outer-gen">
            {
                list.map((index) => {
                    return <IndexTrack class="major-index" ticker={index.key} price={index.price}/>
                })
            }

        </div>
    )

}

export default GeneralIndices;