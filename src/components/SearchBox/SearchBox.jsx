import React from 'react'

const SearchBox = () => {
    return (
        <div className="outer">
            <div className="inner-box">
                <h3 className="box-title">Search:</h3>
                <input style={{padding: "0"}} type="text" ></input>
            </div>
            <div className="inner-box">
                <h3 className="box-title">Recent Searches:</h3>
                <a>GOOG</a>
                <a>VOO</a>
                <a>QQQ</a>
            </div>
        </div>
    )
}

export default SearchBox