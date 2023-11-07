import { useState } from 'react'

const SearchBox = () => {

    const [ ticker, setTicker ] = useState();
    const [ numShares, setNumShares ] = useState();


    const handleBuy = () => {
        console.log("buy")
    }

    const handleSell = () => {
        console.log("sell");
    }

    const updateTicker = (e) => {
        setTicker(e.target.value)
        console.log(e.target.value)
    }

    const updateNumShares = (e) => {
        setNumShares(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="outer">
            <div className="inner-box">
                <h3 className="box-title">Search:</h3>
                <input onChange={updateTicker} style={{padding: "0", width: "90%"}} type="text" placeholder="Ticker"></input>
                <input onChange={updateNumShares} style={{padding: "0", width: "90%"}} type="text" placeholder="Number of Shares"></input>
                <div>
                    <button className="normal" onClick={handleBuy} style={{marginBottom: "1%", padding: "0", width: "10%", minWidth: "50px", marginRight: "2%"}}>Buy</button>
                    <button className="normal" onClick={handleSell} style={{marginBottom: "1%", padding: "0", width: "10%", minWidth: "50px"}}>Sell</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox