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
            // function sleep(ms) {
            //     return new Promise(resolve => setTimeout(resolve, ms));
            //   }
          
            //   // waits for 1000ms
            //   await sleep(60000);
            // setList(l)
            return l;
        }
        fetchData().then(data => {
            setList([...data])
        })
        const l = fetchData().catch(e => console.log(e))
        console.log(l)
        setList(l)
    }, [list])


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